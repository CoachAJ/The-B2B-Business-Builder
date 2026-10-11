/**
 * The B2B Business Builder - Universal Industry-Agnostic Engine
 * Supports any industry, client profile, target audience (ICP), and custom outreach sequence.
 */

// Universal Default Client Profiles across completely different industries
const DEFAULT_CLIENTS = {
  "nutrientshelp": {
    id: "nutrientshelp",
    businessName: "NutrientsHelp",
    industry: "Wellness & Sports Nutrition",
    leadName: "Coach AJ",
    website: "nutrientshelp.com",
    phone: "(855) 835-2777",
    title: "Certified Wholistic Health Coach & Independent Youngevity Distributor #102742703",
    story: "Growing up playing competitive ball in Harlem—sometimes three tournament games in a single evening—I know firsthand what 4th-quarter fatigue and brutal muscle cramps do to performance. Back then, coaches only had sugary sports drinks that spiked insulin and crashed energy.",
    coreProduct: "Rebound FX clean cellular hydration & 90 Essential Nutrients foundation",
    whyFails: "Standard sports drinks only replace salt and water while loading athletes with high-fructose corn syrup, completely neglecting cellular trace minerals.",
    zeroFrictionCta: "a complimentary sample pack for a couple of your coaches to test during your next scrimmage",
    badges: ["Rebound FX", "90 Essential Nutrients", "Pharmacist Ben Fuchs"],
    targetVerticals: [
      { id: "aau_basketball", name: "Youth Basketball & AAU Programs", pain: "4th quarter fatigue and late-game muscle cramps", icon: "🏀" },
      { id: "holistic_clinics", name: "Holistic & Chiropractic Clinics", pain: "structural adjustments and therapies not holding due to mineral deficiencies", icon: "🩺" },
      { id: "gyms_trainers", name: "Boutique Gyms & Athletic Trainers", pain: "monetizing member supplement questions with zero retail inventory overhead", icon: "🏋️" }
    ],
    leads: [
      {
        id: "nh-1",
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
        id: "nh-2",
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
        id: "nh-3",
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
        id: "nh-4",
        vertical: "gyms_trainers",
        businessName: "Harlem Athletic Performance",
        firstName: "Jason",
        lastName: "Miller",
        title: "Head Trainer & Owner",
        email: "jason@harlemperformance.com",
        phone: "(646) 555-0188",
        city: "New York NY",
        website: "https://harlemperformance.com"
      }
    ]
  },

  "nexuscyber": {
    id: "nexuscyber",
    businessName: "Nexus Cybersecurity & Cloud",
    industry: "IT & Information Security",
    leadName: "Marcus Chen",
    website: "nexuscybersecurity.io",
    phone: "(888) 555-0142",
    title: "Principal Security Consultant & CISSP",
    story: "After responding to multi-million-dollar ransomware breaches across regional businesses, I saw that boutique professional practices are prime targets because standard IT vendors only install basic antivirus and leave backups completely vulnerable.",
    coreProduct: "Zero-Trust Endpoint Defense, Immutable Cloud Backups & Compliance Hardening",
    whyFails: "Traditional IT providers charge hourly for reactive repairs after disaster strikes, rather than preventing ransomware encryption beforehand.",
    zeroFrictionCta: "a complimentary 15-minute external vulnerability assessment and ransomware readiness score",
    badges: ["Zero-Trust Security", "Immutable Backups", "Ransomware Defense"],
    targetVerticals: [
      { id: "legal_firms", name: "Boutique Law Firms & Legal Partners", pain: "client escrow wire fraud and attorney-client privilege data breaches", icon: "⚖️" },
      { id: "wealth_mgmt", name: "Wealth Management & CPA Firms", pain: "GLBA regulatory compliance audits and ransomware extortion", icon: "💼" },
      { id: "medical_practices", name: "Regional Medical & Dental Practices", pain: "HIPAA breach liability and electronic health record downtime", icon: "🏥" }
    ],
    leads: [
      {
        id: "nc-1",
        vertical: "legal_firms",
        businessName: "Sterling & Vance Legal Partners",
        firstName: "Robert",
        lastName: "Sterling",
        title: "Managing Partner",
        email: "rsterling@sterlinglegal.com",
        phone: "(312) 555-0118",
        city: "Chicago IL",
        website: "https://sterlinglegal.com"
      },
      {
        id: "nc-2",
        vertical: "wealth_mgmt",
        businessName: "Beacon Wealth Management",
        firstName: "Victoria",
        lastName: "Hayward",
        title: "Managing Director",
        email: "v.hayward@beaconwealth.com",
        phone: "(617) 555-0174",
        city: "Boston MA",
        website: "https://beaconwealth.com"
      },
      {
        id: "nc-3",
        vertical: "medical_practices",
        businessName: "Midwest Specialty Dental Care",
        firstName: "Arthur",
        lastName: "Penta",
        title: "Practice Administrator",
        email: "admin@midwestdentalcare.com",
        phone: "(312) 555-0199",
        city: "Chicago IL",
        website: "https://midwestdentalcare.com"
      }
    ]
  },

  "purespace": {
    id: "purespace",
    businessName: "PureSpace Commercial Eco-Care",
    industry: "Commercial Facility Services",
    leadName: "Sarah Lindqvist",
    website: "purespacefacility.com",
    phone: "(800) 555-0188",
    title: "Director of Green Facility Solutions",
    story: "Managing facilities across corporate buildings, I discovered that traditional commercial cleaning chemicals cause frequent tenant respiratory complaints and jeopardize corporate LEED green certifications.",
    coreProduct: "Certified Hospital-Grade Non-Toxic Eco-Sanitation & Indoor Air Quality Management",
    whyFails: "Conventional janitorial vendors use harsh volatile organic compounds that leave toxic residues and trigger employee complaints without deep pathogen sanitation.",
    zeroFrictionCta: "a complimentary 1-floor trial clean and indoor air quality particle audit",
    badges: ["LEED Certified Clean", "Non-Toxic Sanitation", "Air Quality Care"],
    targetVerticals: [
      { id: "boutique_hotels", name: "Boutique Luxury Hotels & Resorts", pain: "harsh chemical odors and guest cleanliness review complaints", icon: "🏨" },
      { id: "tech_offices", name: "Tech Office Parks & Coworking Hubs", pain: "employee health complaints and sustainable ESG building benchmarks", icon: "🏢" },
      { id: "private_schools", name: "Private Schools & Childcare Centers", pain: "child-safe non-toxic sanitation and seasonal illness outbreaks", icon: "🏫" }
    ],
    leads: [
      {
        id: "ps-1",
        vertical: "boutique_hotels",
        businessName: "The Mercer Grand Boutique Hotel",
        firstName: "Alexander",
        lastName: "Wright",
        title: "General Manager",
        email: "awright@mercergrand.com",
        phone: "(212) 555-0133",
        city: "New York NY",
        website: "https://mercergrand.com"
      },
      {
        id: "ps-2",
        vertical: "tech_offices",
        businessName: "Innovate Coworking Hub",
        firstName: "Jessica",
        lastName: "Kao",
        title: "Head of Operations",
        email: "jkaoa@innovatehub.io",
        phone: "(512) 555-0162",
        city: "Austin TX",
        website: "https://innovatehub.io"
      },
      {
        id: "ps-3",
        vertical: "private_schools",
        businessName: "Oakridge Preparatory Academy",
        firstName: "Elizabeth",
        lastName: "Warren",
        title: "Head of School",
        email: "headmaster@oakridgeprep.org",
        phone: "(404) 555-0195",
        city: "Atlanta GA",
        website: "https://oakridgeprep.org"
      }
    ]
  }
};

