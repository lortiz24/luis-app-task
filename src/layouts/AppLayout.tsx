import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="min-h-screen bg-bg-1 flex flex-col text-white">
      <Header onIconClick={toggleSidebar} />
      <div className="flex flex-1 flex-row">
        <div className={`transition-all duration-300 overflow-hidden ${sidebarOpen ? 'w-64' : 'w-0'}`}>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
