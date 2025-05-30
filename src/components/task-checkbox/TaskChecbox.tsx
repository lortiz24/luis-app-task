import React from 'react';
import { CheckIcon, CheckCircleIcon } from '@heroicons/react/16/solid';

interface TaskCheckboxProps {
  checked: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  animating?: boolean;
  size?: number;
}

export const TaskCheckbox: React.FC<TaskCheckboxProps> = ({
  checked,
  onClick,
  animating = false,
  size = 20,
}) => {
  return (
    <button
      className="cursor-pointer group relative w-7 h-7 flex items-center justify-center transition-all duration-200"
      onClick={onClick}
      tabIndex={-1}
      type="button"
    >
      {!checked ? (
        <>
          <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
            <span className={`w-${size / 4} h-${size / 4} border-2 border-gray-400 rounded-full block`} />
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <CheckIcon className={`w-${size / 4} h-${size / 4}`} />
          </span>
        </>
      ) : (
        <span
          className={`absolute inset-0 flex items-center justify-center text-primary-50 ${
            animating ? 'animate-rubber-band' : ''
          }`}
        >
          <CheckCircleIcon className={`w-${size / 4} h-${size / 4}`} />
        </span>
      )}
    </button>
  );
};
