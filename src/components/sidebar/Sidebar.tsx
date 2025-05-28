import { CheckIcon, PlusIcon, CalendarIcon } from '@heroicons/react/16/solid';
import { Button } from '../ui/Button';
import { MenuLink } from '../menu-link/MenuLink';

export const Sidebar = () => {
  return (
    <div className="w-64  h-[calc(100vh-4rem)] py-3 px-2 gap-6 flex flex-col">
      <Button
        className="rounded-3xl bg-primary-800 hover:bg-primary-900"
        leftIcon={<PlusIcon className="text-white w-5 h-5" />}
      >
        Create
      </Button>

      <nav className="flex flex-col gap-2">
        <MenuLink title="All task" to="/list" leftIcon={<CheckIcon className="text-white w-5 h-5" />} />

        <MenuLink title="Agenda" to="/agenda" leftIcon={<CalendarIcon className="text-white w-5 h-5" />} />
      </nav>
    </div>
  );
};
