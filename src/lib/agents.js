// =============================================================================
// CivicMind — Agent Definitions
// Five domain-specific AI agents powering the civic intelligence platform
// =============================================================================

// ---------------------------------------------------------------------------
// 1. Agent Definitions
// ---------------------------------------------------------------------------
export const agents = [
  {
    id: 'mobility',
    name: 'MobilityAgent',
    displayName: 'Mobility & Transit',
    domain: 'mobility',
    status: 'active',
    icon: 'Bus',
    color: '#6366f1',
    description:
      'Manages real-time traffic flow, public transit scheduling, parking systems, and congestion prediction across the city.',
    capabilities: [
      'Traffic flow analysis',
      'Transit optimization',
      'Parking management',
      'Route planning',
      'Congestion prediction',
    ],
    tasksCompleted: 1247,
    avgResponseTime: '1.2s',
    accuracy: 94.7,
    recentTasks: [
      {
        task: 'Rerouted bus lines 8, 12, 15 around Elm Ave construction',
        status: 'completed',
        timestamp: '2026-06-22T14:20:00Z',
      },
      {
        task: 'Generated congestion forecast for upcoming holiday weekend',
        status: 'completed',
        timestamp: '2026-06-22T12:05:00Z',
      },
      {
        task: 'Optimized traffic signal timing on Main St corridor',
        status: 'completed',
        timestamp: '2026-06-22T10:30:00Z',
      },
      {
        task: 'Monitoring real-time I-94 incident impact on surface streets',
        status: 'in-progress',
        timestamp: '2026-06-22T13:18:00Z',
      },
    ],
  },
  {
    id: 'safety',
    name: 'SafetyAgent',
    displayName: 'Public Safety',
    domain: 'safety',
    status: 'active',
    icon: 'Shield',
    color: '#ef4444',
    description:
      'Monitors public safety incidents, coordinates emergency response, and performs predictive policing analytics.',
    capabilities: [
      'Incident detection & classification',
      'Emergency dispatch optimization',
      'Crime pattern analysis',
      'Predictive risk mapping',
      'Resource allocation',
    ],
    tasksCompleted: 982,
    avgResponseTime: '0.8s',
    accuracy: 96.1,
    recentTasks: [
      {
        task: 'Dispatched Engine 7 and Ladder 3 to Pine St structure fire',
        status: 'completed',
        timestamp: '2026-06-22T08:57:00Z',
      },
      {
        task: 'Updated weekend patrol zones based on event calendar',
        status: 'completed',
        timestamp: '2026-06-22T07:15:00Z',
      },
      {
        task: 'Analyzing traffic camera feeds for I-94 accident scene',
        status: 'in-progress',
        timestamp: '2026-06-22T13:16:00Z',
      },
      {
        task: 'Generated monthly crime-trend report for City Council',
        status: 'completed',
        timestamp: '2026-06-21T16:00:00Z',
      },
    ],
  },
  {
    id: 'health',
    name: 'HealthAgent',
    displayName: 'Public Health',
    domain: 'health',
    status: 'active',
    icon: 'Heart',
    color: '#10b981',
    description:
      'Tracks public health metrics, monitors disease outbreaks, and coordinates healthcare resource availability.',
    capabilities: [
      'Disease surveillance',
      'Healthcare resource monitoring',
      'Epidemiological modeling',
      'Vaccination tracking',
      'Heat/cold emergency response',
    ],
    tasksCompleted: 614,
    avgResponseTime: '1.5s',
    accuracy: 92.3,
    recentTasks: [
      {
        task: 'Activated 6 cooling centers in response to heat advisory',
        status: 'completed',
        timestamp: '2026-06-22T06:00:00Z',
      },
      {
        task: 'Compiled weekly ER utilization dashboard for all 4 hospitals',
        status: 'completed',
        timestamp: '2026-06-21T18:00:00Z',
      },
      {
        task: 'Monitoring heat-related 911 call volume',
        status: 'in-progress',
        timestamp: '2026-06-22T11:00:00Z',
      },
      {
        task: 'Updated vaccination coverage map for school district zones',
        status: 'completed',
        timestamp: '2026-06-20T14:30:00Z',
      },
    ],
  },
  {
    id: 'environment',
    name: 'EnvironmentAgent',
    displayName: 'Environment & Sustainability',
    domain: 'environment',
    status: 'idle',
    icon: 'Leaf',
    color: '#22d3ee',
    description:
      'Monitors air and water quality, manages waste and recycling analytics, and assesses flood and climate risks.',
    capabilities: [
      'Air quality monitoring',
      'Water quality analysis',
      'Flood risk assessment',
      'Waste management optimization',
      'Carbon footprint tracking',
    ],
    tasksCompleted: 531,
    avgResponseTime: '1.8s',
    accuracy: 91.5,
    recentTasks: [
      {
        task: 'Issued ozone advisory for Industrial District',
        status: 'completed',
        timestamp: '2026-06-22T12:40:00Z',
      },
      {
        task: 'Analyzed River Trail illegal dumping report for contamination risk',
        status: 'completed',
        timestamp: '2026-06-21T09:00:00Z',
      },
      {
        task: 'Generated monthly recycling-rate trend report',
        status: 'completed',
        timestamp: '2026-06-20T10:00:00Z',
      },
      {
        task: 'Calibrated stormwater runoff model for summer forecast',
        status: 'completed',
        timestamp: '2026-06-19T15:00:00Z',
      },
    ],
  },
  {
    id: 'civic',
    name: 'CivicEngagementAgent',
    displayName: 'Civic Engagement',
    domain: 'civic',
    status: 'active',
    icon: 'Users',
    color: '#f59e0b',
    description:
      'Facilitates citizen communication, manages service requests (311), and tracks community satisfaction metrics.',
    capabilities: [
      'Citizen report triage',
      'Service request routing',
      'Sentiment analysis',
      'Community engagement analytics',
      'Feedback loop management',
    ],
    tasksCompleted: 1583,
    avgResponseTime: '0.9s',
    accuracy: 93.8,
    recentTasks: [
      {
        task: 'Triaged 23 new 311 service requests this morning',
        status: 'completed',
        timestamp: '2026-06-22T09:00:00Z',
      },
      {
        task: 'Routed critical missing-stop-sign report to Traffic Engineering',
        status: 'completed',
        timestamp: '2026-06-22T08:12:00Z',
      },
      {
        task: 'Compiled citizen satisfaction survey results for Q2 2026',
        status: 'in-progress',
        timestamp: '2026-06-22T13:00:00Z',
      },
      {
        task: 'Sent virtual town-hall reminder notifications to 14,200 residents',
        status: 'completed',
        timestamp: '2026-06-21T17:00:00Z',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 2. Agent Connections  (inter-agent collaboration links)
// ---------------------------------------------------------------------------
export const agentConnections = [
  { from: 'mobility', to: 'safety',      strength: 0.9  },
  { from: 'mobility', to: 'environment',  strength: 0.6  },
  { from: 'mobility', to: 'civic',        strength: 0.5  },
  { from: 'safety',   to: 'health',       strength: 0.85 },
  { from: 'safety',   to: 'civic',        strength: 0.7  },
  { from: 'health',   to: 'environment',  strength: 0.75 },
  { from: 'health',   to: 'civic',        strength: 0.6  },
  { from: 'environment', to: 'civic',     strength: 0.5  },
  { from: 'environment', to: 'mobility',  strength: 0.4  },
  { from: 'safety',   to: 'environment',  strength: 0.55 },
];

// ---------------------------------------------------------------------------
// 3. Query → Agent Router
// ---------------------------------------------------------------------------

/**
 * Returns the most relevant agent for a given natural-language query by
 * simple keyword matching. Falls back to the CivicEngagementAgent.
 *
 * @param {string} query — user query text
 * @returns {object} — the matched agent object
 */
export function getAgentForQuery(query) {
  const q = (query || '').toLowerCase();

  const domainKeywords = [
    {
      domain: 'mobility',
      keywords: [
        'bus', 'transit', 'route', 'traffic', 'congestion', 'parking',
        'commute', 'train', 'bike', 'lane', 'road', 'highway', 'subway',
        'ridership', 'delay', 'detour',
      ],
    },
    {
      domain: 'safety',
      keywords: [
        'crime', 'incident', 'safety', 'emergency', 'fire', 'police',
        'theft', 'assault', 'patrol', 'dispatch', 'alarm', 'accident',
        'shooting', 'break-in', 'vandalism',
      ],
    },
    {
      domain: 'health',
      keywords: [
        'health', 'clinic', 'hospital', 'outbreak', 'flu', 'disease',
        'vaccination', 'vaccine', 'er', 'ambulance', 'medical', 'heat',
        'cooling', 'epidemic', 'pandemic',
      ],
    },
    {
      domain: 'environment',
      keywords: [
        'air', 'water', 'pollution', 'waste', 'flood', 'environment',
        'ozone', 'recycling', 'carbon', 'emission', 'river', 'stormwater',
        'quality', 'contamination', 'green',
      ],
    },
    {
      domain: 'civic',
      keywords: [
        'report', 'complaint', 'ticket', 'service', 'citizen', '311',
        'feedback', 'survey', 'town hall', 'request', 'pothole',
        'streetlight', 'satisfaction', 'engagement',
      ],
    },
  ];

  let bestDomain = 'civic'; // default fallback
  let bestScore = 0;

  for (const { domain, keywords } of domainKeywords) {
    const score = keywords.reduce(
      (acc, kw) => acc + (q.includes(kw) ? 1 : 0),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      bestDomain = domain;
    }
  }

  return agents.find((a) => a.domain === bestDomain) || agents[4];
}
