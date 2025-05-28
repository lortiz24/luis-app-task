import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="flex h-screen bg-bg-1  text-white">
      <aside className={`flex-shrink-0  transition-all duration-300 overflow-hidden ${sidebarOpen ? 'w-64' : 'w-0'}`}>
        <Sidebar />
      </aside>
      <main className="flex-1 min-w-0 flex flex-col">
        <Header onIconClick={toggleSidebar} />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
