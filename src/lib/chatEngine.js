// =============================================================================
// CivicMind — Chat Simulation Engine
// Local keyword-based chat processor returning structured civic responses
// =============================================================================

import { getAgentForQuery } from './agents';

// ---------------------------------------------------------------------------
// 1. Suggested Prompts
// ---------------------------------------------------------------------------
export const suggestedPrompts = [
  {
    text: 'Why is bus route 12 delayed today?',
    icon: 'Bus',
    domain: 'mobility',
  },
  {
    text: 'Which neighborhoods are at highest flood risk?',
    icon: 'CloudRain',
    domain: 'environment',
  },
  {
    text: 'Show air quality trends this month',
    icon: 'Wind',
    domain: 'environment',
  },
  {
    text: 'What is the current crime rate in Downtown?',
    icon: 'Shield',
    domain: 'safety',
  },
  {
    text: 'How many service tickets are still unresolved?',
    icon: 'Ticket',
    domain: 'civic',
  },
  {
    text: 'Are there any disease outbreaks in the city?',
    icon: 'Heart',
    domain: 'health',
  },
  {
    text: 'Predict energy demand for this weekend',
    icon: 'Zap',
    domain: 'energy',
  },
  {
    text: 'Summarize today\'s critical alerts',
    icon: 'AlertTriangle',
    domain: 'safety',
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Returns a random integer between min and max (inclusive). */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Simulates network / inference latency (500 – 1500 ms). */
function simulateDelay() {
  return new Promise((resolve) => setTimeout(resolve, randInt(500, 1500)));
}

/** Generates a recent ISO timestamp (within the last few hours). */
function recentTimestamp(hoursAgo = 2) {
  const now = new Date('2026-06-22T12:00:00Z');
  now.setHours(now.getHours() - Math.random() * hoursAgo);
  return now.toISOString();
}

// ---------------------------------------------------------------------------
// Response templates keyed by domain
// ---------------------------------------------------------------------------
const responseTemplates = {
  mobility: {
    text:
      'Based on real-time transit telemetry, **Bus Route 12** is currently running **18 minutes behind schedule** due to road construction on Elm Avenue between 3rd and 7th Streets. The MobilityAgent has already activated an alternate routing plan, diverting passengers to Route 15 which covers 80 % of the same stops.\n\n' +
      '**Key metrics right now:**\n' +
      '- Average bus speed on Elm Ave corridor: **8.2 mph** (normal: 18 mph)\n' +
      '- Affected passengers (est.): **1,240 daily riders**\n' +
      '- Alternate Route 15 capacity utilisation: **67 %** — sufficient headroom\n\n' +
      'The construction is scheduled to finish by June 28. Until then, I recommend increasing Route 15 frequency during peak hours.',
    agent: 'MobilityAgent',
    evidence: [
      { source: 'AVL Telemetry Feed', data: 'Route 12 — avg delay 18 min across 14 buses', timestamp: '2026-06-22T14:05:00Z' },
      { source: 'Public Works Permit DB', data: 'Elm Ave construction permit #PW-2026-4417, ends June 28', timestamp: '2026-06-18T09:00:00Z' },
      { source: 'Ridership Model', data: 'Route 12 daily ridership: 1,240; Route 15 spare capacity: 33 %', timestamp: '2026-06-22T06:00:00Z' },
    ],
    confidence: 0.92,
    confidenceLabel: 'High',
    actions: [
      { label: 'Increase Route 15 Frequency', type: 'primary', description: 'Add two additional buses to Route 15 during 7-9 AM and 4-7 PM to absorb displaced riders.' },
      { label: 'Notify Affected Riders', type: 'secondary', description: 'Push mobile alerts to Route 12 subscribers with detour instructions and estimated delays.' },
      { label: 'Review Construction Timeline', type: 'secondary', description: 'Coordinate with Public Works to explore accelerating the Elm Ave project.' },
    ],
    monitoringTips: [
      'Watch Route 15 load factor — if it exceeds 85 % add a third relief bus.',
      'Monitor Elm Ave construction progress daily for early completion opportunities.',
      'Track Route 12 rider complaints in the 311 system for sentiment shifts.',
    ],
  },

  safety: {
    text:
      'The SafetyAgent has analyzed current incident data across all precincts. Here is the situation summary:\n\n' +
      '**Active Critical Incidents: 3**\n' +
      '1. **Structure Fire** — 812 Pine St, Maple Heights. Two-alarm, 3 engines + 2 ladders on scene. Evacuations complete, no injuries reported.\n' +
      '2. **Multi-Vehicle Accident** — I-94 WB, mile marker 17. Five vehicles involved, two lanes blocked. EMS treating minor injuries.\n' +
      '3. **Water Main Break** — 400 Oak St, Downtown. Flooding in two lanes, detours active.\n\n' +
      '**Citywide Safety Score: 78 / 100** (↑ 2 points from last week)\n' +
      '- Total incidents today: **23** (below 30-day avg of 28)\n' +
      '- Median response time: **4.2 min** (target: < 5 min ✅)\n' +
      '- Units available: **74 %** of fleet',
    agent: 'SafetyAgent',
    evidence: [
      { source: 'CAD System', data: '23 incidents logged today; 3 critical, 8 warning, 12 routine', timestamp: '2026-06-22T14:30:00Z' },
      { source: 'Response Analytics', data: 'Median response time 4.2 min (trailing 7-day)', timestamp: '2026-06-22T14:00:00Z' },
      { source: 'Fleet Management', data: '74 % of emergency vehicles available; 6 units committed to active incidents', timestamp: '2026-06-22T14:25:00Z' },
    ],
    confidence: 0.95,
    confidenceLabel: 'Very High',
    actions: [
      { label: 'Deploy Additional Units to I-94', type: 'primary', description: 'Assign traffic control unit to manage surface-street spillover from the I-94 closure.' },
      { label: 'Issue Public Safety Advisory', type: 'warning', description: 'Broadcast advisory for Maple Heights residents near Pine St fire with evacuation guidance.' },
      { label: 'Review Shift Coverage', type: 'secondary', description: 'Ensure evening-shift staffing accounts for ongoing incidents rolling past shift change.' },
    ],
    monitoringTips: [
      'Track Pine St fire containment progress — escalation to 3-alarm would require mutual aid.',
      'Monitor I-94 reopening status; surface street congestion may spike during evening rush.',
      'Watch 911 call volume for heat-related emergencies given the active heat advisory.',
    ],
  },

  health: {
    text:
      'The HealthAgent is monitoring public health conditions across the city. Here is the current overview:\n\n' +
      '**Heat Advisory Active** 🌡️\n' +
      'The National Weather Service forecasts a high of **101 °F** today. Six cooling centers have been activated and are currently serving **342 residents**.\n\n' +
      '**Hospital & ER Status:**\n' +
      '| Facility | ER Wait | Beds Available | Status |\n' +
      '|---|---|---|---|\n' +
      '| Metro General | 22 min | 14 | Normal |\n' +
      '| Riverside Medical | 35 min | 8 | Busy |\n' +
      '| Cedar Park Hospital | 18 min | 21 | Normal |\n' +
      '| Lakewood Community | 28 min | 11 | Normal |\n\n' +
      '**Disease Surveillance:** No active outbreaks. Seasonal flu cases at **58 this month**, well below the 5-year June average of 87.\n' +
      '**Vaccination Coverage:** 79 % of residents up-to-date (↑ 1 % from May).',
    agent: 'HealthAgent',
    evidence: [
      { source: 'NWS Heat Advisory', data: 'High of 101 °F forecast; heat index up to 108 °F', timestamp: '2026-06-22T06:00:00Z' },
      { source: 'Hospital Capacity Dashboard', data: 'Aggregate ER wait 25.8 min avg; 54 beds available across 4 facilities', timestamp: '2026-06-22T14:00:00Z' },
      { source: 'Disease Surveillance System', data: '58 flu cases in June 2026; 0 active outbreak alerts', timestamp: '2026-06-22T08:00:00Z' },
    ],
    confidence: 0.89,
    confidenceLabel: 'High',
    actions: [
      { label: 'Extend Cooling Center Hours', type: 'primary', description: 'Keep all 6 cooling centers open until 10 PM given continued extreme heat.' },
      { label: 'Alert Vulnerable Populations', type: 'warning', description: 'Send targeted SMS alerts to registered elderly and chronically ill residents.' },
      { label: 'Pre-Position EMS Resources', type: 'secondary', description: 'Stage additional ambulances near outdoor event venues and cooling centers.' },
    ],
    monitoringTips: [
      'Watch heat-related 911 calls — if they exceed 15/hour, recommend activating mutual-aid EMS.',
      'Monitor cooling center occupancy; if any site exceeds 80 % capacity, open overflow locations.',
      'Track ER wait times at Riverside Medical — it may need patient diversion if wait exceeds 45 min.',
    ],
  },

  environment: {
    text:
      'The EnvironmentAgent has compiled the latest environmental intelligence:\n\n' +
      '**Air Quality — Overall AQI: 42 (Good)** ✅\n' +
      'However, the Industrial District station recorded ozone at **0.082 ppm**, slightly above the 8-hour standard of 0.070 ppm. A localized advisory has been issued for sensitive groups in that area.\n\n' +
      '**Water Quality — Score: 96 / 100** ✅\n' +
      'All four treatment plants are within EPA parameters. Note: a brownish-tint water report in Riverside (300 block, River Rd) is under investigation — likely sediment disturbance from the nearby water-main break.\n\n' +
      '**Flood Risk Assessment:**\n' +
      '- **High risk:** Riverside (proximity to river, aging stormwater infrastructure)\n' +
      '- **Moderate risk:** Downtown (impervious surface ratio 78 %)\n' +
      '- **Low risk:** Cedar Park, Lakewood, Westfield, Maple Heights\n\n' +
      'No significant rainfall is forecast for the next 7 days, so flood risk remains baseline.',
    agent: 'EnvironmentAgent',
    evidence: [
      { source: 'EPA AirNow API', data: 'City-wide AQI 42; Industrial District ozone 0.082 ppm', timestamp: '2026-06-22T13:00:00Z' },
      { source: 'Water Treatment SCADA', data: 'All 4 plants nominal; composite score 96/100', timestamp: '2026-06-22T12:00:00Z' },
      { source: 'Flood Risk Model v3.2', data: 'Riverside 7-day flood probability 12 %; others < 3 %', timestamp: '2026-06-22T06:00:00Z' },
    ],
    confidence: 0.88,
    confidenceLabel: 'High',
    actions: [
      { label: 'Investigate Riverside Water Tint', type: 'primary', description: 'Dispatch water-quality sampling crew to 300 block River Rd to test for contaminants.' },
      { label: 'Notify Industrial District Residents', type: 'warning', description: 'Expand ozone advisory radius to include adjacent residential zones downwind.' },
      { label: 'Schedule Stormwater Audit', type: 'secondary', description: 'Commission engineering review of Riverside stormwater system before fall rains.' },
    ],
    monitoringTips: [
      'Track Industrial District ozone hourly — if readings stay above 0.085 ppm for 4 hours, escalate to full advisory.',
      'Monitor water-tint complaints in Riverside; if reports spread beyond 300 block, issue a precautionary boil-water notice.',
      'Review 10-day rainfall forecast daily to update flood risk assessments.',
    ],
  },

  civic: {
    text:
      'The CivicEngagementAgent has prepared your service request summary:\n\n' +
      '**Open Service Tickets: 328** (↓ 15 % from last month)\n' +
      '- Critical: **12** (avg age 1.3 days)\n' +
      '- High: **47** (avg age 2.8 days)\n' +
      '- Medium: **156** (avg age 5.1 days)\n' +
      '- Low: **113** (avg age 8.4 days)\n\n' +
      '**Top Categories:**\n' +
      '1. Infrastructure (potholes, sidewalks) — 28 %\n' +
      '2. Utilities (streetlights, water) — 22 %\n' +
      '3. Sanitation (trash, recycling) — 19 %\n' +
      '4. Public Safety (noise, vandalism) — 17 %\n' +
      '5. Parks & Recreation — 14 %\n\n' +
      '**Citizen Satisfaction Score: 4.2 / 5** (↑ 0.3 from last quarter)\n' +
      'Top praise: faster response times. Top complaint: pothole repair delays.',
    agent: 'CivicEngagementAgent',
    evidence: [
      { source: '311 System Dashboard', data: '328 open tickets; 12 critical, 47 high, 156 medium, 113 low', timestamp: '2026-06-22T14:00:00Z' },
      { source: 'Quarterly Citizen Survey', data: 'Satisfaction score 4.2/5, response rate 23 %, n = 2,847', timestamp: '2026-06-15T00:00:00Z' },
      { source: 'Ticket Analytics', data: 'Avg resolution time 4.6 days (target: 5 days) ✅', timestamp: '2026-06-22T08:00:00Z' },
    ],
    confidence: 0.91,
    confidenceLabel: 'High',
    actions: [
      { label: 'Prioritize Critical Tickets', type: 'primary', description: 'Escalate the 12 critical tickets to department heads for same-day action plans.' },
      { label: 'Deploy Pothole Blitz', type: 'secondary', description: 'Schedule a weekend pothole-repair blitz targeting the 15 highest-upvoted reports.' },
      { label: 'Launch Feedback Campaign', type: 'secondary', description: 'Send follow-up surveys to recently resolved tickets to capture updated satisfaction data.' },
    ],
    monitoringTips: [
      'Watch critical ticket aging — any ticket over 48 hours should trigger an automatic escalation.',
      'Monitor social media sentiment for emerging complaints not yet in the 311 system.',
      'Track pothole report clustering to identify streets needing full resurfacing rather than patching.',
    ],
  },

  default: {
    text:
      'Welcome to **CivicMind** — your AI Decision Intelligence hub for smart community management.\n\n' +
      'Here is a quick snapshot of the city right now:\n' +
      '- **142** active incidents (↓ 12 % from last week)\n' +
      '- **87.3 %** transit on-time rate\n' +
      '- **AQI 42** — Good air quality\n' +
      '- **4.2 min** median emergency response time\n' +
      '- **328** open service tickets\n\n' +
      'I can help you explore any civic domain — mobility, safety, health, environment, or citizen engagement. Try asking a specific question or choose one of the suggested prompts!',
    agent: 'CivicMind',
    evidence: [
      { source: 'KPI Dashboard', data: 'Real-time aggregation across all 5 agent domains', timestamp: '2026-06-22T14:30:00Z' },
      { source: 'Daily Briefing Engine', data: 'Automated summary generated from 847 data points', timestamp: '2026-06-22T06:00:00Z' },
    ],
    confidence: 0.85,
    confidenceLabel: 'Moderate',
    actions: [
      { label: 'View Full Dashboard', type: 'primary', description: 'Open the comprehensive KPI dashboard for a citywide overview.' },
      { label: 'Explore Alerts', type: 'secondary', description: 'Review the 10 most recent alerts across all domains.' },
    ],
    monitoringTips: [
      'Check the alert feed periodically for newly escalated issues.',
      'Review predictive forecasts to prepare for upcoming demand spikes.',
    ],
  },
};

// ---------------------------------------------------------------------------
// Domain detection keywords (maps to responseTemplates keys)
// ---------------------------------------------------------------------------
const domainPatterns = [
  { domain: 'mobility',    pattern: /\b(bus|transit|route|traffic|congestion|parking|commute|train|delay|road|highway)\b/i },
  { domain: 'safety',      pattern: /\b(crime|incident|safety|emergency|fire|police|accident|theft|patrol|dispatch)\b/i },
  { domain: 'health',      pattern: /\b(health|clinic|hospital|outbreak|flu|disease|vaccine|vaccination|medical|heat|cooling)\b/i },
  { domain: 'environment', pattern: /\b(air|water|pollution|waste|flood|environment|ozone|recycling|carbon|emission|quality|river)\b/i },
  { domain: 'civic',       pattern: /\b(report|complaint|ticket|service|citizen|311|feedback|survey|request|pothole|streetlight|satisfaction)\b/i },
];

/**
 * Detect the civic domain from a user message.
 * @param {string} message
 * @returns {string} domain key for responseTemplates
 */
function detectDomain(message) {
  const lower = (message || '').toLowerCase();
  let best = 'default';
  let bestCount = 0;

  for (const { domain, pattern } of domainPatterns) {
    const matches = lower.match(new RegExp(pattern, 'gi'));
    const count = matches ? matches.length : 0;
    if (count > bestCount) {
      bestCount = count;
      best = domain;
    }
  }

  return best;
}

// ---------------------------------------------------------------------------
// 2. processMessage
// ---------------------------------------------------------------------------

/**
 * Process a user chat message and return a structured civic response.
 * Simulates AI inference delay (500–1500 ms).
 *
 * @param {string} message — the user's natural-language message
 * @returns {Promise<object>} structured response
 */
export async function processMessage(message) {
  await simulateDelay();

  const domain = detectDomain(message);
  const template = responseTemplates[domain];

  // Slightly jitter confidence for realism
  const jitter = (Math.random() - 0.5) * 0.06;
  const confidence = Math.min(1, Math.max(0, template.confidence + jitter));
  let confidenceLabel = 'Moderate';
  if (confidence >= 0.9) confidenceLabel = 'Very High';
  else if (confidence >= 0.8) confidenceLabel = 'High';
  else if (confidence >= 0.6) confidenceLabel = 'Moderate';
  else confidenceLabel = 'Low';

  return {
    text: template.text,
    agent: template.agent,
    evidence: template.evidence.map((e) => ({
      ...e,
      timestamp: recentTimestamp(4),
    })),
    confidence: parseFloat(confidence.toFixed(3)),
    confidenceLabel,
    actions: template.actions,
    monitoringTips: template.monitoringTips,
    isStructured: true,
  };
}

// ---------------------------------------------------------------------------
// 3. getGreeting
// ---------------------------------------------------------------------------

/**
 * Returns a greeting message object suitable for displaying in the chat UI.
 *
 * @returns {object} greeting message
 */
export function getGreeting() {
  return {
    id: 'greeting',
    role: 'assistant',
    agent: 'CivicMind',
    text:
      '👋 Hello! I\'m **CivicMind**, your AI Decision Intelligence assistant for smart community management.\n\n' +
      'I coordinate five specialized agents — **Mobility**, **Safety**, **Health**, **Environment**, and **Civic Engagement** — to give you real-time insights and actionable recommendations.\n\n' +
      'Here are a few things you can ask me:\n' +
      '- "Why is bus route 12 delayed today?"\n' +
      '- "Show me today\'s critical alerts"\n' +
      '- "Which neighborhoods are at highest flood risk?"\n' +
      '- "How many service tickets are unresolved?"\n\n' +
      'What would you like to explore?',
    timestamp: new Date().toISOString(),
    isStructured: false,
  };
}
