import csv
import os
import re
from typing import List, Dict

TEMPLATES = {
    "aau_basketball": {
        "step1": {
            "subject": "Harlem courts to {business_name} (cramps & 4th quarter stamina)",
            "body": """Hey {salutation},

Saw the work you're doing developing players at {business_name}.

Growing up playing competitive ball in Harlem—sometimes three tournament games in a single evening—I know firsthand what 4th-quarter fatigue and brutal muscle cramps do to performance. Back then, coaches only had sugary sports drinks that spiked insulin and crashed energy.

Today, as a certified wholistic health coach, I work with youth basketball directors to introduce Rebound FX—an electrolyte and cellular recovery formula built without high-fructose corn syrup to eliminate cramping and sustain game-day focus.

Would you be open to me mailing a complimentary sample pack to {business_name} for a couple of your coaches to test during your next scrimmage?

Best,  
Coach AJ  
Certified Wholistic Health Coach  
nutrientshelp.com | (855) 835-2777"""
        },
        "step2": {
            "subject": "Why standard sports drinks fail during double-headers",
            "body": """Hey {salutation},

Quick follow up on my note from earlier this week.

Most sports drinks only replenish sodium and potassium. But when young athletes play back-to-back games, they burn through trace minerals and amino acids that regulate lactic acid breakdown and neuromuscular firing.

That's why players hit a wall in the 2nd half or wake up with tight hamstrings and calves.

Rebound FX delivers foundational trace minerals and electrolytes without artificial dyes or excess sugar. 

Where should I send a sample kit for your staff to test out at {business_name}?

Best,  
Coach AJ"""
        },
        "step3": {
            "subject": "What parents ask about supplements",
            "body": """Hey {salutation},

One thing directors often tell me is that parents are constantly asking them what supplements or recovery drinks their kids should take—and coaches don't want the liability of recommending random energy drinks or sketchy powders.

Along with testing Rebound FX, we provide programs with a simple 1-page "Athlete Foundation Nutrition Guide" you can hand directly to parents to educate them on proper recovery.

Would this be helpful for your upcoming season at {business_name}?

Best,  
Coach AJ"""
        },
        "step4": {
            "subject": "Permission to close your file, {salutation}?",
            "body": """Hey {salutation},

I know you're in the gym and focused on tournament prep, so I won't crowd your inbox.

If player recovery and clean hydration aren't a priority right now, no worries at all. If things change before your next tournament run, feel free to visit nutrientshelp.com or text our team at (855) 835-2777.

Keep up the great work with the athletes at {business_name}!

Best,  
Coach AJ"""
        }
    },
    "holistic_clinics": {
        "step1": {
            "subject": "When adjustments don't hold (biochemical foundation at {business_name})",
            "body": """Hey {salutation},

Reaching out because of your focus on whole-body wellness at {business_name}.

In working alongside registered pharmacist and educator Ben Fuchs (Pharmacist Ben), we often see practitioners face the same frustration: structural adjustments or therapy protocols that don't hold as long as they should because the patient's cells lack the trace minerals required for collagen synthesis and tissue elasticity.

Through Youngevity's 90 Essential Nutrients protocol (60 plant-derived minerals, 16 vitamins, 12 amino acids, essential fats), we help clinics provide their patients with complete cellular nourishment.

We offer direct wholesale patient accounts so you don't have to carry heavy inventory or tie up clinic cash flow.

Would you be open to a quick 5-minute review of our practitioner guide on foundational trace minerals?

Warm regards,  
Coach AJ  
Certified Wholistic Health Coach & Independent Youngevity Distributor  
nutrientshelp.com | (855) 835-2777"""
        },
        "step2": {
            "subject": "Pharmacist Ben Fuchs on trace minerals & joint mechanics",
            "body": """Hey {salutation},

Thought you might appreciate this insight from Pharmacist Ben Fuchs.

Most patients arrive with multiple supplement bottles from big-box stores, yet remain deficient in essential trace minerals like boron, vanadium, and selenium—which are missing from depleted agricultural soils. Without these co-factors, calcium and magnesium cannot properly integrate into skeletal tissue.

The 90 For Life protocol provides all 90 essential elements in a bioavailable, synergistic format.

Would you like me to send over Pharmacist Ben’s clinical briefing audio on cellular mineral uptake?

Warm regards,  
Coach AJ"""
        },
        "step3": {
            "subject": "Zero-inventory nutritional support for {business_name}",
            "body": """Hey {salutation},

Most clinic directors tell me they want to offer complete nutritional support, but hate dealing with shelf space, expired bottles, and upfront wholesale inventory costs.

With our distributor model, your clinic gets preferred wholesale pricing and custom patient ordering links. Youngevity handles all packaging, billing, and home delivery, while your practice earns recurring revenue on patient reorders.

Would a 10-minute phone chat this week make sense to see how this fits into your practice?

Warm regards,  
Coach AJ"""
        },
        "step4": {
            "subject": "Closing the loop for {business_name}",
            "body": """Hey {salutation},

Assuming you're fully booked with patients right now, so I will respectfully step back.

If you ever want to explore integrating the 90 Essential Nutrients protocol or Pharmacist Ben's educational materials into your patient care, our team is always accessible at nutrientshelp.com.

Wishing you and {business_name} continued success.

Warm regards,  
Coach AJ"""
        }
    },
    "gyms_trainers": {
        "step1": {
            "subject": "What your members drink post-workout at {business_name}",
            "body": """Hey {salutation},

Love the training culture you’ve built at {business_name}.

As a Certified Wholistic Health Coach, I see a constant challenge across fitness studios: clients train hard for 60 minutes, and then immediately reach for high-sugar, artificial energy drinks or under-dosed hydration packets that stall fat loss and prolong inflammation.

We partner with independent fitness studios to introduce Rebound FX and the 90 Essential Nutrients protocol. It gives your members true cellular hydration, joint recovery, and clean endurance—while unlocking an effortless wholesale/retail revenue stream for your gym without stock liability.

Could I send a sample kit over to {business_name} for you and your trainers to test?

Best,  
Coach AJ  
Certified Wholistic Health Coach  
nutrientshelp.com | (855) 835-2777"""
        },
        "step2": {
            "subject": "Monetizing member supplement questions at {business_name}",
            "body": """Hey {salutation},

How many times a week do members ask your trainers: "What supplements should I be taking for recovery?"

Usually, trainers recommend products from Amazon or GNC—and your gym earns $0.

By setting up a wholesale/preferred customer portal with NutrientsHelp, your members get direct access to foundational wellness, and your gym receives ongoing residual earnings on every re-order—while Youngevity handles the fulfillment and shipping.

Would you be open to a 5-minute chat to see how other trainers are setting this up?

Best,  
Coach AJ"""
        },
        "step3": {
            "subject": "Nutrition workshop for {business_name} members?",
            "body": """Hey {salutation},

Quick idea: I often host 20-minute virtual "Foundations of Hydration & Recovery" workshops for gym communities alongside insights from registered pharmacist Ben Fuchs.

We break down how trace minerals and electrolytes stop joint pain, prevent cramps, and boost recovery. No high-pressure sales—just high-value education for your athletes.

Would that be something valuable for your community at {business_name} next month?

Best,  
Coach AJ"""
        },
        "step4": {
            "subject": "Leaving you to crush it at {business_name}",
            "body": """Hey {salutation},

I know running a training facility keeps you on your feet all day, so I'll let you focus.

If you ever want to test Rebound FX with your athletes or look into a retail partnership down the road, you can always reach me directly at nutrientshelp.com or (855) 835-2777.

Keep raising the bar!

Best,  
Coach AJ"""
        }
    }
}

