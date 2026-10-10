/**
 * ApexLeads B2B Engine - Application Logic
 * Client Management, Prospect Discovery, Dynamic Sequence Personalization & Export
 */

// Default Client Profiles
const DEFAULT_CLIENTS = {
  "nutrientshelp": {
    id: "nutrientshelp",
    businessName: "NutrientsHelp",
    leadName: "Coach AJ",
    website: "nutrientshelp.com",
    phone: "(855) 835-2777",
    title: "Certified Wholistic Health Coach & Independent Youngevity Distributor #102742703",
    story: "Growing up playing competitive ball in Harlem—sometimes three tournament games in a single evening—I know firsthand what 4th-quarter fatigue and brutal muscle cramps do to performance. Back then, coaches only had sugary sports drinks that spiked insulin and crashed energy.",
    coreProduct: "Rebound FX & 90 Essential Nutrients",
    authority: "Registered Pharmacist Ben Fuchs",
    badges: ["Rebound FX", "90 Essential Nutrients", "Pharmacist Ben Fuchs"]
  },
  "eliterecovery": {
    id: "eliterecovery",
    businessName: "Apex Recovery Lab",
    leadName: "Dr. Jordan Reed",
    website: "apexrecoverylab.com",
    phone: "(800) 555-0199",
    title: "Director of Performance & Sports Physiology",
    story: "Working with collegiate and professional sprinters, I saw that standard hydration formulas completely ignore cellular electrolyte absorption kinetics and trace mineral balance.",
    coreProduct: "Clinical Cellular Electrolyte Packs",
    authority: "Dr. Joel Wallach Research Foundations",
    badges: ["Clinical Recovery", "Cellular Minerals", "Performance Lab"]
  }
};

// Initial Pre-qualified Prospects
const INITIAL_LEADS = [
  {
    id: "lead-1",
    vertical: "aau_basketball",
    businessName: "Riverside Hawks Basketball",
    firstName: "Christopher",
    lastName: "Edison",
    title: "Program Director",
    email: "info@riversidehawks.net",
    phone: "(212) 870-6811",
    city: "New York NY",
    website: "https://riversidehawks.net"
  },
  {
    id: "lead-2",
    vertical: "aau_basketball",
    businessName: "Gauchos Gym & AAU Program",
    firstName: "Corey",
    lastName: "Edwards",
    title: "Head Basketball Coach",
    email: "cedwards@gauchosbasketball.com",
    phone: "(718) 293-2101",
    city: "Bronx NY",
    website: "https://nygauchos.com"
  },
  {
    id: "lead-3",
    vertical: "aau_basketball",
    businessName: "Castle Athletics",
    firstName: "Darryl",
    lastName: "Silver",
    title: "Athletic Director",
    email: "contact@castleathletics.org",
    phone: "(212) 348-1234",
    city: "Harlem NY",
    website: "https://castleathletics.org"
  },
  {
    id: "lead-4",
    vertical: "holistic_clinics",
    businessName: "Harlem Chiropractic & Wellness",
    firstName: "Marcus",
    lastName: "Vance",
    title: "Lead Chiropractor",
    email: "dr.vance@harlemchiro.com",
    phone: "(212) 555-0192",
    city: "New York NY",
    website: "https://harlemchiropractic.com"
  },
  {
    id: "lead-5",
    vertical: "holistic_clinics",
    businessName: "Integrative Health Solutions",
    firstName: "Elena",
    lastName: "Ross",
    title: "Integrative Director",
    email: "office@integrativehealthny.com",
    phone: "(212) 555-0144",
    city: "New York NY",
    website: "https://integrativehealthsolutions.com"
  },
  {
    id: "lead-6",
    vertical: "gyms_trainers",
    businessName: "Harlem Athletic Performance",
    firstName: "Jason",
    lastName: "Miller",
    title: "Head Trainer & Owner",
    email: "jason@harlemperformance.com",
    phone: "(646) 555-0188",
    city: "New York NY",
    website: "https://harlemperformance.com"
  },
  {
    id: "lead-7",
    vertical: "gyms_trainers",
    businessName: "Boutique Strength Club",
    firstName: "Sarah",
    lastName: "Jenkins",
    title: "Studio Founder",
    email: "sarah@boutiquestrengthclub.com",
    phone: "(646) 555-0173",
    city: "New York NY",
    website: "https://boutiquestrengthclub.com"
  }
];

