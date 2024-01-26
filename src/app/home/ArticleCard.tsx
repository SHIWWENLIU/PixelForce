import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";

interface CardProps {
    imageUrl: string;
    date: string;
    title: string;
    description: string;
  }

  
const ArticleCard: React.FC<CardProps> = ({ imageUrl, date, title, description }) => {
    const [readMore, setReadMore] = useState(false);
    const descriptionRef = useRef(null);
  
    useEffect(() => {
      const descriptionElement = descriptionRef.current as HTMLElement | null;
      if (descriptionElement) {
        const lineHeight = parseInt(getComputedStyle(descriptionElement).lineHeight,10);
        const height = descriptionElement.scrollHeight;
        if (height > lineHeight * 2) { 
          setReadMore(true);
        } else {
          setReadMore(false);
        }
      }
    }, [description]);
    return (
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 font-sf-pro-display">
        <div className="relative w-full h-24">
        <Image 
        className="w-full" 
        layout="fill" 
        objectFit="cover"
        src={imageUrl} 
        alt="article" />
        </div>
        <div className="px-2 py-2">
          <div className="font-semibold text-base mb-2">{title}</div>
          <div ref={descriptionRef} className="text-gray-700 text-medium font-normal line-clamp-2">{description}</div>
        </div>
        {readMore && (
            <div className="px-4 py-1">
            <span className="inline-block text-purple-500 rounded-full text-medium font-semibold mr-2 ">Read more</span>
          </div>
        )}
      </div>
    );
  };
  
  export default ArticleCard;
