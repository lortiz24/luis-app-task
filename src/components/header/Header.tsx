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
      <Bars3Icon className="size-6 hover:cursor-pointer" onClick={onIconClick} />
    </div>
  );
};
