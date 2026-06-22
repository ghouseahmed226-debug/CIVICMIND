'use client';
import { Bus, Shield, Heart, Leaf, Users, Activity } from 'lucide-react';

const iconMap = { Bus, Shield, Heart, Leaf, Users, Activity };

export default function AgentCard({ agent, onClick, isSelected, index = 0 }) {
  const IconComponent = iconMap[agent.icon] || Activity;
  
  let badgeClass = 'badge-idle';
  if (agent.status === 'active') badgeClass = 'badge-active';
  else if (agent.status === 'busy') badgeClass = 'badge-warning';

  return (
    <div 
      className={`glass-card animate-fade-in-up ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
      style={{ 
        padding: '20px', 
        cursor: onClick ? 'pointer' : 'default', 
        borderColor: isSelected ? agent.color : undefined,
        animationDelay: `${index * 80}ms`
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          background: `${agent.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: agent.color
        }}>
          <IconComponent size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: '0 0 4px 0' }}>{agent.displayName}</h3>
          <div className={`badge ${badgeClass}`}>
            <span className="badge-dot"></span>
            {agent.status}
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {agent.capabilities.slice(0, 3).map((cap, i) => (
          <span key={i} className="chip">{cap}</span>
        ))}
        {agent.capabilities.length > 3 && (
          <span className="chip">+{agent.capabilities.length - 3}</span>
        )}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tasks</div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{agent.tasksCompleted}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Response</div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{agent.avgResponseTime}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Accuracy</div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--emerald-400)' }}>{agent.accuracy}%</div>
        </div>
      </div>
    </div>
  );
}