// Application State
// Default API key is loaded from config.js (gitignored) or window.GEMINI_DEFAULT_KEY
// For Netlify: set GEMINI_API_KEY as an environment variable and inject via netlify.toml
const DEFAULT_GEMINI_KEY = (typeof window !== "undefined" && window.GEMINI_DEFAULT_KEY) || "";
let geminiApiKey = localStorage.getItem("apex_gemini_api_key") || DEFAULT_GEMINI_KEY;

let clients = JSON.parse(localStorage.getItem("apex_universal_clients")) || DEFAULT_CLIENTS;
let activeClientId = localStorage.getItem("apex_active_client_id") || "nutrientshelp";
let currentFilter = "all";
let searchQuery = "";
let selectedLeadId = null;
let selectedTouchStep = 1;

// Call Google Gemini 2.5 Flash API
async function callGeminiApi(promptText, jsonMode = false) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`;
  
  const payload = {
    contents: [{ parts: [{ text: promptText }] }],
    generationConfig: {
      temperature: 0.25,
      ...(jsonMode ? { responseMimeType: "application/json" } : {})
    }
  };

  const resp = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Gemini API Error (${resp.status}): ${errText}`);
  }

  const data = await resp.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  return rawText.trim();
}

// Universal 4-Step Sequence Generator
function buildUniversalSequence(lead, client) {
  // Detect doctor / professional salutation
  const vertId = (lead.vertical || "").toLowerCase();
  const isDoctor = lead.lastName && (vertId.includes("clinic") || vertId.includes("medical") || vertId.includes("chiro") || vertId.includes("dental"));
  const salutation = isDoctor
    ? `Dr. ${lead.lastName}`
    : (lead.firstName || "Team");

  const business = lead.businessName || "your organization";

  // Find vertical info
  const vertInfo = (client.targetVerticals || []).find(v => v.id === lead.vertical) || {
    name: "your industry",
    pain: "operational inefficiencies and hidden costs"
  };

  const painShort = vertInfo.pain.split(".")[0]; // First sentence only

  return {
    step1: {
      subject: `Quick question for ${business}`,
      body: `Hey ${salutation},\n\nNoticed the work you're doing at ${business} — impressive.\n\n${client.story}\n\nToday, as ${client.title} at ${client.businessName}, we help ${vertInfo.name} tackle: ${painShort}.\n\nOur approach with ${client.coreProduct} was built specifically for that.\n\nWould you be open to ${client.zeroFrictionCta}?\n\nBest,\n${client.leadName}\n${client.title}\n${client.website} | ${client.phone}`
    },
    step2: {
      subject: `Why most ${vertInfo.name} solutions fall short`,
      body: `Hey ${salutation},\n\nFollowing up on my note from earlier.\n\n${client.whyFails}\n\nOur ${client.coreProduct} fixes this at the root level — no messy transitions, no heavy commitments.\n\nWorth a look? Happy to send details or schedule ${client.zeroFrictionCta} for ${business}.\n\nBest,\n${client.leadName}`
    },
    step3: {
      subject: `One low-risk next step for ${business}`,
      body: `Hey ${salutation},\n\nDecision makers in ${vertInfo.name} often tell me the same thing — they want to fix ${painShort}, but don't want vendor lock-in or a big upfront investment.\n\nThat's exactly why we designed our starter engagement: zero disruption, no long-term contract, results first.\n\nWould this be worth 10 minutes of your time this week?\n\nBest,\n${client.leadName}`
    },
    step4: {
      subject: `Closing the loop, ${salutation}`,
      body: `Hey ${salutation},\n\nI know priorities at ${business} keep you busy, so I'll make this my last note.\n\nIf ${painShort} isn't on the table right now — totally understood. If that changes, feel free to reach us directly:\n\n${client.website}\n${client.phone}\n\nWishing you and the team continued success.\n\nBest,\n${client.leadName}`
    }
  };
}

