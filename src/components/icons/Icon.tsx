import React from "react";

interface IconProps {
  /** Nombre del icono, debe coincidir con el id del símbolo en el sprite SVG */
  name: string;
  /** Tamaño en píxeles (ancho y alto) */
  size?: number;
  /** Color opcional */
  color?: string;
  /** Clase CSS opcional */
  className?: string;
  /** Otros props para el SVG */
  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill={color}
      aria-hidden="true"
      {...props}
    >
      <use xlinkHref={`/assets/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
