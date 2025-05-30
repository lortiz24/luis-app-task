import { Bars3Icon, ArrowRightEndOnRectangleIcon, UserIcon } from '@heroicons/react/16/solid';
import { Button } from '../ui/Button';
import { useTaskStoreBase } from '../../store/store';
import { useAuthLogic } from '../../hooks/useAuthLogic';

interface HeaderProps {
  onIconClick?: () => void;
  onLogout?: () => void;
}

function getInitials(name: string = '') {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export const Header = ({ onIconClick }: HeaderProps) => {
  const user = useTaskStoreBase((state) => state.user);
  const { signOut } = useAuthLogic();
  const avatarUrl = user?.user_metadata?.avatar_url || '';
  const name = user?.user_metadata?.name || user?.email || '';
  const initials = getInitials(name);

  const onLogout = () => {
    signOut();
  };
  return (
    <div className="h-16 px-8 flex items-center justify-between">
      <div
        onClick={onIconClick}
        className="flex items-center p-2 rounded-full hover:bg-gray-700/50 hover:cursor-pointer"
      >
        <Bars3Icon className="size-6" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="h-8 w-8 object-cover" />
            ) : (
              <UserIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-100">{name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={onLogout}
          className="border-gray-600 bg-gray-700 text-gray-100 hover:bg-gray-600 hover:text-white"
        >
          <ArrowRightEndOnRectangleIcon className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Cerrar Sesión</span>
          <span className="sm:hidden">Salir</span>
        </Button>
      </div>
    </div>
  );
};
