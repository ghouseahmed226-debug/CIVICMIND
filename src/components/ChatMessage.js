'use client';
import { Bot, User, CheckCircle, AlertTriangle, ArrowRight, Activity, Info } from 'lucide-react';

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`chat-message ${isUser ? 'chat-message-user' : 'chat-message-ai'}`}>
      <div className="chat-message-avatar">
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '100%' }}>
        {!isUser && message.agent && (
          <div style={{ alignSelf: 'flex-start' }}>
            <span className={`chat-agent-badge domain-${message.agent.toLowerCase().replace('agent', '')}`} style={{ background: 'var(--domain-color)', color: 'white', opacity: 0.9 }}>
               {message.agent}
            </span>
          </div>
        )}
        
        <div className="chat-message-content">
          <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{message.content || message.text}</p>
          
          {message.isStructured && (
            <div className="chat-structured-response">
              
              {message.evidence && message.evidence.length > 0 && (
                <div style={{ marginTop: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Evidence Sources</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {message.evidence.map((ev, i) => (
                      <div key={i} className="chat-evidence-card">
                        <div className="chat-evidence-source">{ev.source}</div>
                        <div>{ev.data} <span style={{ color: 'var(--text-muted)', fontSize: '0.6875rem' }}>({ev.timestamp})</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {message.confidence && (
                 <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Confidence</span>
                    <span className="chat-confidence" style={{ background: message.confidence > 0.8 ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)', color: message.confidence > 0.8 ? 'var(--emerald-400)' : 'var(--amber-400)' }}>
                      <Activity size={12} /> {Math.round(message.confidence * 100)}% - {message.confidenceLabel}
                    </span>
                 </div>
              )}
              
              {message.actions && message.actions.length > 0 && (
                <div style={{ marginTop: '16px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Recommended Actions</div>
                  <div className="chat-actions">
                    {message.actions.map((act, i) => (
                      <button key={i} className={`btn btn-sm ${act.type === 'primary' ? 'btn-primary' : act.type === 'warning' ? 'btn-danger' : 'btn-secondary'}`}>
                         {act.label} <ArrowRight size={14} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {message.monitoringTips && message.monitoringTips.length > 0 && (
                <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(34,211,238,0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(34,211,238,0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--cyan-400)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '4px' }}>
                    <Info size={14} /> MONITORING TIPS
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {message.monitoringTips.map((tip, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