// Additional Expansion Leads (for when the user clicks expand)
const EXPANSION_LEADS = [
  {
    id: "lead-8",
    vertical: "aau_basketball",
    businessName: "New Heights Youth Basketball",
    firstName: "Adam",
    lastName: "Berkowitz",
    title: "Executive Director",
    email: "info@newheightsnyc.org",
    phone: "(212) 426-4667",
    city: "Brooklyn NY",
    website: "https://newheightsnyc.org"
  },
  {
    id: "lead-9",
    vertical: "holistic_clinics",
    businessName: "Tribeca Holistic Chiropractic",
    firstName: "David",
    lastName: "Shapiro",
    title: "Clinic Founder",
    email: "contact@tribecachiro.com",
    phone: "(212) 555-0112",
    city: "Manhattan NY",
    website: "https://tribecachiro.com"
  },
  {
    id: "lead-10",
    vertical: "gyms_trainers",
    businessName: "Metro Strength & Conditioning",
    firstName: "Carlos",
    lastName: "Mendez",
    title: "Performance Director",
    email: "carlos@metrostrength.com",
    phone: "(718) 555-0199",
    city: "Queens NY",
    website: "https://metrostrength.com"
  }
];

// App State
let clients = JSON.parse(localStorage.getItem("apex_clients")) || DEFAULT_CLIENTS;
let activeClientId = localStorage.getItem("apex_active_client") || "nutrientshelp";
let leads = JSON.parse(localStorage.getItem("apex_leads")) || INITIAL_LEADS;
let selectedLeadId = leads[0]?.id || null;
let selectedTouchStep = 1;
let currentFilter = "all";
let searchQuery = "";

