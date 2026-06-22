'use client';
import { AlertTriangle, Clock, Wind, Zap, Star, Ticket, Siren, Droplets, TrendingUp, TrendingDown } from 'lucide-react';

const iconMap = {
  AlertTriangle, Clock, Wind, Zap, Star, Ticket, Siren, Droplets
};

export default function KPICard({ title, value, unit, change, changeType, icon, color, description, index = 0 }) {
  const IconComponent = iconMap[icon] || Star;
  
  return (
    <div className="glass-card animate-fade-in-up" style={{ animationDelay: `${index * 80}ms`, padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px',
          background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color
        }}>
          <IconComponent size={20} />
        </div>
        <div className={changeType === 'up' ? 'trend-up' : 'trend-down'}>
          {changeType === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {change}%
        </div>
      </div>
      <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px' }}>
        {title}
      </div>
      <div style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>
        {value} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{unit}</span>
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        {description}
      </div>
    </div>
  );
}
