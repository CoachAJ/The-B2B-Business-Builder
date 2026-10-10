import re
import csv
import json
import time
import urllib.parse
from typing import List, Dict, Optional
try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    requests = None
    BeautifulSoup = None

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

EMAIL_REGEX = re.compile(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+")
PHONE_REGEX = re.compile(r"\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b")

# Domains to ignore for contact emails
IGNORE_EMAIL_DOMAINS = [
    "sentry.io", "wixpress.com", "example.com", "schema.org", "domain.com", 
    "wordpress.org", "googleapis.com", "w3.org", "cloudflare.com"
]

def search_duckduckgo(query: str, max_results: int = 10) -> List[Dict[str, str]]:
    """
    Search DuckDuckGo HTML endpoint for target prospects.
    """
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    results = []
    try:
        resp = requests.post(
            "https://html.duckduckgo.com/html/",
            data={"q": query},
            headers=HEADERS,
            timeout=10
        )
        if resp.status_code == 200:
            soup = BeautifulSoup(resp.text, "html.parser")
            links = soup.find_all("a", class_="result__snippet")
            titles = soup.find_all("a", class_="result__url")
            result_links = soup.find_all("a", class_="result__url")

            for tag in soup.find_all("div", class_="result__body"):
                a_title = tag.find("a", class_="result__title") or tag.find("h2", class_="result__title")
                a_snippet = tag.find("a", class_="result__snippet")
                a_url = tag.find("a", class_="result__url")

                title_text = a_title.get_text(strip=True) if a_title else ""
                snippet_text = a_snippet.get_text(strip=True) if a_snippet else ""
                raw_url = a_url.get("href", "") if a_url else ""

                # Unquote DuckDuckGo redirect url
                if "uddg=" in raw_url:
                    parsed = urllib.parse.parse_qs(urllib.parse.urlparse(raw_url).query)
                    target_url = parsed.get("uddg", [raw_url])[0]
                else:
                    target_url = raw_url.strip()

                if target_url and target_url.startswith("http") and not any(d in target_url for d in ["duckduckgo", "youtube.com", "facebook.com", "instagram.com", "yelp.com", "wikipedia.org"]):
                    results.append({
                        "name": title_text.split(" - ")[0].split(" | ")[0].strip(),
                        "url": target_url,
                        "snippet": snippet_text
                    })
                if len(results) >= max_results:
                    break
    except Exception as e:
        print(f"Search warning: {e}")
    return results

def scrape_contact_info(url: str) -> Dict[str, Optional[str]]:
    """
    Inspects a website and common contact pages to find email and phone.
    """
    data = {"email": None, "phone": None}
    visited = set()
    
    # Try home page and contact subpages
    candidates = [url]
    base_url = url.rstrip("/")
    candidates.extend([f"{base_url}/contact", f"{base_url}/contact-us", f"{base_url}/about"])

    for page_url in candidates[:3]:
        if page_url in visited:
            continue
        visited.add(page_url)
        try:
            resp = requests.get(page_url, headers=HEADERS, timeout=7)
            if resp.status_code == 200:
                text = resp.text
                emails = EMAIL_REGEX.findall(text)
                for email in emails:
                    email_clean = email.lower().strip()
                    domain = email_clean.split("@")[-1]
                    if not any(ign in domain for ign in IGNORE_EMAIL_DOMAINS) and not email_clean.endswith((".png", ".jpg", ".webp")):
                        data["email"] = email_clean
                        break
                
                phones = PHONE_REGEX.findall(text)
                if phones and not data["phone"]:
                    data["phone"] = phones[0].strip()

                if data["email"] and data["phone"]:
                    break
        except Exception:
            continue
    return data

def discover_leads(keyword: str, location: str, vertical: str, count: int = 5) -> List[Dict[str, str]]:
    """
    Discovers businesses and extracts contact profiles.
    """
    if requests is None or BeautifulSoup is None:
        print("[WARNING] 'requests' or 'beautifulsoup4' is not installed in the current Python environment.")
        print("To enable web scraping, run: pip install requests beautifulsoup4")
        return []
    
    query = f'"{keyword}" "{location}"'
    print(f"Searching for: {query}...")
    search_hits = search_duckduckgo(query, max_results=count)
    leads = []

    for hit in search_hits:
        print(f"Inspecting: {hit['name']} ({hit['url']})...")
        contacts = scrape_contact_info(hit["url"])
        leads.append({
            "first_name": "Coach / Director" if vertical == "aau_basketball" else ("Dr." if vertical == "holistic_clinics" else "Director"),
            "last_name": "",
            "business_name": hit["name"],
            "website": hit["url"],
            "email": contacts.get("email") or "",
            "phone": contacts.get("phone") or "",
            "vertical": vertical,
            "city": location,
            "notes": hit["snippet"]
        })
        time.sleep(1)

    return leads

if __name__ == "__main__":
    print("Testing Lead Discovery...")
    test_leads = discover_leads("basketball academy", "Harlem New York", "aau_basketball", count=2)
    print(json.dumps(test_leads, indent=2))
