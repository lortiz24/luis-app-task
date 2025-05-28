import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';

const Agenda = () => <>Agenda</>;
const List = () => <>List</>;


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/list" element={<List />} />
        <Route path="/agenda" element={<Agenda />} />
      </Route>
    </Routes>
  );
};
