'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <div className="gradient-mesh" />
      <Sidebar isOpen={sidebarOpen} />
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
