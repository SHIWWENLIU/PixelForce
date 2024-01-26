import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";



interface CardProps {
  imageUrl: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, location, rating, reviewCount, price }) => {
    const router = useRouter();
    return (
    <div className="max-w-md mx-4 rounded-xl shadow-md overflow-hidden sm:max-w-full ">
      <div className="sm:flex">
        <div className="sm:flex-shrink-0">
          <div className="h-48 w-full object-cover sm:w-28 relative">
            <Image
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              alt="image"
            />
          </div>
        </div>
        <div className="p-4 font-sf-pro-display" onClick={()=>router.push('/home/property')}>
          <p className="mt-1 text-foundation-blue-dark text-small font-normal">{`${rating} (${reviewCount} reviews)`}</p>    
          <div className="uppercase mt-2 tracking-wide text-foundation-blue-dark text-base font-normal">{title}</div>
          <a href="#" className="block mt-1 text-lg leading-tight text-small font-normal text-nav-grey">{location}</a>
          <p className="mt-4 text-foundation-blue-dark font-bold">{`${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
