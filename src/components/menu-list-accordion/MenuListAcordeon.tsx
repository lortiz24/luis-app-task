import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon, CheckIcon } from '@heroicons/react/16/solid';
import { MenuLink } from '../menu-link/MenuLink';

interface ListItem {
  id: string;
  title: string;
  to: string;
}

interface MenuListAcordeonProps {
  title: string;
  lists: ListItem[];
}

export const MenuListAcordeon: React.FC<MenuListAcordeonProps> = ({ title, lists }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-left text-text font-semibold"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{title}</span>
        {open ? (
          <ChevronUpIcon className="w-5 h-5 text-text" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-text" />
        )}
      </button>
      {open && (
        <div className="flex flex-col gap-1 mt-1">
          {lists.map((list) => (
            <MenuLink
              key={list.id}
              title={list.title}
              to={list.to}
              leftIcon={<CheckIcon className="text-white w-5 h-5" />}
              className="pl-2"
            />
          ))}
        </div>
      )}
    </div>
  );
};
