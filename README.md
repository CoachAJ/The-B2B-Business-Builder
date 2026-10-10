# NutrientsHelp B2B Lead Automation System

A customized B2B lead generation and targeted outreach engine built specifically for **[nutrientshelp.com](https://nutrientshelp.com)** (Coach AJ | Independent Youngevity Distributor #102742703).

---

## 🎯 What This System Does

Instead of relying on generic AI tools that send robotic templates that get marked as spam, this engine:
1. **Identifies High-Value B2B Partners:** Targets 3 specific verticals with high repeat order volume:
   - **Youth Basketball Academies & AAU Programs** (Rebound FX focus)
   - **Holistic Clinics & Chiropractic Centers** (90 Essential Nutrients & Pharmacist Ben Fuchs focus)
   - **Boutique Gyms & Independent Performance Trainers** (Wholesale revenue & clean hydration focus)
2. **Finds & Extracts Leads:** Scrapes target businesses, websites, contact pages, emails, and phone numbers.
3. **Generates Hyper-Personalized 4-Step Email Campaigns:** Automatically populates authentic, high-converting outreach sequences tailored to each prospect's specific niche and name.
4. **Outputs Ready-to-Send Campaigns:** Creates CSV exports with custom Subject Lines and Email Bodies formatted for immediate import into cold email platforms (Instantly, Smartlead, Apollo, Lemlist) or direct manual sending.

---

## 🚀 How to Run & Deploy

### 1. Run Locally on your PC
- **Option A:** Double-click `run.bat` in this folder.
- **Option B:** Open `index.html` directly in your browser.

### 2. Deploy to Netlify via GitHub (Multi-User Web Hub)
This repository is configured out-of-the-box for Netlify via [`netlify.toml`](file:///c:/Users/atifj/OneDrive/Desktop/Lead%20automations/netlify.toml).

1. **Push this folder to a GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of ApexLeads B2B Engine"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. **Deploy on Netlify:**
   - Go to [Netlify.com](https://app.netlify.com) and click **"Add new site"** > **"Import an existing project"**.
   - Select **GitHub** and pick your newly created repository.
   - Netlify will automatically detect [`netlify.toml`](file:///c:/Users/atifj/OneDrive/Desktop/Lead%20automations/netlify.toml). Leave Build Command empty and Publish Directory as `.` (or root).
   - Click **Deploy Site**.
   - Your web app is live on a custom Netlify URL (e.g. `your-app.netlify.app`) with automatic updates on every git push!

---

## 📂 System File Structure

```text
Lead automations/
├── B2B_STRATEGY_PLAYBOOK.md          # Complete B2B playbook, value props, compliance rules
├── README.md                          # Documentation and instructions
├── main.py                            # Interactive CLI controller
├── run.bat                            # Windows 1-click launcher
├── lead_generator.py                  # Live web scraper & contact extractor
├── campaign_builder.py                # Sequence engine that personalizes emails
│
├── email_templates/                   # Multi-touch cold email sequences
│   ├── aau_basketball.md              # 4-step sequence for youth basketball/AAU
│   ├── holistic_clinics.md            # 4-step sequence for chiropractors/clinics
│   └── gyms_trainers.md               # 4-step sequence for gyms & fitness studios
│
├── leads/
│   └── sample_leads.csv               # Pre-qualified initial prospect dataset
│
└── campaigns/
    └── nutrientshelp_active_campaign.csv # Generated ready-to-send personalized campaign
```

---

## 📬 How to Send Your Campaigns

The output file at `campaigns/nutrientshelp_active_campaign.csv` includes all 4 email touches:
- `email_1_subject` & `email_1_body` (Day 1 - The Story Hook)
- `email_2_subject` & `email_2_body` (Day 4/5 - The Science Breakdown)
- `email_3_subject` & `email_3_body` (Day 8/10 - Zero-Friction Resource/Sample Offer)
- `email_4_subject` & `email_4_body` (Day 14/16 - Graceful Exit)

### Sending Options:
1. **Automated Sending Software (Recommended for scale):**
   - Import `nutrientshelp_active_campaign.csv` into **Instantly.ai**, **Smartlead.ai**, or **Apollo.io**.
   - Map the fields:
     - Step 1: `{{email_1_subject}}` and `{{email_1_body}}`
     - Step 2: `{{email_2_subject}}` and `{{email_2_body}}`
     - Step 3: `{{email_3_subject}}` and `{{email_3_body}}`
     - Step 4: `{{email_4_subject}}` and `{{email_4_body}}`
2. **Personal Manual Outreach (Recommended for high-value local programs):**
   - Open the CSV in Excel, copy the personalized text, and send directly from Coach AJ's personal inbox.