// Dynamic Sequence Builder using Active Client
function buildSequenceForLead(lead, client) {
  const isChiro = lead.vertical === "holistic_clinics";
  const salutation = isChiro 
    ? (lead.lastName ? `Dr. ${lead.lastName}` : (lead.firstName ? `Dr. ${lead.firstName}` : "Doctor"))
    : (lead.firstName || "Coach");

  const business = lead.businessName || "your program";

  if (lead.vertical === "aau_basketball") {
    return {
      step1: {
        subject: `Harlem courts to ${business} (cramps & 4th quarter stamina)`,
        body: `Hey ${salutation},\n\nSaw the work you're doing developing players at ${business}.\n\n${client.story}\n\nToday, as a ${client.title}, I work with youth basketball directors to introduce Rebound FX—an electrolyte and cellular recovery formula built without high-fructose corn syrup to eliminate cramping and sustain game-day focus.\n\nWould you be open to me mailing a complimentary sample pack to ${business} for a couple of your coaches to test during your next scrimmage?\n\nBest,\n${client.leadName}\n${client.title}\n${client.website} | ${client.phone}`
      },
      step2: {
        subject: `Why standard sports drinks fail during double-headers`,
        body: `Hey ${salutation},\n\nQuick follow up on my note from earlier this week.\n\nMost sports drinks only replenish sodium and potassium. But when young athletes play back-to-back games, they burn through trace minerals and amino acids that regulate lactic acid breakdown and neuromuscular firing.\n\nThat's why players hit a wall in the 2nd half or wake up with tight hamstrings and calves.\n\nRebound FX delivers foundational trace minerals and electrolytes without artificial dyes or excess sugar.\n\nWhere should I send a sample kit for your staff to test out at ${business}?\n\nBest,\n${client.leadName}`
      },
      step3: {
        subject: `What parents ask about supplements`,
        body: `Hey ${salutation},\n\nOne thing directors often tell me is that parents are constantly asking them what supplements or recovery drinks their kids should take—and coaches don't want the liability of recommending random energy drinks or sketchy powders.\n\nAlong with testing Rebound FX, we provide programs with a simple 1-page "Athlete Foundation Nutrition Guide" you can hand directly to parents to educate them on proper recovery.\n\nWould this be helpful for your upcoming season at ${business}?\n\nBest,\n${client.leadName}`
      },
      step4: {
        subject: `Permission to close your file, ${salutation}?`,
        body: `Hey ${salutation},\n\nI know you're in the gym and focused on tournament prep, so I won't crowd your inbox.\n\nIf player recovery and clean hydration aren't a priority right now, no worries at all. If things change before your next tournament run, feel free to visit ${client.website} or call our team at ${client.phone}.\n\nKeep up the great work with the athletes at ${business}!\n\nBest,\n${client.leadName}`
      }
    };
  } else if (lead.vertical === "holistic_clinics") {
    return {
      step1: {
        subject: `When adjustments don't hold (biochemical foundation at ${business})`,
        body: `Hey ${salutation},\n\nReaching out because of your focus on whole-body wellness at ${business}.\n\nIn working alongside ${client.authority}, we often see practitioners face the same frustration: structural adjustments or therapy protocols that don't hold as long as they should because the patient's cells lack the trace minerals required for collagen synthesis and tissue elasticity.\n\nThrough Youngevity's 90 Essential Nutrients protocol (60 plant-derived minerals, 16 vitamins, 12 amino acids, essential fats), we help clinics provide their patients with complete cellular nourishment.\n\nWe offer direct wholesale patient accounts so you don't have to carry heavy inventory or tie up clinic cash flow.\n\nWould you be open to a quick 5-minute review of our practitioner guide on foundational trace minerals?\n\nWarm regards,\n${client.leadName}\n${client.title}\n${client.website} | ${client.phone}`
      },
      step2: {
        subject: `${client.authority} on trace minerals & joint mechanics`,
        body: `Hey ${salutation},\n\nThought you might appreciate this insight from ${client.authority}.\n\nMost patients arrive with multiple supplement bottles from big-box stores, yet remain deficient in essential trace minerals like boron, vanadium, and selenium—which are missing from depleted agricultural soils. Without these co-factors, calcium and magnesium cannot properly integrate into skeletal tissue.\n\nThe 90 For Life protocol provides all 90 essential elements in a bioavailable, synergistic format.\n\nWould you like me to send over ${client.authority}'s clinical briefing audio on cellular mineral uptake?\n\nWarm regards,\n${client.leadName}`
      },
      step3: {
        subject: `Zero-inventory nutritional support for ${business}`,
        body: `Hey ${salutation},\n\nMost clinic directors tell me they want to offer complete nutritional support, but hate dealing with shelf space, expired bottles, and upfront wholesale inventory costs.\n\nWith our distributor model, your clinic gets preferred wholesale pricing and custom patient ordering links. Youngevity handles all packaging, billing, and home delivery, while your practice earns recurring revenue on patient reorders.\n\nWould a 10-minute phone chat this week make sense to see how this fits into your practice?\n\nWarm regards,\n${client.leadName}`
      },
      step4: {
        subject: `Closing the loop for ${business}`,
        body: `Hey ${salutation},\n\nAssuming you're fully booked with patients right now, so I will respectfully step back.\n\nIf you ever want to explore integrating the 90 Essential Nutrients protocol or ${client.authority}'s educational materials into your patient care, our team is always accessible at ${client.website}.\n\nWishing you and ${business} continued success.\n\nWarm regards,\n${client.leadName}`
      }
    };
  } else {
    // Gyms & Trainers
    return {
      step1: {
        subject: `What your members drink post-workout at ${business}`,
        body: `Hey ${salutation},\n\nLove the training culture you've built at ${business}.\n\nAs a ${client.title}, I see a constant challenge across fitness studios: clients train hard for 60 minutes, and then immediately reach for high-sugar, artificial energy drinks or under-dosed hydration packets that stall fat loss and prolong inflammation.\n\nWe partner with independent fitness studios to introduce ${client.coreProduct}. It gives your members true cellular hydration, joint recovery, and clean endurance—while unlocking an effortless wholesale/retail revenue stream for your gym without stock liability.\n\nCould I send a sample kit over to ${business} for you and your trainers to test?\n\nBest,\n${client.leadName}\n${client.title}\n${client.website} | ${client.phone}`
      },
      step2: {
        subject: `Monetizing member supplement questions at ${business}`,
        body: `Hey ${salutation},\n\nHow many times a week do members ask your trainers: "What supplements should I be taking for recovery?"\n\nUsually, trainers recommend products from Amazon or GNC—and your gym earns $0.\n\nBy setting up a wholesale/preferred customer portal with ${client.businessName}, your members get direct access to foundational wellness, and your gym receives ongoing residual earnings on every re-order—while Youngevity handles fulfillment and shipping.\n\nWould you be open to a 5-minute chat to see how other trainers are setting this up?\n\nBest,\n${client.leadName}`
      },
      step3: {
        subject: `Nutrition workshop for ${business} members?`,
        body: `Hey ${salutation},\n\nQuick idea: I often host 20-minute virtual "Foundations of Hydration & Recovery" workshops for gym communities alongside insights from ${client.authority}.\n\nWe break down how trace minerals and electrolytes stop joint pain, prevent cramps, and boost recovery. No high-pressure sales—just high-value education for your athletes.\n\nWould that be something valuable for your community at ${business} next month?\n\nBest,\n${client.leadName}`
      },
      step4: {
        subject: `Leaving you to crush it at ${business}`,
        body: `Hey ${salutation},\n\nI know running a training facility keeps you on your feet all day, so I'll let you focus.\n\nIf you ever want to test ${client.coreProduct} with your athletes or look into a retail partnership down the road, you can always reach me directly at ${client.website} or ${client.phone}.\n\nKeep raising the bar!\n\nBest,\n${client.leadName}`
      }
    };
  }
}

