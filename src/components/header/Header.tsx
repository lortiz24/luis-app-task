import { Bars3Icon } from '@heroicons/react/16/solid';

interface HeaderProps {
  onIconClick?: () => void;
}

export const Header = ({ onIconClick }: HeaderProps) => {
  return (
    <div
      className="h-16  px-8
     flex items-center justify-between"
    >
      <div className="flex items-center p-2 rounded-full hover:bg-gray-700/50 hover:cursor-pointer">
        <Bars3Icon className="size-6  " onClick={onIconClick} />
      </div>
    </div>
  );
};