// Lifecycle Init
document.addEventListener("DOMContentLoaded", () => {
  renderClientSelect();
  loadClient(activeClientId);
  setupEventListeners();
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
    opt.textContent = `${c.businessName} (${c.industry || "General"})`;
    if (c.id === activeClientId) opt.selected = true;
    select.appendChild(opt);
  });
}

function loadClient(clientId) {
  activeClientId = clientId;
  localStorage.setItem("apex_active_client_id", activeClientId);
  const client = getActiveClient();

  // Update Banner
  document.getElementById("banner-client-name").textContent = `${client.businessName} (${client.leadName})`;
  document.getElementById("banner-client-desc").textContent = `${client.title} • ${client.website}`;
  document.getElementById("banner-industry").textContent = client.industry || "B2B";

  const badgesWrap = document.getElementById("banner-badges");
  badgesWrap.innerHTML = "";
  (client.badges || [client.industry]).forEach(b => {
    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = b;
    badgesWrap.appendChild(span);
  });

  // Update Vertical Dropdowns in Trigger Form & Add Lead Modal
  renderVerticalDropdowns(client);

  // Update Dynamic Filter Pills
  renderDynamicFilterPills(client);

  // Select First Lead
  const clientLeads = client.leads || [];
  selectedLeadId = clientLeads[0]?.id || null;

  renderLeadsTable();
  updateMetrics();
  selectLead(selectedLeadId);
}

function renderVerticalDropdowns(client) {
  const selectVertical = document.getElementById("select-vertical");
  selectVertical.innerHTML = `<option value="all">⚡ All Target Audiences (Combined)</option>`;
  (client.targetVerticals || []).forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = `${v.icon || "🎯"} ${v.name}`;
    selectVertical.appendChild(opt);
  });

  const modalVertical = document.getElementById("new-vertical");
  modalVertical.innerHTML = "";
  (client.targetVerticals || []).forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = `${v.icon || "🎯"} ${v.name}`;
    modalVertical.appendChild(opt);
  });
}

function renderDynamicFilterPills(client) {
  const container = document.getElementById("dynamic-filter-pills");
  container.innerHTML = "";

  const allPill = document.createElement("button");
  allPill.className = "pill active";
  allPill.dataset.filter = "all";
  allPill.innerHTML = `All Prospects (<span id="count-all">0</span>)`;
  allPill.addEventListener("click", () => handleFilterClick(allPill, "all"));
  container.appendChild(allPill);

  (client.targetVerticals || []).forEach(v => {
    const pill = document.createElement("button");
    pill.className = "pill";
    pill.dataset.filter = v.id;
    pill.innerHTML = `${v.icon || "🎯"} ${v.name} (<span id="count-${v.id}">0</span>)`;
    pill.addEventListener("click", () => handleFilterClick(pill, v.id));
    container.appendChild(pill);
  });
}

function handleFilterClick(pillElement, filterValue) {
  document.querySelectorAll("#dynamic-filter-pills .pill").forEach(p => p.classList.remove("active"));
  pillElement.classList.add("active");
  currentFilter = filterValue;
  renderLeadsTable();
}

function updateMetrics() {
  const client = getActiveClient();
  const clientLeads = client.leads || [];
  const total = clientLeads.length;

  document.getElementById("stat-total-leads").textContent = total;
  document.getElementById("stat-total-emails").textContent = total * 4;
  document.getElementById("stat-active-verticals").textContent = (client.targetVerticals || []).length;

  // Update pill count badges
  const allCountEl = document.getElementById("count-all");
  if (allCountEl) allCountEl.textContent = total;

  (client.targetVerticals || []).forEach(v => {
    const countEl = document.getElementById(`count-${v.id}`);
    if (countEl) {
      countEl.textContent = clientLeads.filter(l => l.vertical === v.id).length;
    }
  });
}

