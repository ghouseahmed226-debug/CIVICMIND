'use client';
import { citizenReports } from '@/lib/mockData';
import { useState } from 'react';
import { FileText, Filter, Plus, MapPin, Clock, User, ThumbsUp, ChevronDown } from 'lucide-react';

export default function ReportsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReports = citizenReports?.filter(r => 
    activeFilter === 'all' ? true : r.status.toLowerCase() === activeFilter.toLowerCase().replace('-', ' ')
  ) || [];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Citizen Reports</h1>
          <p className="page-subtitle">Track and manage service requests and community reports</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} /> New Report
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['all', 'submitted', 'in-progress', 'resolved'].map(filter => (
            <button 
              key={filter} 
              className={`btn btn-sm ${activeFilter === filter ? 'btn-secondary' : 'btn-ghost'}`}
              style={{ background: activeFilter === filter ? 'var(--glass-bg-hover)' : 'transparent', textTransform: 'capitalize' }}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.replace('-', ' ')}
            </button>
          ))}
        </div>
        <button className="btn btn-ghost btn-sm">
          Sort by: Newest <ChevronDown size={14} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredReports.map((report, i) => (
          <div key={report.id} className="glass-card report-card animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
            <div className={`report-priority report-priority-${report.priority}`}></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>{report.title}</h3>
                <span className={`report-status status-${report.status.replace(' ', '-')}`}>
                  {report.status}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {report.description}
              </p>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {report.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {new Date(report.reportedAt).toLocaleDateString()}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {report.reportedBy}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><ThumbsUp size={14} /> {report.upvotes}</span>
              </div>
            </div>
          </div>
        ))}
        {filteredReports.length === 0 && (
          <div className="empty-state">
             <FileText size={48} className="empty-state-icon" />
             <h3>No reports found</h3>
             <p>Try changing your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
