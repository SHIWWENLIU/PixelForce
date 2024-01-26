import React from 'react';
import { IconType } from 'react-icons';

interface FacilityProps {
  icon: IconType;
  name: string;
  distance?: string;
}

const Facility: React.FC<FacilityProps> = ({ icon: Icon, name, distance }) => {
  return (
    <div className='flex flex-col text-nav-grey'>
        <div className="flex items-center space-x-2">
            <Icon className="text-lg" />
            <div className="font-medium text-base text-foundation-blue-normal font-sf-pro-display">{name}</div>
        </div>
        {distance&&(<div className="text-nav-grey pl-7 text-base font-normal">{distance}</div>)}
    </div>
    
  );
};



export default Facility;