def format_salutation(lead: Dict[str, str]) -> str:
    vertical = lead.get("vertical", "aau_basketball")
    first_name = lead.get("first_name", "").strip()
    last_name = lead.get("last_name", "").strip()

    if vertical == "holistic_clinics":
        if last_name:
            return f"Dr. {last_name}"
        elif first_name and first_name.lower() != "dr.":
            return f"Dr. {first_name}"
        return "Doctor"
    
    if first_name and first_name.lower() not in ["coach / director", "director", "coach"]:
        return first_name
    return "Coach" if vertical == "aau_basketball" else "Team"

def build_campaign(leads: List[Dict[str, str]], output_csv_path: str):
    """
    Renders 4-step personalized email campaigns for each lead and saves to CSV.
    """
    fieldnames = [
        "vertical", "business_name", "first_name", "last_name", "email", 
        "phone", "website", "city",
        "email_1_subject", "email_1_body",
        "email_2_subject", "email_2_body",
        "email_3_subject", "email_3_body",
        "email_4_subject", "email_4_body"
    ]

    rendered_rows = []

    for lead in leads:
        vertical = lead.get("vertical", "aau_basketball")
        templates = TEMPLATES.get(vertical, TEMPLATES["aau_basketball"])
        
        business_name = lead.get("business_name") or "your facility"
        salutation = format_salutation(lead)

        row = {
            "vertical": vertical,
            "business_name": business_name,
            "first_name": lead.get("first_name", ""),
            "last_name": lead.get("last_name", ""),
            "email": lead.get("email", ""),
            "phone": lead.get("phone", ""),
            "website": lead.get("website", ""),
            "city": lead.get("city", "")
        }

        for step in ["step1", "step2", "step3", "step4"]:
            step_num = step.replace("step", "")
            tmpl = templates[step]
            subject = tmpl["subject"].format(business_name=business_name, salutation=salutation)
            body = tmpl["body"].format(business_name=business_name, salutation=salutation)
            row[f"email_{step_num}_subject"] = subject
            row[f"email_{step_num}_body"] = body

        rendered_rows.append(row)

    os.makedirs(os.path.dirname(os.path.abspath(output_csv_path)), exist_ok=True)
    with open(output_csv_path, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rendered_rows)

    print(f"Successfully generated campaign with {len(rendered_rows)} prospects -> {output_csv_path}")
    return rendered_rows
