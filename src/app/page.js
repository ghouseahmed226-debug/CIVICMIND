'use client';
import Link from 'next/link';
import { Brain, Bus, Shield, Heart, Leaf, Zap, Users, ArrowRight, Sparkles, Activity } from 'lucide-react';

export default function LandingPage() {
  return (
    <>
      <nav className="landing-nav">
        <div className="landing-logo">
          <div className="landing-logo-icon">CM</div>
          CivicMind
        </div>
        <Link href="/dashboard" className="btn btn-primary btn-sm">
          Launch Dashboard
        </Link>
      </nav>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-bg"></div>
          
          <div className="landing-badge">
            <Sparkles size={14} /> Powered by Multi-Agent AI
          </div>
          
          <h1 className="landing-title">
            Decision <span className="gradient-text">Intelligence</span> for Smart Communities
          </h1>
          
          <p className="landing-subtitle">
            Transform raw civic data into clear insights, predictions, and recommended actions through natural language.
          </p>
          
          <div className="landing-actions">
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Open Dashboard
            </Link>
            <Link href="/chat" className="btn btn-secondary btn-lg">
              Try AI Chat
            </Link>
          </div>
          
          <div className="landing-stats">
            <div className="landing-stat">
              <div className="landing-stat-value gradient-text">5</div>
              <div className="landing-stat-label">AI Agents</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-value gradient-text">142K+</div>
              <div className="landing-stat-label">Data Points</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-value gradient-text">99.7%</div>
              <div className="landing-stat-label">Uptime</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-value gradient-text">47</div>
              <div className="landing-stat-label">City Departments</div>
            </div>
          </div>
        </section>

        <section className="landing-features">
          <div className="landing-features-title">
            <h2>Intelligent City Operations</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Specialized AI agents working together to optimize every domain.</p>
          </div>
          
          <div className="landing-feature-grid">
            <div className="landing-feature-card glass-card">
              <div className="landing-feature-icon" style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--primary-400)' }}>
                <Bus size={24} />
              </div>
              <h3 className="landing-feature-title">Mobility & Transit</h3>
              <p className="landing-feature-desc">Traffic flow analysis, transit optimization, and congestion prediction to keep the city moving.</p>
            </div>
            
            <div className="landing-feature-card glass-card">
              <div className="landing-feature-icon" style={{ background: 'rgba(239,68,68,0.15)', color: 'var(--red-400)' }}>
                <Shield size={24} />
              </div>
              <h3 className="landing-feature-title">Public Safety</h3>
              <p className="landing-feature-desc">Incident monitoring, emergency response coordination, and early disaster alerts.</p>
            </div>
            
            <div className="landing-feature-card glass-card">
              <div className="landing-feature-icon" style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--emerald-400)' }}>
                <Heart size={24} />
              </div>
              <h3 className="landing-feature-title">Healthcare Access</h3>
              <p className="landing-feature-desc">Clinic accessibility, public health outbreak detection, and community wellness tracking.</p>
            </div>
            
            <div className="landing-feature-card glass-card">
              <div className="landing-feature-icon" style={{ background: 'rgba(34,211,238,0.15)', color: 'var(--cyan-400)' }}>
                <Leaf size={24} />
              </div>
              <h3 className="landing-feature-title">Environment</h3>
              <p className="landing-feature-desc">Air/water quality monitoring, waste management optimization, and sustainability goals.</p>
            </div>
            
            <div className="landing-feature-card glass-card">
              <div className="landing-feature-icon" style={{ background: 'rgba(245,158,11,0.15)', color: 'var(--amber-400)' }}>
                <Zap size={24} />
              </div>
              <h3 className="landing-feature-title">Energy & Utilities</h3>
              <p className="landing-feature-desc">Load forecasting, grid optimization, and predictive maintenance for critical infrastructure.</p>
            </div>
            
            <div className="landing-feature-card glass-card">
              <div className="landing-feature-icon" style={{ background: 'rgba(167,139,250,0.15)', color: 'var(--domain-civic)' }}>
                <Users size={24} />
              </div>
              <h3 className="landing-feature-title">Civic Engagement</h3>
              <p className="landing-feature-desc">Intelligent processing of citizen requests, automated service tickets, and accessibility.</p>
            </div>
          </div>
        </section>
        
        <section style={{ padding: '80px 24px', textAlign: 'center', background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-subtle)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px' }}>Ready to transform your city?</h2>
          <Link href="/dashboard" className="btn btn-primary btn-lg">
            Enter Command Center <ArrowRight size={20} />
          </Link>
        </section>
      </main>
    </>
  );
}
