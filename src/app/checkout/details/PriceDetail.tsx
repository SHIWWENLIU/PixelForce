import React from 'react'

interface PriceDetailProps {
    title: string;
    duraitonFee: string;
    serviceFee?: string;
    totalPrice:string;
    onClick?:()=> void
  };
const PriceDetail:React.FC<PriceDetailProps> = ({title, duraitonFee, serviceFee,totalPrice,onClick}) => {
    return (
      <div className="max-w-md mx-auto bg-foundation-white-light  overflow-hidden md:max-w-2xl font-sf-pro-display px-10 pt-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">{title}</div>
        <button className="text-dark-purple-600 text-base">More info</button>
      </div>
      <div className="flex justify-between items-center py-2 text-nav-grey font-normal">
        <div>Staying duration</div>
        <div>{duraitonFee}</div>
      </div>
      {serviceFee && 
      (<div className="flex justify-between items-center py-2 text-nav-grey font-normal">
        <div>Service fee</div>
        <div>{serviceFee}</div>
      </div>)}
      <div className="flex justify-between items-center pt-2 font-semibold">
        <div>Total price</div>
        <div className='text-dark-purple-600'>{totalPrice}</div>
      </div>
    </div>
    );
  };
  
  export default PriceDetail;
  
