'use client';
import { AlertTriangle, Info, AlertCircle, MapPin, Clock } from 'lucide-react';

const formatTime = (isoString) => {
  if (!isoString) return 'Just now';
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHrs = Math.floor(diffMins / 60);
  
  if (diffMins < 60) return `${Math.max(0, diffMins)}m ago`;
  if (diffHrs < 24) return `${diffHrs}h ago`;
  return '1d ago';
};

export default function AlertFeed({ alerts }) {
  if (!alerts) return null;
  return (
    <div className="glass-card-static" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Recent Alerts</h3>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {alerts.slice(0, 6).map((alert, i) => (
          <div key={alert.id || i} style={{ display: 'flex', padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className={`severity-bar severity-bar-${alert.severity}`} style={{ marginRight: '16px' }}></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0 }}>{alert.title}</h4>
                <span className={`badge badge-${alert.severity}`} style={{ fontSize: '0.6875rem', padding: '2px 8px' }}>
                  {alert.severity}
                </span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: '0 0 8px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '250px' }}>
                {alert.description}
              </p>
              <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {alert.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {formatTime(alert.timestamp)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
