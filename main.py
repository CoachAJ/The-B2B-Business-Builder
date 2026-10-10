import os
import sys
import csv
from campaign_builder import build_campaign
from lead_generator import discover_leads

def load_leads_from_csv(csv_path: str):
    leads = []
    with open(csv_path, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            leads.append(row)
    return leads

def print_banner():
    print("=" * 65)
    print("  NUTRIENTSHELP.COM | B2B LEAD & OUTREACH AUTOMATION SYSTEM")
    print("  Engineered for Coach AJ (Youngevity Distributor #102742703)")
    print("=" * 65)

def main():
    print_banner()
    print("Select an action:")
    print("1) Generate 4-Step Email Campaign from sample leads (Fast Demo)")
    print("2) Discover New Live Leads (Web Scraper) & Generate Campaign")
    print("3) Process Custom Leads CSV")
    print("4) ✨ Analyze Website with Gemini AI & Auto-Build Campaign")
    print("5) Exit")
    print("-" * 65)

    choice = input("Enter choice (1-5) [default: 1]: ").strip() or "1"

    if choice == "1":
        leads_path = os.path.join("leads", "sample_leads.csv")
        output_path = os.path.join("campaigns", "nutrientshelp_active_campaign.csv")
        leads = load_leads_from_csv(leads_path)
        print(f"\nLoaded {len(leads)} pre-qualified leads from {leads_path}...")
        build_campaign(leads, output_path)
        print(f"\n[DONE] Open '{output_path}' to review all personalized emails!")
        print("Ready to import directly into Instantly, Smartlead, Apollo, or send manually.")

    elif choice == "2":
        print("\nTarget Verticals:")
        print("a) aau_basketball (Rebound FX focus)")
        print("b) holistic_clinics (90 Essential Nutrients & Pharmacist Ben)")
        print("c) gyms_trainers (Wholesale & Trainer Revenue)")
        v_choice = input("Select vertical (a/b/c) [default: a]: ").strip().lower() or "a"
        v_map = {"a": "aau_basketball", "b": "holistic_clinics", "c": "gyms_trainers"}
        vertical = v_map.get(v_choice, "aau_basketball")

        default_kw = "youth basketball academy" if vertical == "aau_basketball" else ("chiropractic wellness clinic" if vertical == "holistic_clinics" else "strength performance gym")
        keyword = input(f"Search query [default: '{default_kw}']: ").strip() or default_kw
        location = input("Location/City [default: 'Harlem New York']: ").strip() or "Harlem New York"
        count_input = input("Number of prospects to find (1-10) [default: 3]: ").strip() or "3"
        count = int(count_input)

        leads = discover_leads(keyword, location, vertical, count=count)
        if not leads:
            print("No leads discovered for this query. Try a broader city or keyword.")
            return

        output_path = os.path.join("campaigns", f"discovered_{vertical}_campaign.csv")
        build_campaign(leads, output_path)
        print(f"\n[DONE] Discovered leads and generated campaign saved to: {output_path}")

    elif choice == "3":
        custom_csv = input("Enter path to custom CSV: ").strip()
        if not os.path.exists(custom_csv):
            print(f"File not found: {custom_csv}")
            return
        leads = load_leads_from_csv(custom_csv)
        output_path = os.path.join("campaigns", "custom_campaign.csv")
        build_campaign(leads, output_path)
        print(f"\n[DONE] Generated custom campaign saved to: {output_path}")

    elif choice == "4":
        from ai_analyzer import analyze_business_with_gemini
        url = input("Enter website URL to analyze [default: https://nutrientshelp.com]: ").strip() or "https://nutrientshelp.com"
        print(f"\nAnalyzing '{url}' using Gemini 2.5 Flash...")
        result = analyze_business_with_gemini(url)
        if result:
            print("\n" + "=" * 50)
            print(f"Business: {result.get('businessName')}")
            print(f"Industry: {result.get('industry')}")
            print(f"Core Hook: {result.get('coreProduct')}")
            print(f"Zero-Friction CTA: {result.get('zeroFrictionCta')}")
            print("\nTarget B2B Audiences (ICPs):")
            for idx, v in enumerate(result.get("targetVerticals", []), 1):
                print(f"  {idx}. {v.get('name')} -> Pain: {v.get('pain')}")
            print("=" * 50)

            sample_leads = result.get("sampleLeads", [])
            if sample_leads:
                output_path = os.path.join("campaigns", f"ai_{result.get('businessName', 'client')[:15].lower().replace(' ', '_')}_campaign.csv")
                build_campaign(sample_leads, output_path)
                print(f"\n[DONE] AI generated personalized campaign saved to: {output_path}")
        else:
            print("Could not complete AI analysis. Check your connection or API key.")

    else:
        print("Exiting.")

if __name__ == "__main__":
    main()
