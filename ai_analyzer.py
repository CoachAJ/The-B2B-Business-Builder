import os
import re
import json
import argparse
from typing import Dict, Any, Optional
import requests

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
if not GEMINI_API_KEY:
    print("[Notice] GEMINI_API_KEY not found in environment. Please set it in your .env file.")
GEMINI_ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"

def fetch_website_text(url: str, max_chars: int = 5000) -> str:
    """Fetches text content from a target URL."""
    try:
        if not url.startswith("http"):
            url = f"https://{url}"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        resp = requests.get(url, headers=headers, timeout=10)
        if resp.status_code == 200:
            # Strip tags using simple regex to avoid dependencies
            clean = re.sub(r"<script.*?</script>", " ", resp.text, flags=re.DOTALL)
            clean = re.sub(r"<style.*?</style>", " ", clean, flags=re.DOTALL)
            clean = re.sub(r"<[^>]+>", " ", clean)
            clean = re.sub(r"\s+", " ", clean).strip()
            return clean[:max_chars]
    except Exception as e:
        print(f"[Warning] Could not fetch site directly: {e}")
    return ""

def analyze_business_with_gemini(business_input: str, is_url: bool = True) -> Dict[str, Any]:
    """
    Uses Gemini 2.5 Flash to analyze a business and synthesize B2B ICPs and value props.
    """
    site_text = ""
    if is_url:
        print(f"Fetching website content from: {business_input}...")
        site_text = fetch_website_text(business_input)

    prompt = f"""You are an elite B2B Growth Strategist and Outbound Copywriting Expert.
Analyze the following business and synthesize a high-converting B2B client acquisition profile.

Target Input / Context:
{business_input}

Website Extracted Content:
{site_text[:4000] if site_text else "None provided. Analyze based on target input name/URL."}

Respond ONLY with a valid JSON object matching this EXACT schema (no markdown formatting, no code blocks):
{{
  "businessName": "Clear Business Name",
  "industry": "Specific Industry / Sector",
  "leadName": "Founder / Lead Representative Name or Title",
  "title": "Professional Title / Credentials",
  "website": "{business_input if is_url else 'example.com'}",
  "phone": "(855) 000-0000",
  "coreProduct": "Core Solution / Product Hook",
  "story": "Concise 1-2 sentence origin story or unique credibility hook",
  "whyFails": "1 sentence on why conventional competitors or status-quo alternatives fail or cause hidden costs",
  "zeroFrictionCta": "A low-friction, high-value lead magnet (e.g., sample kit, free 15-min assessment, benchmark guide)",
  "badges": ["Key Tag 1", "Key Tag 2", "Key Tag 3"],
  "targetVerticals": [
    {{
      "id": "v1",
      "name": "High-Value B2B Target Audience 1",
      "pain": "Specific operational or financial pain point",
      "icon": "🎯"
    }},
    {{
      "id": "v2",
      "name": "High-Value B2B Target Audience 2",
      "pain": "Specific operational or financial pain point",
      "icon": "🚀"
    }},
    {{
      "id": "v3",
      "name": "High-Value B2B Target Audience 3",
      "pain": "Specific operational or financial pain point",
      "icon": "⚡"
    }}
  ],
  "sampleLeads": [
    {{
      "id": "lead-1",
      "vertical": "v1",
      "businessName": "Pinnacle Enterprise Group",
      "firstName": "David",
      "lastName": "Miller",
      "title": "Director",
      "email": "dmiller@example.com",
      "phone": "(555) 012-3456",
      "city": "New York NY",
      "website": "https://example.com"
    }}
  ]
}}"""

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.2,
            "responseMimeType": "application/json"
        }
    }

    try:
        resp = requests.post(
            GEMINI_ENDPOINT,
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=25
        )
        if resp.status_code == 200:
            raw_text = resp.json()["candidates"][0]["content"]["parts"][0]["text"].strip()
            # Clean possible markdown wrap
            if raw_text.startswith("```"):
                raw_text = re.sub(r"^```[a-z]*\n?", "", raw_text)
                raw_text = re.sub(r"\n?```$", "", raw_text)
            return json.loads(raw_text)
        else:
            print(f"Gemini API error ({resp.status_code}): {resp.text}")
    except Exception as e:
        print(f"Error calling Gemini: {e}")

    return {}

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Analyze a business using Gemini AI")
    parser.add_argument("--url", default="https://nutrientshelp.com", help="Website URL to analyze")
    args = parser.parse_args()

    print(f"Analyzing {args.url} with Gemini 2.5 Flash...")
    result = analyze_business_with_gemini(args.url)
    print("\n--- AI ANALYSIS RESULT ---")
    print(json.dumps(result, indent=2))
