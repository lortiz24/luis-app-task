import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { ListPage } from '../pages/ListPage';
import { WeeklyAgenda } from '../pages/WeeklyAgendaPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { useTaskStoreBase } from '../store/store';
import { useCheckSession } from '../hooks/useCheckSession';

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
  useCheckSession();
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
