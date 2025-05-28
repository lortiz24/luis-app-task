import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { ListPage } from '../pages/ListPage';

const Agenda = () => <>Agenda</>;


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/list" element={<ListPage />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/*" element={<Navigate to={'/list'}/>} />
      </Route>
    </Routes>
  );
};