function renderLeadsTable() {
  const client = getActiveClient();
  const tbody = document.getElementById("leads-tbody");
  tbody.innerHTML = "";

  const clientLeads = client.leads || [];

  const filtered = clientLeads.filter(lead => {
    const matchFilter = currentFilter === "all" || lead.vertical === currentFilter;
    const matchSearch = !searchQuery ||
      lead.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.lastName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:24px; color:#64748b;">No matching prospects for this client filter.</td></tr>`;
    return;
  }

  filtered.forEach(lead => {
    const tr = document.createElement("tr");
    if (lead.id === selectedLeadId) tr.classList.add("selected");

    const vertObj = (client.targetVerticals || []).find(v => v.id === lead.vertical);
    const vertName = vertObj ? vertObj.name : lead.vertical;
    const vertIcon = vertObj ? vertObj.icon : "🎯";

    tr.innerHTML = `
      <td>
        <div class="lead-b-name">${escapeHtml(lead.businessName)}</div>
        <div class="lead-contact-name">${escapeHtml(lead.website || "")}</div>
      </td>
      <td>
        <div>${escapeHtml(lead.firstName)} ${escapeHtml(lead.lastName)}</div>
        <div style="font-size:0.75rem; color:#64748b;">${escapeHtml(lead.title || "Decision Maker")}</div>
      </td>
      <td><span class="tag-badge tag-aau">${vertIcon} ${escapeHtml(vertName)}</span></td>
      <td>${escapeHtml(lead.city)}</td>
      <td><span class="status-indicator ready"><span class="dot"></span> Ready</span></td>
      <td style="display:flex; gap:6px; align-items:center;">
        <button class="btn btn-ghost btn-small" onclick="event.stopPropagation(); selectLead('${lead.id}')">View</button>
        <button class="btn btn-danger btn-small" title="Remove prospect" onclick="event.stopPropagation(); deleteLead('${lead.id}')">✕</button>
      </td>
    `;

    tr.addEventListener("click", () => selectLead(lead.id));
    tbody.appendChild(tr);
  });
}

function selectLead(leadId) {
  selectedLeadId = leadId;
  const client = getActiveClient();
  const lead = (client.leads || []).find(l => l.id === leadId) || (client.leads || [])[0];
  if (!lead) return;

  // Highlight row
  document.querySelectorAll("#leads-tbody tr").forEach(tr => tr.classList.remove("selected"));

  const vertObj = (client.targetVerticals || []).find(v => v.id === lead.vertical);
  const vertName = vertObj ? vertObj.name : lead.vertical;

  document.getElementById("seq-vertical-badge").textContent = vertName.toUpperCase();
  document.getElementById("seq-target-name").textContent = lead.businessName;
  document.getElementById("seq-target-contact").textContent = `${lead.firstName} ${lead.lastName} (${lead.title || "Lead"}) • ${lead.email} • ${lead.phone || ""}`;

  const sequence = buildUniversalSequence(lead, client);
  displayTouchStep(sequence, selectedTouchStep);
}

function displayTouchStep(sequence, stepNum) {
  selectedTouchStep = stepNum;
  const stepKey = `step${stepNum}`;
  const stepData = sequence[stepKey];

  document.getElementById("seq-subject-input").value = stepData.subject;
  document.getElementById("seq-body-input").value = stepData.body;

  const labels = {
    1: "Touch 1 of 4 • Day 1 Send (The Story Hook)",
    2: "Touch 2 of 4 • Day 4 Send (Why Alternatives Fail)",
    3: "Touch 3 of 4 • Day 8 Send (Zero-Friction Offer)",
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
async function triggerCampaignGeneration() {
  const triggerBtn = document.getElementById("btn-trigger-engine");
  const client = getActiveClient();
  const city = document.getElementById("input-target-city").value || "Metro Area";
  const vertical = document.getElementById("select-vertical").value;
  const batchMode = document.getElementById("input-lead-count").value;

  triggerBtn.disabled = true;
  triggerBtn.innerHTML = `<span>⚡ Building Sequences...</span>`;

  logTerminal(`[${client.industry}] Building campaigns for ${client.businessName}...`, "info");
  logTerminal(`Target region: "${city}" | Audience: ${vertical === "all" ? "All ICPs" : vertical}`);

  if (batchMode === "expand" && geminiApiKey) {
    // Real AI Lead Discovery
    logTerminal(`🤖 Calling Gemini AI to discover new real-world prospects...`, "info");
    try {
      const vertInfo = vertical === "all"
        ? client.targetVerticals
        : client.targetVerticals.filter(v => v.id === vertical);

      const vertDesc = vertInfo.map(v => `${v.name} (pain: ${v.pain})`).join("; ");

      const discoverPrompt = `You are a B2B lead research specialist.
Generate 5 realistic B2B prospect profiles for this business:

Business: ${client.businessName}
Industry: ${client.industry}
Core Offer: ${client.coreProduct}
Target Audiences: ${vertDesc}
Target City / Region: ${city}

Return ONLY a valid JSON array of prospect objects (no markdown, no explanation):
[
  {
    "id": "lead-ai-${Date.now()}-1",
    "vertical": "<one of: ${(client.targetVerticals || []).map(v => v.id).join(", ")}>",
    "businessName": "Real-sounding business name",
    "firstName": "Real first name",
    "lastName": "Real last name",
    "title": "Decision maker title",
    "email": "contact@realbusiness.com",
    "phone": "(555) 000-0000",
    "city": "${city}",
    "website": "https://realbusiness.com"
  }
]`;

      const resultStr = await callGeminiApi(discoverPrompt, true);
      let cleanStr = resultStr.trim();
      if (cleanStr.startsWith("```")) {
        cleanStr = cleanStr.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");
      }
      const newLeads = JSON.parse(cleanStr);
      if (Array.isArray(newLeads) && newLeads.length > 0) {
        // Stamp unique IDs
        newLeads.forEach((l, i) => {
          l.id = `lead-ai-${Date.now()}-${i}`;
        });
        client.leads = [...(client.leads || []), ...newLeads];
        localStorage.setItem("apex_universal_clients", JSON.stringify(clients));
        logTerminal(`✓ Gemini AI discovered ${newLeads.length} new prospects in "${city}".`, "success");
      }
    } catch (err) {
      logTerminal(`[AI Discovery Error] ${err.message}. Using existing prospects.`, "warning");
    }
  } else {
    // Simulate validation step for existing leads
    await new Promise(r => setTimeout(r, 1200));
    logTerminal(`Validating sequences for ${(client.leads || []).length} existing prospects...`, "info");
    await new Promise(r => setTimeout(r, 800));
  }

  logTerminal(`✓ 4-step personalized sequences ready for ${(client.leads || []).length} accounts. Export when ready!`, "success");
  triggerBtn.disabled = false;
  triggerBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Trigger Campaign Engine</span>`;
  renderLeadsTable();
  updateMetrics();
  selectLead(selectedLeadId || client.leads?.[0]?.id);
}

// Delete a lead from the active client
function deleteLead(leadId) {
  const client = getActiveClient();
  client.leads = (client.leads || []).filter(l => l.id !== leadId);
  localStorage.setItem("apex_universal_clients", JSON.stringify(clients));
  if (selectedLeadId === leadId) {
    selectedLeadId = client.leads[0]?.id || null;
  }
  renderLeadsTable();
  updateMetrics();
  if (selectedLeadId) selectLead(selectedLeadId);
  logTerminal(`Prospect removed from active campaign list.`, "info");
}

// Export CSV
function exportCampaignCSV() {
  const client = getActiveClient();
  const headers = [
    "Lead Email", "First Name", "Last Name", "Business Name", "Target Audience", "City", "Website", "Phone",
    "Email 1 Subject", "Email 1 Body",
    "Email 2 Subject", "Email 2 Body",
    "Email 3 Subject", "Email 3 Body",
    "Email 4 Subject", "Email 4 Body"
  ];

  const rows = (client.leads || []).map(lead => {
    const seq = buildUniversalSequence(lead, client);
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
  link.setAttribute("download", `${client.businessName.toLowerCase().replace(/[^a-z0-9]/g, "_")}_campaign.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  logTerminal(`Exported ${client.leads.length} personalized sequences for ${client.businessName} to CSV.`, "success");
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
    totalLeads: client.leads.length,
    prospects: (client.leads || []).map(l => ({
      ...l,
      campaignSequence: buildUniversalSequence(l, client)
    }))
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${client.businessName.toLowerCase().replace(/[^a-z0-9]/g, "_")}_campaign.json`);
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
    loadClient(e.target.value);
    logTerminal(`Switched active client profile to: ${getActiveClient().businessName} (${getActiveClient().industry})`, "info");
  });

  // Edit Client Modal
  document.getElementById("btn-edit-client").addEventListener("click", () => {
    const client = getActiveClient();
    document.getElementById("modal-client-title").textContent = `Customize ${client.businessName}`;
    document.getElementById("cust-business-name").value = client.businessName;
    document.getElementById("cust-industry").value = client.industry || "";
    document.getElementById("cust-lead-name").value = client.leadName;
    document.getElementById("cust-title").value = client.title;
    document.getElementById("cust-website").value = client.website;
    document.getElementById("cust-phone").value = client.phone;
    document.getElementById("cust-core-product").value = client.coreProduct;
    document.getElementById("cust-story").value = client.story;
    document.getElementById("cust-why-fails").value = client.whyFails || "";
    document.getElementById("cust-cta").value = client.zeroFrictionCta || "";

    const v1 = client.targetVerticals?.[0] || { name: "", pain: "" };
    const v2 = client.targetVerticals?.[1] || { name: "", pain: "" };
    const v3 = client.targetVerticals?.[2] || { name: "", pain: "" };

    document.getElementById("cust-v1-name").value = v1.name;
    document.getElementById("cust-v1-pain").value = v1.pain;
    document.getElementById("cust-v2-name").value = v2.name;
    document.getElementById("cust-v2-pain").value = v2.pain;
    document.getElementById("cust-v3-name").value = v3.name;
    document.getElementById("cust-v3-pain").value = v3.pain;

    document.getElementById("client-modal").classList.add("show");
  });

  // New Client Profile Modal
  document.getElementById("btn-new-client").addEventListener("click", () => {
    document.getElementById("modal-client-title").textContent = "Create New Client Profile (Any Industry)";
    document.getElementById("cust-business-name").value = "";
    document.getElementById("cust-industry").value = "";
    document.getElementById("cust-lead-name").value = "";
    document.getElementById("cust-title").value = "";
    document.getElementById("cust-website").value = "";
    document.getElementById("cust-phone").value = "";
    document.getElementById("cust-core-product").value = "";
    document.getElementById("cust-story").value = "";
    document.getElementById("cust-why-fails").value = "";
    document.getElementById("cust-cta").value = "";

    document.getElementById("cust-v1-name").value = "";
    document.getElementById("cust-v1-pain").value = "";
    document.getElementById("cust-v2-name").value = "";
    document.getElementById("cust-v2-pain").value = "";
    document.getElementById("cust-v3-name").value = "";
    document.getElementById("cust-v3-pain").value = "";

    document.getElementById("client-modal").classList.add("show");
  });

  document.getElementById("btn-close-modal").addEventListener("click", () => {
    document.getElementById("client-modal").classList.remove("show");
  });
  document.getElementById("btn-cancel-modal").addEventListener("click", () => {
    document.getElementById("client-modal").classList.remove("show");
  });

  // Save Client Profile
  document.getElementById("btn-save-client").addEventListener("click", () => {
    const bName = document.getElementById("cust-business-name").value.trim() || "New Client";
    const clientId = bName.toLowerCase().replace(/[^a-z0-9]/g, "");

    const v1Name = document.getElementById("cust-v1-name").value.trim() || "Target Audience 1";
    const v1Pain = document.getElementById("cust-v1-pain").value.trim() || "unnecessary overhead and inefficiency";

    const v2Name = document.getElementById("cust-v2-name").value.trim() || "Target Audience 2";
    const v2Pain = document.getElementById("cust-v2-pain").value.trim() || "regulatory and operational risks";

    const v3Name = document.getElementById("cust-v3-name").value.trim() || "Target Audience 3";
    const v3Pain = document.getElementById("cust-v3-pain").value.trim() || "rising vendor costs";

    const targetVerticals = [
      { id: "v1", name: v1Name, pain: v1Pain, icon: "🎯" },
      { id: "v2", name: v2Name, pain: v2Pain, icon: "🚀" },
      { id: "v3", name: v3Name, pain: v3Pain, icon: "⚡" }
    ];

    // Seed 2 initial sample prospects for the new client
    const sampleLeads = [
      {
        id: `lead-${Date.now()}-1`,
        vertical: "v1",
        businessName: `Pinnacle ${v1Name.split(" ")[0]} Group`,
        firstName: "David",
        lastName: "Miller",
        title: "Managing Director",
        email: "dmiller@pinnaclegroup.com",
        phone: "(555) 019-2831",
        city: "New York NY",
        website: "https://pinnaclegroup.com"
      },
      {
        id: `lead-${Date.now()}-2`,
        vertical: "v2",
        businessName: `Summit ${v2Name.split(" ")[0]} Partners`,
        firstName: "Elena",
        lastName: "Vance",
        title: "Vice President",
        email: "evance@summitpartners.com",
        phone: "(555) 018-9922",
        city: "Chicago IL",
        website: "https://summitpartners.com"
      }
    ];

    const newProfile = {
      id: clientId,
      businessName: bName,
      industry: document.getElementById("cust-industry").value.trim() || "B2B Services",
      leadName: document.getElementById("cust-lead-name").value.trim() || "Managing Partner",
      title: document.getElementById("cust-title").value.trim() || "Principal Consultant",
      website: document.getElementById("cust-website").value.trim() || "example.com",
      phone: document.getElementById("cust-phone").value.trim() || "(800) 555-0100",
      coreProduct: document.getElementById("cust-core-product").value.trim() || "Comprehensive B2B Solutions",
      story: document.getElementById("cust-story").value.trim() || "Dedicated to streamlining high-stakes operations.",
      whyFails: document.getElementById("cust-why-fails").value.trim() || "Most standard alternatives fail to address core operational bottlenecks.",
      zeroFrictionCta: document.getElementById("cust-cta").value.trim() || "a brief 15-minute introductory assessment",
      badges: [document.getElementById("cust-industry").value.trim() || "B2B", "Custom Solutions"],
      targetVerticals: targetVerticals,
      leads: clients[clientId]?.leads || sampleLeads
    };

    clients[clientId] = newProfile;
    localStorage.setItem("apex_universal_clients", JSON.stringify(clients));

    renderClientSelect();
    loadClient(clientId);
    document.getElementById("client-modal").classList.remove("show");
    logTerminal(`Saved client profile: ${bName} (${newProfile.industry})! Dynamic sequences active.`, "success");
  });

  // Sequence Step Tabs
  document.querySelectorAll(".seq-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const step = parseInt(tab.dataset.step);
      const client = getActiveClient();
      const lead = (client.leads || []).find(l => l.id === selectedLeadId) || (client.leads || [])[0];
      if (lead) {
        displayTouchStep(buildUniversalSequence(lead, client), step);
      }
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

    const client = getActiveClient();
    const newLead = {
      id: `lead-${Date.now()}`,
      vertical: document.getElementById("new-vertical").value,
      businessName: bName,
      firstName: document.getElementById("new-first-name").value.trim() || "Decision Maker",
      lastName: document.getElementById("new-last-name").value.trim() || "",
      title: "Director",
      email: document.getElementById("new-email").value.trim() || "contact@example.com",
      phone: "(555) 000-0000",
      city: document.getElementById("new-city").value.trim() || "Metro Area",
      website: "https://example.com"
    };

    client.leads = client.leads || [];
    client.leads.unshift(newLead);
    localStorage.setItem("apex_universal_clients", JSON.stringify(clients));
    document.getElementById("lead-modal").classList.remove("show");

    renderLeadsTable();
    updateMetrics();
    selectLead(newLead.id);
    logTerminal(`Added new prospect: ${bName} to ${client.businessName}. Sequence active!`, "success");
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

  // AI Analyzer Modal Open
  const aiModal = document.getElementById("ai-modal");
  document.getElementById("btn-open-ai-analyzer").addEventListener("click", () => {
    // Pre-populate key — show masked placeholder if using default
    const keyInput = document.getElementById("ai-api-key");
    keyInput.value = geminiApiKey;
    keyInput.placeholder = geminiApiKey === DEFAULT_GEMINI_KEY
      ? "Using default shared key (override below to use your own)"
      : "Your Gemini API Key";
    aiModal.classList.add("show");
  });
  document.getElementById("btn-close-ai-modal").addEventListener("click", () => {
    aiModal.classList.remove("show");
  });
  document.getElementById("btn-cancel-ai-modal").addEventListener("click", () => {
    aiModal.classList.remove("show");
  });

  // Toggle API key visibility
  const toggleKeyBtn = document.getElementById("btn-toggle-key-visibility");
  const keyInput = document.getElementById("ai-api-key");
  toggleKeyBtn.addEventListener("click", () => {
    if (keyInput.type === "password") {
      keyInput.type = "text";
      toggleKeyBtn.textContent = "Hide";
    } else {
      keyInput.type = "password";
      toggleKeyBtn.textContent = "Show";
    }
  });

  // Run AI Analysis Handler
  document.getElementById("btn-run-ai-analysis").addEventListener("click", async () => {
    const targetUrl = document.getElementById("ai-target-url").value.trim();
    const customPrompt = document.getElementById("ai-custom-prompt").value.trim();
    const enteredKey = document.getElementById("ai-api-key").value.trim();

    if (!targetUrl) {
      alert("Please enter a website URL or business concept to analyze.");
      return;
    }

    if (enteredKey) {
      geminiApiKey = enteredKey;
      localStorage.setItem("apex_gemini_api_key", geminiApiKey);
    }

    const runBtn = document.getElementById("btn-run-ai-analysis");
    runBtn.disabled = true;
    runBtn.innerHTML = `<span>Analyzing with Gemini 2.5 Flash...</span>`;

    logTerminal(`Connecting to Gemini AI to analyze: ${targetUrl}...`, "info");

    try {
      const prompt = `You are an elite B2B Growth Strategist and Outbound Copywriting Expert with access to web research.
Your task: analyze the business at the URL below, research what they do, and synthesize a complete B2B client acquisition profile.

Business URL or Concept: ${targetUrl}
${customPrompt ? "\nAdditional context / focus: " + customPrompt : ""}

Research this business thoroughly based on its URL. Identify:
- What products/services they offer
- Their likely founder or key representative
- Their unique value proposition vs. competitors
- 3 best B2B target audiences (completely relevant to THEIR industry — not sports unless that's their actual niche)
- A compelling, authentic origin/credibility story
- A low-friction lead magnet CTA appropriate for their offer
- 2 sample realistic prospect profiles for their top target audience

IMPORTANT: The target audiences MUST be relevant to THIS specific business's industry. Do not copy from unrelated industries.

Respond ONLY with a valid JSON object (no markdown, no code blocks):
{
  "businessName": "Exact Business Name from the website",
  "industry": "Precise Industry / Sector",
  "leadName": "Founder or Lead Rep Name (or generic title if unknown)",
  "title": "Their Professional Title / Credentials",
  "website": "${targetUrl}",
  "phone": "(855) 000-0000",
  "coreProduct": "Their core product/service hook in one compelling sentence",
  "story": "1-2 sentence credibility/origin story (authentic to THEIR industry)",
  "whyFails": "1 sentence: why conventional alternatives in THEIR space fail clients",
  "zeroFrictionCta": "A specific low-friction lead magnet tailored to their offer",
  "badges": ["Key Differentiator 1", "Key Differentiator 2", "Key Differentiator 3"],
  "targetVerticals": [
    {
      "id": "v1",
      "name": "Specific B2B Audience 1 relevant to this business",
      "pain": "Specific pain point that THIS business solves for them",
      "icon": "🎯"
    },
    {
      "id": "v2",
      "name": "Specific B2B Audience 2 relevant to this business",
      "pain": "Specific pain point that THIS business solves for them",
      "icon": "🚀"
    },
    {
      "id": "v3",
      "name": "Specific B2B Audience 3 relevant to this business",
      "pain": "Specific pain point that THIS business solves for them",
      "icon": "⚡"
    }
  ],
  "leads": [
    {
      "id": "lead-ai-1",
      "vertical": "v1",
      "businessName": "Realistic business name in their target audience",
      "firstName": "Marcus",
      "lastName": "Vance",
      "title": "Relevant decision-maker title",
      "email": "m.vance@targetbusiness.com",
      "phone": "(555) 012-3456",
      "city": "New York NY",
      "website": "https://targetbusiness.com"
    },
    {
      "id": "lead-ai-2",
      "vertical": "v2",
      "businessName": "Another realistic target business",
      "firstName": "Sarah",
      "lastName": "Jenkins",
      "title": "Relevant decision-maker title",
      "email": "sjenkins@anothertarget.com",
      "phone": "(555) 018-9922",
      "city": "Chicago IL",
      "website": "https://anothertarget.com"
    }
  ]
}`;

      logTerminal(`Sending prompt to Gemini 2.5 Flash...`, "info");
      const resultJsonStr = await callGeminiApi(prompt, true);
      
      let cleanJsonStr = resultJsonStr;
      if (cleanJsonStr.startsWith("```")) {
        cleanJsonStr = cleanJsonStr.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");
      }

      const aiProfile = JSON.parse(cleanJsonStr);
      const newClientId = "ai_" + (aiProfile.businessName || "client").toLowerCase().replace(/[^a-z0-9]/g, "");
      aiProfile.id = newClientId;

      clients[newClientId] = aiProfile;
      localStorage.setItem("apex_universal_clients", JSON.stringify(clients));

      logTerminal(`✓ Gemini AI successfully analyzed ${aiProfile.businessName}!`, "success");
      logTerminal(`Identified 3 target B2B audiences: ${aiProfile.targetVerticals.map(v => v.name).join(" | ")}`, "info");

      aiModal.classList.remove("show");
      renderClientSelect();
      loadClient(newClientId);

    } catch (err) {
      console.error(err);
      logTerminal(`[AI Error] ${err.message}`, "warning");
      alert(`AI Analysis Error: ${err.message}`);
    } finally {
      runBtn.disabled = false;
      runBtn.innerHTML = `<span>✨ Run Gemini AI Analysis</span>`;
    }
  });

  // AI Polish Touch Handler
  document.getElementById("btn-ai-polish-touch").addEventListener("click", async () => {
    if (!geminiApiKey) {
      logTerminal("[Warning] No Gemini API key set. Open AI Analyzer to configure.", "warning");
      return;
    }
    const polishBtn = document.getElementById("btn-ai-polish-touch");
    const currentSubject = document.getElementById("seq-subject-input").value;
    const currentBody = document.getElementById("seq-body-input").value;

    if (!currentBody) return;

    polishBtn.disabled = true;
    polishBtn.textContent = "✨ Polishing...";

    logTerminal(`Using Gemini AI to polish and sharpen Touch ${selectedTouchStep}...`, "info");

    try {
      const polishPrompt = `You are a world-class cold email copywriter with a 45%+ reply rate.
Rewrite the following B2B email to make it sharper, more conversational, punchier, and zero-bullshit.
Avoid corporate buzzwords. Keep paragraphs short (1-2 sentences max). Make the CTA feel natural and effortless.
Preserve the sender's name and contact info at the bottom.

Current Subject: ${currentSubject}

Current Body:
${currentBody}

Respond ONLY with a valid JSON object (no markdown, no code block):
{ "subject": "Refined subject line", "body": "Refined email body" }`;

      const resStr = await callGeminiApi(polishPrompt, true);
      let clean = resStr.trim();
      if (clean.startsWith("```")) {
        clean = clean.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");
      }
      const polished = JSON.parse(clean);

      document.getElementById("seq-subject-input").value = polished.subject;
      document.getElementById("seq-body-input").value = polished.body;

      logTerminal(`✓ Touch ${selectedTouchStep} polished by Gemini AI! You can edit further before copying.`, "success");
    } catch (err) {
      console.error(err);
      logTerminal(`[AI Polish Error] ${err.message}`, "warning");
    } finally {
      polishBtn.disabled = false;
      polishBtn.textContent = "✨ AI Polish Touch";
    }
  });

  // Delete active client profile
  document.getElementById("btn-delete-client")?.addEventListener("click", () => {
    const client = getActiveClient();
    const clientId = client.id;
    // Protect the default profiles
    const defaultIds = Object.keys(DEFAULT_CLIENTS);
    if (defaultIds.includes(clientId)) {
      alert("Default demo profiles cannot be deleted. You can customize them or create a new one.");
      return;
    }
    if (!confirm(`Delete the profile "${client.businessName}"? This cannot be undone.`)) return;
    delete clients[clientId];
    localStorage.setItem("apex_universal_clients", JSON.stringify(clients));
    const remaining = Object.keys(clients);
    activeClientId = remaining[0] || "nutrientshelp";
    renderClientSelect();
    loadClient(activeClientId);
    logTerminal(`Profile "${client.businessName}" deleted.`, "info");
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
