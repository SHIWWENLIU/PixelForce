'use client'

import { usePathname } from 'next/navigation';
import React from 'react'
import CategoryBox from './category/CategoryBox';

export default function Footer() {
    type CateItem = {
        label: string;
        icon: string; 
        href:string
      };
      
      const categoryItems: CateItem[] = [
        { label: 'Home', icon: './Icons/home.svg', href:'/home' },
        { label: 'Explore', icon: './Icons/explore.svg', href:'/explore'},
        { label: 'Chat', icon: './Icons/chat.svg',href:'/chat' },
        { label: 'Saved', icon: './Icons/saved.svg', href:'/saved' },
        { label: 'Profile', icon: './Icons/profile.svg', href:'/profile'},
      ];

      const pathname = usePathname();
    return (
        <div className="fixed inset-x-0 bottom-0 bg-foundation-white-light-hover shadow-lg p-4 flex justify-between items-center">
        {categoryItems.map((item) => (
            <CategoryBox key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            selected={pathname === item.href}
            />
        
        ))}
      </div>
  )
}
