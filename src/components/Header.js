'use client';
import { Search, Bell, Settings, Moon, Sun, Menu, CheckCircle, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { recentAlerts } from '@/lib/mockData';

export default function Header({ onMenuClick }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [toast, setToast] = useState(null);

  const notifRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    showToast(`Switched to ${!isDarkMode ? 'Dark' : 'Light'} Mode (Demo)`);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const unreadCount = recentAlerts.filter(a => !a.isRead).length;

  return (
    <header className="header" style={{ position: 'relative' }}>
      <div className="header-left">
        <button className="header-icon-btn d-md-none" onClick={onMenuClick} style={{ display: 'none' }}>
          <Menu size={20} />
        </button>
        <div className="header-search">
          <Search className="header-search-icon" />
          <input type="text" placeholder="Search data, reports, or ask AI..." />
        </div>
      </div>
      <div className="header-right">
        
        {/* Notifications */}
        <div ref={notifRef} style={{ position: 'relative' }}>
          <button className="header-icon-btn" onClick={() => setShowNotifications(!showNotifications)}>
            <Bell size={20} />
            {unreadCount > 0 && <span className="notification-badge"></span>}
          </button>
          
          {showNotifications && (
            <div className="glass-card dropdown-menu" style={{ 
              position: 'absolute', top: '100%', right: 0, width: '320px', 
              marginTop: '12px', zIndex: 100, padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' 
            }}>
              <h4 style={{ margin: 0, fontSize: '0.875rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
                Notifications
              </h4>
              {recentAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} style={{ display: 'flex', gap: '8px', fontSize: '0.8125rem' }}>
                  <div className={`severity-bar-${alert.severity}`} style={{ width: '3px', borderRadius: '4px', flexShrink: 0 }}></div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600 }}>{alert.title}</p>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '260px' }}>
                      {alert.description}
                    </p>
                  </div>
                </div>
              ))}
              <button className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: '4px' }}>
                View All
              </button>
            </div>
          )}
        </div>

        {/* Settings */}
        <div ref={settingsRef} style={{ position: 'relative' }}>
          <button className="header-icon-btn" onClick={() => setShowSettings(!showSettings)}>
            <Settings size={20} />
          </button>

          {showSettings && (
            <div className="glass-card dropdown-menu" style={{ 
              position: 'absolute', top: '100%', right: 0, width: '200px', 
              marginTop: '12px', zIndex: 100, padding: '8px', display: 'flex', flexDirection: 'column' 
            }}>
              <button className="btn-ghost" style={{ textAlign: 'left', padding: '8px 12px', borderRadius: '6px', fontSize: '0.875rem' }} onClick={() => showToast('Profile Settings opened')}>Profile</button>
              <button className="btn-ghost" style={{ textAlign: 'left', padding: '8px 12px', borderRadius: '6px', fontSize: '0.875rem' }} onClick={() => showToast('System Settings opened')}>System Settings</button>
              <button className="btn-ghost" style={{ textAlign: 'left', padding: '8px 12px', borderRadius: '6px', fontSize: '0.875rem', color: 'var(--red-400)' }} onClick={() => showToast('Logged out')}>Logout</button>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button className="header-icon-btn" onClick={toggleTheme}>
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

      </div>

      {/* Global Toast */}
      {toast && (
        <div className="glass-card animate-fade-in-up" style={{
          position: 'fixed', bottom: '24px', right: '24px', padding: '12px 20px', 
          display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1000,
          background: 'var(--primary-700)', color: 'white'
        }}>
          <CheckCircle size={18} />
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{toast}</span>
          <button onClick={() => setToast(null)} style={{ marginLeft: '12px', opacity: 0.7 }}><X size={16} /></button>
        </div>
      )}
    </header>
  );
}
