import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { ListPage } from '../pages/ListPage';
import { WeeklyAgenda } from '../pages/WeeklyAgendaPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { useTaskStoreBase } from '../store/store';
import { useCheckSession } from '../hooks/useCheckSession';
import { Loader } from '../components/ui/Loader';

// Guard para rutas privadas
const PrivateRoute = () => {
  const user = useTaskStoreBase((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

// Guard para rutas públicas
const PublicRoute = () => {
  const user = useTaskStoreBase((state) => state.user);
  return !user ? <Outlet /> : <Navigate to="/list" replace />;
};

export const AppRouter = () => {
  const checking = useTaskStoreBase((state) => state.checking);
  useCheckSession();

  if (checking) {
    return (
      <div className="min-h-screen bg-bg-1 flex items-center justify-center">
        <Loader  size={48}/>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/list" replace />} />
          <Route path="list" element={<ListPage />} />
          <Route path="agenda" element={<WeeklyAgenda />} />
          <Route path="*" element={<Navigate to="/list" replace />} />
        </Route>
      </Route>
    </Routes>
  );
};
