'use client';
import AgentCard from '@/components/AgentCard';
import { agents } from '@/lib/agents';
import { useState } from 'react';
import { Brain, Activity, Zap, Clock } from 'lucide-react';

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Agent Orchestration</h1>
        <p className="page-subtitle">Multi-agent AI system powering city intelligence</p>
      </div>

      <div className="grid-kpi" style={{ marginBottom: '32px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Brain size={16} />
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>Total Agents</div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{agents?.length || 5}</div>
        </div>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16,185,129,0.1)', color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Activity size={16} />
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>Active Now</div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>4</div>
        </div>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(245,158,11,0.1)', color: 'var(--amber-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Zap size={16} />
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>Tasks Today</div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>847</div>
        </div>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(34,211,238,0.1)', color: 'var(--cyan-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Clock size={16} />
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>Avg Response</div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>1.4s</div>
        </div>
      </div>

      <div className="agent-network" style={{ marginBottom: '32px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
         <div className="agent-node agent-center-node" style={{ zIndex: 10 }}>
           <div className="agent-node-circle"><Brain size={32} color="white" /></div>
           <div className="agent-node-label" style={{ color: 'white' }}>CivicMind</div>
         </div>
         {agents?.map((agent, i) => {
           const angle = (i * (360 / agents.length)) * (Math.PI / 180);
           const radius = 120;
           const x = Math.cos(angle) * radius;
           const y = Math.sin(angle) * radius;
           return (
             <div key={agent.id} className="agent-node" style={{ transform: `translate(${x}px, ${y}px)`, '--domain-color': agent.color }}>
               <div className="agent-node-circle" style={{ borderColor: agent.color, background: 'var(--bg-surface)' }}>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: agent.color }} />
               </div>
               <div className="agent-node-label">{agent.name}</div>
             </div>
           );
         })}
      </div>

      <div className="grid-3">
        {agents?.map((agent, i) => (
          <AgentCard 
            key={agent.id} 
            agent={agent} 
            index={i} 
            isSelected={selectedAgent?.id === agent.id}
            onClick={() => setSelectedAgent(agent)}
          />
        ))}
      </div>
      
      {selectedAgent && (
        <div className="glass-card-static animate-fade-in-up" style={{ marginTop: '24px', padding: '24px' }}>
           <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px' }}>{selectedAgent.displayName} Details</h3>
           <p style={{ color: 'var(--text-secondary)' }}>Capabilities: {selectedAgent.capabilities.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
