'use client';

import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";


interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  icon?: JSX.Element;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text", 
  disabled, 
  register,
  required,
  errors,
  icon
}) => {
  return (
    <div className="flex flex-col">
        {label && <label className="mb-2 text-base font-medium">{label}</label>}
    <div className="w-full relative flex items-center">
         {icon && <div className="icon-container absolute left-2 p-1">{icon}</div>}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          w-full
          py-2
          pl-8
          text-base
          font-normal
          bg-custom-white
          text-foundation-blue-dark
          border
          rounded-full
          focus:outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          focus:border-purple-500
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
      />
    </div>
    </div>
   );
}
 
export default Input;