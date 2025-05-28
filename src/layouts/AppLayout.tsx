import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="flex flex-col flex-1">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
