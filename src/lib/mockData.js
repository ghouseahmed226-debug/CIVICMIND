// =============================================================================
// CivicMind — Mock Data Module
// Realistic civic data for a mid-sized US city (pop. ~500,000)
// =============================================================================

// ---------------------------------------------------------------------------
// 1. KPI Data
// ---------------------------------------------------------------------------
export const kpiData = [
  {
    id: 'active-incidents',
    title: 'Active Incidents',
    value: 142,
    unit: '',
    change: 12,
    changeType: 'down',
    icon: 'AlertTriangle',
    color: '#ef4444',
    description: 'Currently active incidents across all domains citywide',
  },
  {
    id: 'transit-on-time',
    title: 'Transit On-Time Rate',
    value: 87.3,
    unit: '%',
    change: 3.2,
    changeType: 'up',
    icon: 'Bus',
    color: '#6366f1',
    description: 'Percentage of buses and trains arriving within 5 min of schedule',
  },
  {
    id: 'air-quality',
    title: 'Air Quality Index',
    value: 42,
    unit: 'AQI',
    change: 8,
    changeType: 'down',
    icon: 'Wind',
    color: '#10b981',
    description: 'EPA Air Quality Index — lower is better (Good: 0-50)',
  },
  {
    id: 'energy-load',
    title: 'Energy Load',
    value: 2.4,
    unit: 'GW',
    change: 5.1,
    changeType: 'up',
    icon: 'Zap',
    color: '#f59e0b',
    description: 'Current city-wide electrical grid load',
  },
  {
    id: 'citizen-satisfaction',
    title: 'Citizen Satisfaction',
    value: 4.2,
    unit: '/5',
    change: 0.3,
    changeType: 'up',
    icon: 'ThumbsUp',
    color: '#22d3ee',
    description: 'Average citizen satisfaction score from recent surveys',
  },
  {
    id: 'service-tickets',
    title: 'Service Tickets Open',
    value: 328,
    unit: '',
    change: 15,
    changeType: 'down',
    icon: 'Ticket',
    color: '#8b5cf6',
    description: 'Open 311 service requests awaiting resolution',
  },
  {
    id: 'emergency-response',
    title: 'Emergency Response Time',
    value: 4.2,
    unit: 'min',
    change: 18,
    changeType: 'down',
    icon: 'Siren',
    color: '#ec4899',
    description: 'Median emergency response time across fire, EMS, and police',
  },
  {
    id: 'water-quality',
    title: 'Water Quality Score',
    value: 96,
    unit: '/100',
    change: 2,
    changeType: 'up',
    icon: 'Droplets',
    color: '#0ea5e9',
    description: 'Composite water quality index across all treatment plants',
  },
];