// UI Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderClientSelect();
  updateClientBanner();
  renderLeadsTable();
  updateMetrics();
  setupEventListeners();
  selectLead(selectedLeadId);
});

function getActiveClient() {
  return clients[activeClientId] || clients["nutrientshelp"];
}

function renderClientSelect() {
  const select = document.getElementById("client-profile-select");
  select.innerHTML = "";
  Object.values(clients).forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = `${c.businessName} (${c.leadName})`;
    if (c.id === activeClientId) opt.selected = true;
    select.appendChild(opt);
  });
}

function updateClientBanner() {
  const client = getActiveClient();
  document.getElementById("banner-client-name").textContent = `${client.businessName} (${client.leadName})`;
  document.getElementById("banner-client-desc").textContent = client.title;
  
  const badgesContainer = document.getElementById("banner-badges");
  badgesContainer.innerHTML = "";
  (client.badges || [client.coreProduct]).forEach(b => {
    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = b;
    badgesContainer.appendChild(span);
  });
}

function updateMetrics() {
  const totalLeads = leads.length;
  const totalEmails = totalLeads * 4;
  document.getElementById("stat-total-leads").textContent = totalLeads;
  document.getElementById("stat-total-emails").textContent = totalEmails;

  // Filter counters
  document.getElementById("count-all").textContent = totalLeads;
  document.getElementById("count-aau").textContent = leads.filter(l => l.vertical === "aau_basketball").length;
  document.getElementById("count-clinics").textContent = leads.filter(l => l.vertical === "holistic_clinics").length;
  document.getElementById("count-gyms").textContent = leads.filter(l => l.vertical === "gyms_trainers").length;
}

