'use client';

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant: 'primary' | 'outline' | 'apple' | 'google';
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled=false, 
  variant,
  icon: Icon,
}) => {
    const baseStyles = 'py-2 px-4 mb-2 w-full rounded-full font-md text-center text-base focus:outline-none transition duration-300 relative';
  
    const variantStyles = {
      outline: 'bg-green-gradient text-netural-gray-0 hover:bg-dark-purple-600', // Tailwind classes for outline button
      primary: 'bg-white text-netural-gray-600 hover:opacity-80', // Tailwind classes for primary button
      apple: 'bg-black text-white hover:bg-gray-900', // Tailwind classes for Apple button
      google: 'bg-white text-gray-700 hover:bg-gray-100', // Tailwind classes for Google button
    };
    const disabledStyles = 'opacity-50 cursor-not-allowed';

  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${disabled ? disabledStyles : ''}
      `}
    >
      {Icon && (
         <span className="absolute left-2 inset-y-0 flex items-center justify-center">
        <Icon
          size={24}
        />
        </span>
      )}
      {label}
    </button>
   );
}
 
export default Button;