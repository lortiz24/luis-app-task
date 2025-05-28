import React from 'react';
import { ChevronUpIcon, ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/16/solid';

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
    <div className='px-4'>
      <button
        className="flex items-center justify-between w-full  py-2 text-left text-text font-semibold hover:cursor-pointer "
        onClick={() => setOpen((o) => !o)}
      >
        <span>{title}</span>
        {open ? (
          <span className="hover:bg-gray-700 rounded-full p-1">
            <ChevronUpIcon className="w-5 h-5 text-text" />
          </span>
        ) : (
          <span className="hover:bg-gray-700 rounded-full p-1">
            <ChevronDownIcon className="w-5 h-5 text-text" />
          </span>
        )}
      </button>
      {open && (
        <div className="flex flex-col gap-1 mt-1 ">
          {lists.map((list) => {
            const isVisible = visibleLists.includes(list.id);
            return (
              <div
                key={list.id}
                className="flex items-center gap-2  py-1 rounded-lg  text-text"
              >
                <button
                className='hover:cursor-pointer'
                  type="button"
                  aria-label={isVisible ? 'Ocultar lista' : 'Mostrar lista'}
                  onClick={() => onToggleList(list.id)}
                >
                  {isVisible ? (
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                  ) : (
                    <span className="w-5 h-5 rounded-full border-2 border-primary block"></span>
                  )}
                </button>
                <span>{list.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
