import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useUserLists } from '../hooks/useUserLists';
import { useTaskStoreBase } from '../store/store';

export const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const user = useTaskStoreBase((state) => state.user);

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  useUserLists(user?.id ?? null);

  return (
    <div className="flex flex-col h-screen bg-bg-1 text-white">
      <Header onIconClick={toggleSidebar} />
      <div className="flex flex-1 min-h-0">
        <aside className={`flex-shrink-0 transition-all duration-300 overflow-hidden ${sidebarOpen ? 'w-64' : 'w-0'}`}>
          <Sidebar />
        </aside>
        <main className="flex-1 min-w-0 flex flex-col">
          <div className="flex-1 xs:px-2 xl:px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
