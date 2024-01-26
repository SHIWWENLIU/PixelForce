import React from 'react'
import Image from 'next/image';

interface MenuItem {
    name: string;
    iconSrc: string;
    action?: () => void;
  }
const MenuItem: React.FC<MenuItem> =( { name, iconSrc, action }) =>{


  return (
    <div className="pl-4">
        <button
            key={name}
            className="flex items-center w-full p-2 hover:bg-gray-100 focus:outline-none"
            onClick={action}
          >
            <Image src={iconSrc} alt={name} width={22} height={22} />
            <span className="ml-3 text-base font-medium text-foundation-blue-dark">{name}</span>
          </button>
    </div>
  )
}
export default MenuItem;