// ---------------------------------------------------------------------------
// 2. Traffic / Mobility Trend Data  (line chart — weekly comparison)
// ---------------------------------------------------------------------------
export const trafficTrendData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'This Week',
      data: [2400, 1800, 3200, 2800, 3600, 1200, 900],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.1)',
    },
    {
      label: 'Last Week',
      data: [2100, 2200, 2800, 2500, 3100, 1400, 1100],
      borderColor: '#64748b',
      backgroundColor: 'rgba(100,116,139,0.1)',
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. Incident Category Data  (doughnut chart)
// ---------------------------------------------------------------------------
export const incidentCategoryData = {
  labels: ['Traffic', 'Infrastructure', 'Public Safety', 'Environment', 'Utilities'],
  datasets: [
    {
      data: [35, 22, 18, 15, 10],
      backgroundColor: ['#6366f1', '#22d3ee', '#f59e0b', '#10b981', '#ef4444'],
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. Neighborhood Comparison Data  (bar chart — safety scores)
// ---------------------------------------------------------------------------
export const neighborhoodComparisonData = {
  labels: [
    'Downtown',
    'Riverside',
    'Maple Heights',
    'Lakewood',
    'Cedar Park',
    'Westfield',
  ],
  datasets: [
    {
      label: 'Safety Score',
      data: [72, 88, 65, 91, 78, 84],
      backgroundColor: '#6366f1',
    },
    {
      label: 'City Average',
      data: [79, 79, 79, 79, 79, 79],
      backgroundColor: '#94a3b8',
    },
  ],
};

// ---------------------------------------------------------------------------
// 5. Recent Alerts  (last 24 hours — anchored to 2026-06-22)
// ---------------------------------------------------------------------------
export const recentAlerts = [
  {
    id: 'alert-001',
    severity: 'critical',
    title: 'Water Main Break — Oak Street',
    description:
      'A 24-inch water main ruptured near 400 Oak St, causing flooding in two lanes. Repair crews dispatched; estimated fix in 6 hours.',
    location: '400 Oak Street, Downtown',
    timestamp: '2026-06-22T14:32:00Z',
    domain: 'environment',
    isRead: false,
  },
  {
    id: 'alert-002',
    severity: 'critical',
    title: 'Multi-Vehicle Accident — I-94 Westbound',
    description:
      'Five-car pileup at mile marker 17 blocking two lanes. Emergency medical services on-scene; expect delays of 45+ minutes.',
    location: 'I-94 Westbound, Mile Marker 17',
    timestamp: '2026-06-22T13:15:00Z',
    domain: 'mobility',
    isRead: false,
  },
  {
    id: 'alert-003',
    severity: 'warning',
    title: 'Elevated Ozone Levels — Industrial District',
    description:
      'Ozone readings at the Industrial Park monitoring station reached 0.082 ppm, exceeding the 8-hour standard. Advisory issued for sensitive groups.',
    location: 'Industrial District Monitoring Station',
    timestamp: '2026-06-22T12:45:00Z',
    domain: 'environment',
    isRead: false,
  },
  {
    id: 'alert-004',
    severity: 'warning',
    title: 'Grid Overload Risk — Southeast Substation',
    description:
      'Load at Southeast Substation at 94 % capacity due to heat wave. Rolling conservation alerts sent to 12,000 customers.',
    location: 'Southeast Substation, Sector 7',
    timestamp: '2026-06-22T11:20:00Z',
    domain: 'energy',
    isRead: true,
  },
  {
    id: 'alert-005',
    severity: 'warning',
    title: 'Bus Route 12 — Significant Delays',
    description:
      'Route 12 running 18 minutes behind schedule due to road construction on Elm Ave. Passengers advised to use Route 15 as alternate.',
    location: 'Elm Avenue Corridor',
    timestamp: '2026-06-22T10:05:00Z',
    domain: 'mobility',
    isRead: true,
  },
  {
    id: 'alert-006',
    severity: 'info',
    title: 'New Bike Lane Opens — River Trail Extension',
    description:
      'The 2.3-mile River Trail bike lane extension from Cedar Park to Lakewood is now open. Connected bike-share stations activated.',
    location: 'Cedar Park to Lakewood',
    timestamp: '2026-06-22T09:30:00Z',
    domain: 'mobility',
    isRead: true,
  },
  {
    id: 'alert-007',
    severity: 'critical',
    title: 'Structure Fire — 812 Pine Street',
    description:
      'Two-alarm fire reported at a three-story residential building. Three engine companies and two ladder trucks responding. Evacuations in progress.',
    location: '812 Pine Street, Maple Heights',
    timestamp: '2026-06-22T08:55:00Z',
    domain: 'safety',
    isRead: false,
  },
  {
    id: 'alert-008',
    severity: 'info',
    title: 'Scheduled Power Maintenance — Westfield',
    description:
      'Planned outage for transformer upgrade affecting 3,200 customers between 10 PM and 4 AM tonight.',
    location: 'Westfield, Zones W3-W5',
    timestamp: '2026-06-22T07:00:00Z',
    domain: 'energy',
    isRead: true,
  },
  {
    id: 'alert-009',
    severity: 'warning',
    title: 'Heat Advisory — City-Wide',
    description:
      'National Weather Service issued a heat advisory. High of 101 °F expected. Cooling centers activated at 6 community locations.',
    location: 'City-Wide',
    timestamp: '2026-06-21T22:00:00Z',
    domain: 'health',
    isRead: true,
  },
  {
    id: 'alert-010',
    severity: 'info',
    title: 'Community Town Hall — Budget Review',
    description:
      'Virtual town hall on the FY2027 budget scheduled for June 24 at 6 PM. Residents can submit questions via the CivicMind portal.',
    location: 'Virtual — CivicMind Portal',
    timestamp: '2026-06-21T18:30:00Z',
    domain: 'health',
    isRead: true,
  },
];

// ---------------------------------------------------------------------------
// 6. Citizen Reports  (311-style reports)
// ---------------------------------------------------------------------------
export const citizenReports = [
  {
    id: 'rpt-001',
    title: 'Pothole on Elm Avenue',
    description:
      'Large pothole approximately 18 inches wide in the right lane of Elm Ave near the intersection with 5th Street. Several vehicles observed swerving to avoid it.',
    category: 'Infrastructure',
    status: 'in-progress',
    priority: 'high',
    location: 'Elm Avenue & 5th Street, Downtown',
    reportedBy: 'Maria Gonzalez',
    reportedAt: '2026-06-20T09:12:00Z',
    assignedTo: 'Public Works — Road Maintenance',
    imageUrl: null,
    upvotes: 47,
  },
  {
    id: 'rpt-002',
    title: 'Broken Streetlight — Cedar Park',
    description:
      'Streetlight at the corner of Cedar Blvd and Lakeview Drive has been out for three nights. The area is very dark and feels unsafe after 9 PM.',
    category: 'Utilities',
    status: 'assigned',
    priority: 'medium',
    location: 'Cedar Blvd & Lakeview Dr, Cedar Park',
    reportedBy: 'James Washington',
    reportedAt: '2026-06-19T20:45:00Z',
    assignedTo: 'Electrical Maintenance Division',
    imageUrl: null,
    upvotes: 23,
  },
  {
    id: 'rpt-003',
    title: 'Illegal Dumping Near River Trail',
    description:
      'Construction debris and household waste dumped along the south bank of the river near the new bike trail. Potential water contamination risk.',
    category: 'Environment',
    status: 'submitted',
    priority: 'high',
    location: 'River Trail South Bank, Lakewood',
    reportedBy: 'David Kim',
    reportedAt: '2026-06-21T07:30:00Z',
    assignedTo: null,
    imageUrl: null,
    upvotes: 61,
  },
  {
    id: 'rpt-004',
    title: 'Graffiti on Community Center Wall',
    description:
      'Extensive graffiti covering the east-facing wall of the Riverside Community Center. Obscene language visible from the playground.',
    category: 'Public Safety',
    status: 'resolved',
    priority: 'low',
    location: 'Riverside Community Center, 220 River Rd',
    reportedBy: 'Susan Park',
    reportedAt: '2026-06-17T14:00:00Z',
    assignedTo: 'Parks & Recreation — Maintenance',
    imageUrl: null,
    upvotes: 15,
  },
  {
    id: 'rpt-005',
    title: 'Noise Complaint — Late-Night Construction',
    description:
      'Construction crews working past 11 PM on the Maple Heights redevelopment project for the third consecutive night. Noise ordinance violation.',
    category: 'Public Safety',
    status: 'in-progress',
    priority: 'medium',
    location: '900 Block, Maple Heights',
    reportedBy: 'Robert Chen',
    reportedAt: '2026-06-21T23:15:00Z',
    assignedTo: 'Code Enforcement Division',
    imageUrl: null,
    upvotes: 38,
  },
  {
    id: 'rpt-006',
    title: 'Overflowing Trash Cans — Central Park',
    description:
      'All six trash receptacles near the Central Park playground are overflowing. Waste is attracting birds and creating unsanitary conditions.',
    category: 'Environment',
    status: 'assigned',
    priority: 'medium',
    location: 'Central Park Playground, Downtown',
    reportedBy: 'Linda Martinez',
    reportedAt: '2026-06-22T06:20:00Z',
    assignedTo: 'Sanitation Department',
    imageUrl: null,
    upvotes: 29,
  },
  {
    id: 'rpt-007',
    title: 'Missing Stop Sign — Westfield',
    description:
      'Stop sign at the T-intersection of Oak Lane and Birch Court is missing. Appears to have been knocked over. Near-miss accident observed.',
    category: 'Traffic',
    status: 'submitted',
    priority: 'critical',
    location: 'Oak Lane & Birch Court, Westfield',
    reportedBy: 'Thomas Anderson',
    reportedAt: '2026-06-22T08:10:00Z',
    assignedTo: null,
    imageUrl: null,
    upvotes: 52,
  },
  {
    id: 'rpt-008',
    title: 'Water Discoloration — Riverside',
    description:
      'Tap water has a brownish tint in the 300 block of River Rd. Started this morning. No official boil-water advisory issued yet.',
    category: 'Utilities',
    status: 'in-progress',
    priority: 'high',
    location: '300 Block, River Rd, Riverside',
    reportedBy: 'Angela Brooks',
    reportedAt: '2026-06-22T10:30:00Z',
    assignedTo: 'Water Treatment Division',
    imageUrl: null,
    upvotes: 74,
  },
];

// ---------------------------------------------------------------------------
// 7. Analytics Time-Series Data  (12 months, one value per month)
// ---------------------------------------------------------------------------
const months = [
  'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025',
  'Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026',
];

export const analyticsTimeSeriesData = {
  mobility: {
    labels: months,
    metrics: {
      avgCommute: {
        label: 'Avg Commute Time (min)',
        data: [28.4, 27.9, 26.1, 25.8, 24.6, 23.9, 24.2, 25.1, 24.8, 23.7, 22.9, 22.3],
      },
      transitRidership: {
        label: 'Transit Ridership (thousands)',
        data: [184, 179, 192, 198, 187, 172, 168, 175, 196, 204, 211, 218],
      },
      congestionIndex: {
        label: 'Congestion Index',
        data: [7.2, 7.0, 6.5, 6.3, 5.9, 5.4, 5.6, 6.1, 5.8, 5.3, 5.1, 4.9],
      },
    },
  },
  safety: {
    labels: months,
    metrics: {
      incidentCount: {
        label: 'Total Incidents',
        data: [312, 298, 285, 267, 254, 248, 261, 245, 232, 218, 196, 178],
      },
      responseTime: {
        label: 'Avg Response Time (min)',
        data: [5.8, 5.6, 5.4, 5.2, 5.1, 4.9, 5.0, 4.8, 4.7, 4.5, 4.3, 4.2],
      },
      resolutionRate: {
        label: 'Resolution Rate (%)',
        data: [82, 83, 84, 85, 86, 87, 86, 88, 89, 90, 91, 92],
      },
    },
  },
  health: {
    labels: months,
    metrics: {
      erWaitTime: {
        label: 'ER Avg Wait (min)',
        data: [42, 45, 38, 36, 40, 48, 52, 44, 39, 35, 33, 31],
      },
      fluCases: {
        label: 'Flu Cases Reported',
        data: [124, 98, 87, 102, 248, 412, 386, 274, 165, 98, 72, 58],
      },
      vaccinationRate: {
        label: 'Vaccination Coverage (%)',
        data: [62, 63, 64, 65, 68, 72, 74, 75, 76, 77, 78, 79],
      },
    },
  },
  environment: {
    labels: months,
    metrics: {
      aqi: {
        label: 'Avg AQI',
        data: [52, 58, 48, 44, 38, 35, 36, 39, 42, 44, 46, 42],
      },
      waterQuality: {
        label: 'Water Quality Score',
        data: [89, 88, 90, 91, 92, 93, 93, 94, 94, 95, 95, 96],
      },
      wasteRecycled: {
        label: 'Waste Recycled (%)',
        data: [34, 35, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44],
      },
    },
  },
  energy: {
    labels: months,
    metrics: {
      peakLoad: {
        label: 'Peak Load (GW)',
        data: [2.8, 3.1, 2.6, 2.2, 2.0, 2.3, 2.5, 2.3, 2.1, 2.0, 2.2, 2.4],
      },
      renewableShare: {
        label: 'Renewable Share (%)',
        data: [18, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28],
      },
      outages: {
        label: 'Grid Outages',
        data: [14, 18, 11, 9, 8, 12, 15, 10, 8, 7, 6, 5],
      },
    },
  },
};

// ---------------------------------------------------------------------------
// 8. Predictive / Forecast Data  (next 7 days from 2026-06-22)
// ---------------------------------------------------------------------------
const forecastDays = [
  '2026-06-23', '2026-06-24', '2026-06-25', '2026-06-26',
  '2026-06-27', '2026-06-28', '2026-06-29',
];

export const predictiveData = {
  energyDemand: {
    title: 'Energy Demand Forecast (GW)',
    labels: forecastDays,
    predicted: [2.5, 2.7, 2.9, 3.0, 2.8, 2.3, 2.1],
    upper:    [2.7, 3.0, 3.2, 3.4, 3.1, 2.6, 2.4],
    lower:    [2.3, 2.4, 2.6, 2.7, 2.5, 2.0, 1.8],
  },
  trafficCongestion: {
    title: 'Traffic Congestion Index Forecast',
    labels: forecastDays,
    predicted: [5.2, 5.5, 5.8, 5.6, 6.1, 3.8, 3.2],
    upper:    [5.8, 6.1, 6.5, 6.3, 6.9, 4.5, 3.9],
    lower:    [4.6, 4.9, 5.1, 4.9, 5.3, 3.1, 2.5],
  },
  serviceRequests: {
    title: 'Service Requests Forecast',
    labels: forecastDays,
    predicted: [48, 52, 55, 53, 58, 32, 28],
    upper:    [56, 61, 65, 63, 68, 40, 35],
    lower:    [40, 43, 45, 43, 48, 24, 21],
  },
};
