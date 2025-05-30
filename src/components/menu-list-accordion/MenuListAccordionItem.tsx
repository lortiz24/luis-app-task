import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/16/solid';

interface MenuListAccordionItemProps {
  id: string;
  title: string;
  checked: boolean;
  onToggle: (id: string) => void;
}

export const MenuListAccordionItem: React.FC<MenuListAccordionItemProps> = ({
  id,
  title,
  checked,
  onToggle,
}) => (
  <div className="flex items-center gap-2 py-1 rounded-lg text-text hover:bg-gray-700/50 px-4">
    <button
      className="hover:cursor-pointer"
      type="button"
      aria-label={checked ? 'Ocultar lista' : 'Mostrar lista'}
      onClick={() => onToggle(id)}
    >
      {checked ? (
        <CheckCircleIcon className="w-5 h-5 text-primary" />
      ) : (
        <span className="w-5 h-5 rounded-full border-2 border-primary block"></span>
      )}
    </button>
    <span>{title}</span>
  </div>
);
