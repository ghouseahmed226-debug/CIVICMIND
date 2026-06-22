'use client';
import KPICard from '@/components/KPICard';
import ChartCard from '@/components/ChartCard';
import AlertFeed from '@/components/AlertFeed';
import AgentCard from '@/components/AgentCard';
import { kpiData, trafficTrendData, incidentCategoryData, neighborhoodComparisonData, recentAlerts } from '@/lib/mockData';
import { agents } from '@/lib/agents';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#1e2538',
      titleColor: '#f1f5f9',
      bodyColor: '#94a3b8',
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
    },
  },
  scales: {
    x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 } } },
    y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 } } },
  },
};

const doughnutOptions = {
  ...chartOptions,
  scales: undefined,
};

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Command Center</h1>
        <p className="page-subtitle">Real-time overview of city operations • {new Date('2026-06-22T17:10:00Z').toLocaleDateString()}</p>
      </div>

      <div className="grid-kpi" style={{ marginBottom: '24px' }}>
        {kpiData?.slice(0, 4).map((kpi, i) => (
          <KPICard key={kpi.id} {...kpi} index={i} />
        ))}
      </div>

      <div className="grid-dashboard" style={{ marginBottom: '24px' }}>
        <ChartCard title="Traffic Volume Trends">
          <Line data={trafficTrendData} options={chartOptions} />
        </ChartCard>
        <ChartCard title="Incidents by Category">
          <Doughnut data={incidentCategoryData} options={doughnutOptions} />
        </ChartCard>
      </div>

      <div className="grid-dashboard" style={{ marginBottom: '32px' }}>
        <ChartCard title="Neighborhood Safety Scores">
          <Bar data={neighborhoodComparisonData} options={chartOptions} />
        </ChartCard>
        <AlertFeed alerts={recentAlerts} />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>AI Agent Status</h2>
      </div>
      <div className="grid-3">
        {agents?.slice(0, 3).map((agent, i) => (
          <AgentCard key={agent.id} agent={agent} index={i} />
        ))}
      </div>
    </div>
  );
}