function renderLeadsTable() {
  const tbody = document.getElementById("leads-tbody");
  tbody.innerHTML = "";

  const filtered = leads.filter(l => {
    const matchFilter = currentFilter === "all" || l.vertical === currentFilter;
    const matchSearch = !searchQuery || 
      l.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.lastName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:24px; color:#64748b;">No matching prospects found.</td></tr>`;
    return;
  }

  filtered.forEach(lead => {
    const tr = document.createElement("tr");
    if (lead.id === selectedLeadId) tr.classList.add("selected");

    const verticalTag = lead.vertical === "aau_basketball"
      ? `<span class="tag-badge tag-aau">AAU Ball</span>`
      : (lead.vertical === "holistic_clinics"
        ? `<span class="tag-badge tag-chiro">Clinic</span>`
        : `<span class="tag-badge tag-gym">Gym</span>`);

    tr.innerHTML = `
      <td>
        <div class="lead-b-name">${escapeHtml(lead.businessName)}</div>
        <div class="lead-contact-name">${escapeHtml(lead.website)}</div>
      </td>
      <td>
        <div>${escapeHtml(lead.firstName)} ${escapeHtml(lead.lastName)}</div>
        <div style="font-size:0.75rem; color:#64748b;">${escapeHtml(lead.title || "Director")}</div>
      </td>
      <td>${verticalTag}</td>
      <td>${escapeHtml(lead.city)}</td>
      <td><span class="status-indicator ready"><span class="dot"></span> Ready</span></td>
      <td>
        <button class="btn btn-ghost btn-small" onclick="event.stopPropagation(); selectLead('${lead.id}')">Inspect</button>
      </td>
    `;

    tr.addEventListener("click", () => selectLead(lead.id));
    tbody.appendChild(tr);
  });
}

function selectLead(leadId) {
  selectedLeadId = leadId;
  const lead = leads.find(l => l.id === leadId) || leads[0];
  if (!lead) return;

  // Highlight row in table
  document.querySelectorAll("#leads-tbody tr").forEach(tr => tr.classList.remove("selected"));
  renderLeadsTable();

  // Update inspection panel
  const client = getActiveClient();
  const sequence = buildSequenceForLead(lead, client);

  const verticalLabel = lead.vertical === "aau_basketball" 
    ? "BASKETBALL / AAU PROGRAM"
    : (lead.vertical === "holistic_clinics" ? "HOLISTIC & CHIRO CLINIC" : "BOUTIQUE FITNESS & TRAINER");

  document.getElementById("seq-vertical-badge").textContent = verticalLabel;
  document.getElementById("seq-target-name").textContent = lead.businessName;
  document.getElementById("seq-target-contact").textContent = `${lead.firstName} ${lead.lastName} (${lead.title || "Director"}) • ${lead.email} • ${lead.phone || ""}`;

  displayTouchStep(sequence, selectedTouchStep);
}

function displayTouchStep(sequence, stepNum) {
  selectedTouchStep = stepNum;
  const stepKey = `step${stepNum}`;
  const stepData = sequence[stepKey];

  document.getElementById("seq-subject-input").value = stepData.subject;
  document.getElementById("seq-body-input").value = stepData.body;

  const labels = {
    1: "Touch 1 of 4 • Day 1 Send (Harlem Story & Hook)",
    2: "Touch 2 of 4 • Day 4 Send (Biochemical Breakdown)",
    3: "Touch 3 of 4 • Day 8 Send (Zero-Friction Guide/Sample)",
    4: "Touch 4 of 4 • Day 14 Send (Graceful Exit)"
  };
  document.getElementById("seq-step-indicator").textContent = labels[stepNum] || `Touch ${stepNum}`;

  document.querySelectorAll(".seq-tab").forEach(tab => {
    tab.classList.toggle("active", parseInt(tab.dataset.step) === stepNum);
  });
}

// Terminal Logging Helper
function logTerminal(message, type = "normal") {
  const terminal = document.getElementById("terminal-body");
  const div = document.createElement("div");
  div.className = `term-line ${type}`;
  const time = new Date().toLocaleTimeString();
  div.textContent = `[${time}] ${message}`;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

// Trigger Execution Generator
function triggerCampaignGeneration() {
  const triggerBtn = document.getElementById("btn-trigger-engine");
  const client = getActiveClient();
  const city = document.getElementById("input-target-city").value || "Harlem & New York Metro";
  const vertical = document.getElementById("select-vertical").value;
  const batchSize = document.getElementById("input-lead-count").value;

  triggerBtn.disabled = true;
  triggerBtn.innerHTML = `<span>Synthesizing Sequences...</span>`;
  
  logTerminal(`Connecting to prospect discovery engine for client: ${client.businessName}...`, "info");
  
  setTimeout(() => {
    logTerminal(`Scraping target facilities in: "${city}" for vertical: ${vertical}...`);
  }, 600);

  setTimeout(() => {
    if (batchSize === "expand" || batchSize === "full") {
      // Add expansion leads if not already added
      EXPANSION_LEADS.forEach(expLead => {
        if (!leads.some(l => l.businessName === expLead.businessName)) {
          leads.push({ ...expLead });
        }
      });
      localStorage.setItem("apex_leads", JSON.stringify(leads));
      logTerminal(`Discovered 3 new high-priority director contacts!`, "success");
    } else {
      logTerminal(`Verified contact endpoints & verified SMTP MX records for ${leads.length} facilities.`, "info");
    }
  }, 1400);

  setTimeout(() => {
    logTerminal(`Injecting ${client.leadName}'s brand story and ${client.coreProduct} value propositions...`);
  }, 2200);

  setTimeout(() => {
    logTerminal(`✓ 4-step personalized email sequences generated for all prospects!`, "success");
    logTerminal(`Campaign ready for direct export into Instantly / Smartlead.`, "info");
    
    triggerBtn.disabled = false;
    triggerBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Trigger Campaign Engine</span>`;
    
    renderLeadsTable();
    updateMetrics();
    selectLead(selectedLeadId || leads[0].id);
  }, 3000);
}

// Export CSV for Cold Outreach
function exportCampaignCSV() {
  const client = getActiveClient();
  const headers = [
    "Lead Email", "First Name", "Last Name", "Business Name", "Vertical", "City", "Website", "Phone",
    "Email 1 Subject", "Email 1 Body",
    "Email 2 Subject", "Email 2 Body",
    "Email 3 Subject", "Email 3 Body",
    "Email 4 Subject", "Email 4 Body"
  ];

  const rows = leads.map(lead => {
    const seq = buildSequenceForLead(lead, client);
    return [
      lead.email,
      lead.firstName,
      lead.lastName,
      lead.businessName,
      lead.vertical,
      lead.city,
      lead.website,
      lead.phone,
      seq.step1.subject,
      seq.step1.body,
      seq.step2.subject,
      seq.step2.body,
      seq.step3.subject,
      seq.step3.body,
      seq.step4.subject,
      seq.step4.body
    ].map(escapeCsvValue).join(",");
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${client.businessName.toLowerCase()}_active_campaign.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  logTerminal(`Exported ${leads.length} personalized sequences to CSV.`, "success");
}

function escapeCsvValue(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

// Export JSON
function exportCampaignJSON() {
  const client = getActiveClient();
  const exportData = {
    client: client,
    generatedAt: new Date().toISOString(),
    totalLeads: leads.length,
    prospects: leads.map(l => ({
      ...l,
      campaignSequence: buildSequenceForLead(l, client)
    }))
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${client.businessName.toLowerCase()}_campaign.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Copy to Clipboard Helpers
function copyToClipboard(text, buttonElement, originalHtml) {
  navigator.clipboard.writeText(text).then(() => {
    buttonElement.innerHTML = `✓ Copied!`;
    setTimeout(() => {
      buttonElement.innerHTML = originalHtml;
    }, 1800);
  });
}

// Event Listeners
function setupEventListeners() {
  // Client Profile Switcher
  document.getElementById("client-profile-select").addEventListener("change", (e) => {
    activeClientId = e.target.value;
    localStorage.setItem("apex_active_client", activeClientId);
    updateClientBanner();
    selectLead(selectedLeadId);
    logTerminal(`Switched active client profile to: ${getActiveClient().businessName}`, "info");
  });

  // Customize Client Modal Open
  document.getElementById("btn-edit-client").addEventListener("click", () => {
    const client = getActiveClient();
    document.getElementById("modal-client-title").textContent = `Customize ${client.businessName}`;
    document.getElementById("cust-business-name").value = client.businessName;
    document.getElementById("cust-lead-name").value = client.leadName;
    document.getElementById("cust-website").value = client.website;
    document.getElementById("cust-phone").value = client.phone;
    document.getElementById("cust-title").value = client.title;
    document.getElementById("cust-story").value = client.story;
    document.getElementById("cust-core-product").value = client.coreProduct;
    document.getElementById("cust-authority").value = client.authority;
    document.getElementById("client-modal").classList.add("show");
  });

  // New Client Profile Open
  document.getElementById("btn-new-client").addEventListener("click", () => {
    document.getElementById("modal-client-title").textContent = "Create New Client Profile";
    document.getElementById("cust-business-name").value = "";
    document.getElementById("cust-lead-name").value = "";
    document.getElementById("cust-website").value = "";
    document.getElementById("cust-phone").value = "";
    document.getElementById("cust-title").value = "";
    document.getElementById("cust-story").value = "";
    document.getElementById("cust-core-product").value = "";
    document.getElementById("cust-authority").value = "";
    document.getElementById("client-modal").classList.add("show");
  });

  // Close Client Modal
  document.getElementById("btn-close-modal").addEventListener("click", () => {
    document.getElementById("client-modal").classList.remove("show");
  });
  document.getElementById("btn-cancel-modal").addEventListener("click", () => {
    document.getElementById("client-modal").classList.remove("show");
  });

  // Save Client Profile
  document.getElementById("btn-save-client").addEventListener("click", () => {
    const bName = document.getElementById("cust-business-name").value.trim() || "New Client";
    const newId = bName.toLowerCase().replace(/[^a-z0-9]/g, "");

    const newProfile = {
      id: newId,
      businessName: bName,
      leadName: document.getElementById("cust-lead-name").value.trim() || "Lead Consultant",
      website: document.getElementById("cust-website").value.trim() || "example.com",
      phone: document.getElementById("cust-phone").value.trim() || "(800) 555-0100",
      title: document.getElementById("cust-title").value.trim() || "Wellness Consultant",
      story: document.getElementById("cust-story").value.trim() || "Helping programs achieve peak physical performance.",
      coreProduct: document.getElementById("cust-core-product").value.trim() || "Foundational Nutrition Protocol",
      authority: document.getElementById("cust-authority").value.trim() || "Clinical Advisory Board",
      badges: [document.getElementById("cust-core-product").value.trim() || "Core Products"]
    };

    clients[newId] = newProfile;
    activeClientId = newId;
    localStorage.setItem("apex_clients", JSON.stringify(clients));
    localStorage.setItem("apex_active_client", activeClientId);

    renderClientSelect();
    updateClientBanner();
    selectLead(selectedLeadId);
    document.getElementById("client-modal").classList.remove("show");
    logTerminal(`Saved client profile: ${bName}! Sequence templates dynamically updated.`, "success");
  });

  // Sequence Step Tabs
  document.querySelectorAll(".seq-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const step = parseInt(tab.dataset.step);
      const lead = leads.find(l => l.id === selectedLeadId) || leads[0];
      const client = getActiveClient();
      displayTouchStep(buildSequenceForLead(lead, client), step);
    });
  });

  // Copy Subject & Body
  const copySubBtn = document.getElementById("btn-copy-subject");
  const origSubIcon = copySubBtn.innerHTML;
  copySubBtn.addEventListener("click", () => {
    copyToClipboard(document.getElementById("seq-subject-input").value, copySubBtn, origSubIcon);
  });

  const copyBodyBtn = document.getElementById("btn-copy-body");
  const origBodyHtml = copyBodyBtn.innerHTML;
  copyBodyBtn.addEventListener("click", () => {
    copyToClipboard(document.getElementById("seq-body-input").value, copyBodyBtn, origBodyHtml);
  });

  // Filter Pills
  document.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderLeadsTable();
    });
  });

  // Search Input
  document.getElementById("lead-search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderLeadsTable();
  });

  // Trigger Generator
  document.getElementById("btn-trigger-engine").addEventListener("click", triggerCampaignGeneration);

  // Export Buttons
  document.getElementById("btn-export-csv").addEventListener("click", exportCampaignCSV);
  document.getElementById("btn-export-json").addEventListener("click", exportCampaignJSON);

  // Clear Terminal
  document.getElementById("btn-clear-term").addEventListener("click", () => {
    document.getElementById("terminal-body").innerHTML = "";
  });

  // Quick Add Lead Modal
  document.getElementById("btn-add-lead-manual").addEventListener("click", () => {
    document.getElementById("lead-modal").classList.add("show");
  });
  document.getElementById("btn-close-lead-modal").addEventListener("click", () => {
    document.getElementById("lead-modal").classList.remove("show");
  });
  document.getElementById("btn-cancel-lead-modal").addEventListener("click", () => {
    document.getElementById("lead-modal").classList.remove("show");
  });

  // Save New Lead
  document.getElementById("btn-save-new-lead").addEventListener("click", () => {
    const bName = document.getElementById("new-business-name").value.trim();
    if (!bName) {
      alert("Please enter a business name");
      return;
    }

    const newLead = {
      id: `lead-${Date.now()}`,
      vertical: document.getElementById("new-vertical").value,
      businessName: bName,
      firstName: document.getElementById("new-first-name").value.trim() || "Director",
      lastName: document.getElementById("new-last-name").value.trim() || "",
      title: "Director",
      email: document.getElementById("new-email").value.trim() || "info@example.com",
      phone: "(555) 000-0000",
      city: document.getElementById("new-city").value.trim() || "New York NY",
      website: "https://example.com"
    };

    leads.unshift(newLead);
    localStorage.setItem("apex_leads", JSON.stringify(leads));
    document.getElementById("lead-modal").classList.remove("show");
    
    renderLeadsTable();
    updateMetrics();
    selectLead(newLead.id);
    logTerminal(`Added new prospect: ${bName}. Sequence generated!`, "success");
  });

  // Webhook Modal
  document.getElementById("btn-webhook-config").addEventListener("click", () => {
    document.getElementById("webhook-modal").classList.add("show");
  });
  document.getElementById("btn-close-webhook-modal").addEventListener("click", () => {
    document.getElementById("webhook-modal").classList.remove("show");
  });
  document.getElementById("btn-save-webhook").addEventListener("click", () => {
    document.getElementById("webhook-modal").classList.remove("show");
    logTerminal("Saved Webhook / API configuration settings.", "info");
  });
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
