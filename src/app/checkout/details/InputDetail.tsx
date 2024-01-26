import React from 'react'

interface InputDetailsProps {
    title: string;
    date: string;
    count: number;
    onClick?:()=> void
  };
const InputDetails:React.FC<InputDetailsProps> = ({title, date, count,onClick}) => {
    return (
      <div className="max-w-md mx-auto bg-foundation-white-light shadow-md overflow-hidden md:max-w-2xl font-sf-pro-display px-6">
        <div className="md:flex">
          <div className="p-4">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">{title}</div>
              <button className="text-dark-purple-600 text-base" onClick={onClick}>Edit</button>
            </div>
            <div className="mt-2">
              <div className="text-foundation-blue-dark text-normal font-semibold">Date</div>
              <div className="text-nav-grey">{date}</div>
            </div>
            <div className="mt-2">
              <div className="text-foundation-blue-dark font-semibold">Guests count</div>
              <div className="text-nav-grey">{count} {count === 1 ? 'guest' : 'guests'}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InputDetails;
  
