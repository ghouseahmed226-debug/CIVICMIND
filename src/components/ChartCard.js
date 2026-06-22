'use client';

export default function ChartCard({ title, subtitle, children, className = '' }) {
  return (
    <div className={`glass-card-static ${className}`} style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{title}</h3>
        {subtitle && <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{subtitle}</span>}
      </div>
      <div style={{ flex: 1, position: 'relative', minHeight: '200px' }}>
        {children}
      </div>
    </div>
  );
}
