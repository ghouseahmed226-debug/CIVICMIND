'use client';
import { Search, Bell, Settings, Moon, Menu } from 'lucide-react';

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
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
        <button className="header-icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        <button className="header-icon-btn">
          <Settings size={20} />
        </button>
        <button className="header-icon-btn">
          <Moon size={20} />
        </button>
      </div>
    </header>
  );
}
