import { CheckIcon, PlusIcon, CalendarIcon } from '@heroicons/react/16/solid';
import { Button } from '../ui/Button';
import { MenuLink } from '../menu-link/MenuLink';
import { MenuListAcordeon } from '../menu-list-accordion/MenuListAcordeon';

export const Sidebar = () => {
  return (
    <div className="w-64  h-[calc(100vh-4rem)] py-3 px-2 gap-6 flex flex-col">
      <Button
        variant='text'
        
        leftIcon={<PlusIcon className="text-white w-5 h-5" />}
      >
        Create task
      </Button>

      <nav className="flex flex-col gap-2">
        <MenuLink title="All task" to="/list" leftIcon={<CheckIcon className="text-white w-5 h-5" />} />

        <MenuLink title="Agenda" to="/agenda" leftIcon={<CalendarIcon className="text-white w-5 h-5" />} />
      </nav>
      <MenuListAcordeon
        title="Lists"
        lists={[
          { id: '1', title: 'Lista 1', to: '/list/1' },
          { id: '2', title: 'Lista 2', to: '/list/2' },
          { id: '3', title: 'Lista 3', to: '/list/3' },
        ]}
      />
    </div>
  );
};
