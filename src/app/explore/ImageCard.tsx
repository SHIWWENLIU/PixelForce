'use client';

import React from 'react'

import Image from "next/image";
import { useRouter } from "next/navigation";



interface ImageCardProps {
  onAction?: (id: string) => void;
  src: string;
  name: string;
  count?: number;
};

const ImageCard: React.FC<ImageCardProps> = ({
    src,
    name,
    count,
  onAction,
}) => {
  const router = useRouter();


  return (
    <div 
      className="max-w-xs w-40 shrink-0 mx-4 shadow-lg rounded-lg overflow-hidden"
    >
      <div className="flex flex-col gap-2 w-full ">
        <div 
          className="
            aspect-square 
            w-full 
            h-32
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
            "
            src={src}
            alt={src}
          />
        </div>
        <div className="font-semibold pl-4 items-center text-base text-foundation-blue-dark truncate">
          {name}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-normal pl-4 text-nav-grey text-medium">
            {count} rented props
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ImageCard;