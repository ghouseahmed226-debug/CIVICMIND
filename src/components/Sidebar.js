'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BarChart3, MessageSquare, Bot, FileText, Settings, Brain } from 'lucide-react';

export default function Sidebar({ isOpen = true }) {
  const pathname = usePathname();

  const navGroups = [
    {
      title: 'Overview',
      items: [
        { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { label: 'Analytics', href: '/analytics', icon: BarChart3 },
      ]
    },
    {
      title: 'AI Assistant',
      items: [
        { label: 'Chat', href: '/chat', icon: MessageSquare },
        { label: 'Agents', href: '/agents', icon: Bot },
      ]
    },
    {
      title: 'Civic Services',
      items: [
        { label: 'Reports', href: '/reports', icon: FileText },
      ]
    }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Brain size={20} color="white" />
        </div>
        <div className="sidebar-brand">CivicMind</div>
      </div>
      <nav className="sidebar-nav">
        {navGroups.map((group, idx) => (
          <div key={idx} className="sidebar-section">
            <div className="sidebar-section-title">{group.title}</div>
            {group.items.map((item, itemIdx) => {
              const Icon = item.icon;
              // Handle active state
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link key={itemIdx} href={item.href} className={`sidebar-link ${isActive ? 'active' : ''}`}>
                  <Icon className="sidebar-link-icon" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">CM</div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">City Manager</div>
            <div className="sidebar-user-role">Administrator</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
