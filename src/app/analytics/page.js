'use client';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { analyticsTimeSeriesData, predictiveData, trafficTrendData } from '@/lib/mockData';
import ChartCard from '@/components/ChartCard';
import { useState, useEffect } from 'react';
import { Activity, TrendingUp, BarChart3, Brain, AlertTriangle } from 'lucide-react';

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

export default function AnalyticsPage() {
  const [activeDomain, setActiveDomain] = useState('mobility');
  const [activeTab, setActiveTab] = useState('trends');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const domains = [
    { id: 'mobility', label: 'Mobility', icon: Activity },
    { id: 'safety', label: 'Safety', icon: AlertTriangle },
    { id: 'health', label: 'Health', icon: Brain },
    { id: 'environment', label: 'Environment', icon: BarChart3 },
    { id: 'energy', label: 'Energy', icon: TrendingUp },
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Analytics Explorer</h1>
        <p className="page-subtitle">Deep-dive into city performance metrics</p>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {domains.map(d => {
          const Icon = d.icon;
          const isActive = activeDomain === d.id;
          return (
            <button 
              key={d.id} 
              className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveDomain(d.id)}
            >
              <Icon size={16} /> {d.label}
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
        {['trends', 'predictions', 'anomalies'].map(tab => (
          <button 
            key={tab}
            style={{ 
              background: 'none', border: 'none', color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-muted)', 
              fontWeight: activeTab === tab ? 700 : 500, fontSize: '0.9375rem', textTransform: 'capitalize',
              position: 'relative', paddingBottom: '12px', marginBottom: '-13px'
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--primary-500)', borderRadius: '2px' }} />
            )}
          </button>
        ))}
      </div>

      {activeTab === 'trends' && (
        <div className="animate-fade-in-up">
          <ChartCard title={`${activeDomain.charAt(0).toUpperCase() + activeDomain.slice(1)} Trends`}>
             <div style={{ height: '350px' }}>
               <Line data={analyticsTimeSeriesData?.[activeDomain] || trafficTrendData} options={chartOptions} />
             </div>
          </ChartCard>
        </div>
      )}

      {activeTab === 'predictions' && (
        <div className="animate-fade-in-up">
           <ChartCard title="7-Day Forecast with Confidence Intervals">
             <div style={{ height: '350px' }}>
               <Line data={predictiveData?.['energy'] || trafficTrendData} options={chartOptions} />
             </div>
           </ChartCard>
        </div>
      )}
      
      {activeTab === 'anomalies' && (
        <div className="animate-fade-in-up">
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="severity-bar-critical" style={{ width: '4px', height: '40px', borderRadius: '4px' }}></div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>Unexpected Spike in Traffic Congestion</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Downtown sector showing 45% increase compared to historical baseline.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
