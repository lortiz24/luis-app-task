import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuLinkProps {
  title: string;
  to: string;
  leftIcon?: React.ReactNode;
  className?: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  title,
  to,
  leftIcon,
  className = '',
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-2 px-4 py-1 cursor-pointer
        text-primary transition-colors rounded-3xl
        ${isActive ? 'bg-primary-50/40 font-semibold' : 'hover:bg-gray-700/50'}
        ${className}
        `
      }
    >
      {leftIcon && <span className="w-5 h-5 flex items-center">{leftIcon}</span>}
      <span>{title}</span>
    </NavLink>
  );
};
