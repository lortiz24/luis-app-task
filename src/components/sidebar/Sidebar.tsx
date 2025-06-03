import { CheckIcon, CalendarIcon } from '@heroicons/react/16/solid';
import { MenuLink } from '../menu-link/MenuLink';
import { MenuListAcordeon } from '../menu-list-accordion/MenuListAcordeon';
import { useState } from 'react';
import { CreateNewTask } from './CreateNewTask';
import { useTaskStoreBase } from '../../store/store';

export const Sidebar = () => {
  const [visibleLists, setVisibleLists] = useState<string[]>(['1', '2']);
  const userLists = useTaskStoreBase((state) => state.lists);
  
  const handleToggleList = (id: string) => {
    setVisibleLists((prev) => (prev.includes(id) ? prev.filter((lid) => lid !== id) : [...prev, id]));
  };

  return (
    <div className="w-64  h-[calc(100vh-4rem)] py-3 px-2 gap-6 flex flex-col">
      <div>
        <CreateNewTask />
      </div>

      <nav className="flex flex-col gap-2">
        <MenuLink title="All task" to="/list" leftIcon={<CheckIcon className="text-white w-5 h-5 " />} />

        <MenuLink title="Agenda" to="/agenda" leftIcon={<CalendarIcon className="text-white w-5 h-5" />} />
      </nav>
      <MenuListAcordeon title="Lists" lists={userLists} visibleLists={visibleLists} onToggleList={handleToggleList} />
    </div>
  );
};
