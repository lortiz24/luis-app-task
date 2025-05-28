import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { ListPage } from '../pages/ListPage';
import { WeeklyAgenda } from '../pages/WeeklyAgendaPage';




export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/list" element={<ListPage />} />
        <Route path="/agenda" element={<WeeklyAgenda />} />
        <Route path="/*" element={<Navigate to={'/list'}/>} />
      </Route>
    </Routes>
  );
};
