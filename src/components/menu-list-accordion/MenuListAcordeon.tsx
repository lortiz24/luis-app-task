import React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { MenuListAccordionItem } from './MenuListAccordionItem';

interface ListItem {
  id: string;
  title: string;
}

interface MenuListAcordeonProps {
  title: string;
  lists: ListItem[];
  visibleLists: string[]; // IDs de listas visibles
  onToggleList: (id: string) => void; // Cambia visibilidad de la lista
}

export const MenuListAcordeon: React.FC<MenuListAcordeonProps> = ({
  title,
  lists,
  visibleLists,
  onToggleList,
}) => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="px-4">
      <button
        className="flex items-center justify-between w-full py-2 text-left text-text font-semibold hover:cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{title}</span>
        <span className="hover:bg-gray-700 rounded-full p-1">
          {open ? (
            <ChevronUpIcon className="w-5 h-5 text-text" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-text" />
          )}
        </span>
      </button>
      {open && (
        <div className="flex flex-col gap-1 mt-1">
          {lists.map((list) => (
            <MenuListAccordionItem
              key={list.id}
              id={list.id}
              title={list.title}
              checked={visibleLists.includes(list.id)}
              onToggle={onToggleList}
            />
          ))}
        </div>
      )}
    </div>
  );
};
