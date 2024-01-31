'use client'
import React from 'react'
import Facility from './Facility'
import Image from "next/image";
import { useRouter } from "next/navigation";

import { RiHospitalFill, RiTrainFill } from 'react-icons/ri';
import { MdLocalGroceryStore, MdRestaurant } from 'react-icons/md';
import { FaSnowflake, FaParking, FaWifi } from 'react-icons/fa';
import { IoMdRestaurant } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import Button from '@/components/Button';

export default function PropertyPage() {
    const router = useRouter();
    const NearFacilityList = () => {
        const nearFacilityList = [
          { icon: MdLocalGroceryStore, name: 'Minimarket', distance: '200m' },
          { icon: RiHospitalFill, name: 'Hospital', distance: '130m' },
          { icon: MdRestaurant, name: 'Public canteen', distance: '400m' },
          { icon: RiTrainFill, name: 'Train station', distance: '500m' },
        ];
      
        return (
          <div className="grid grid-cols-2 gap-2">
            {nearFacilityList.map((facility, index) => (
              <Facility key={index} icon={facility.icon} name={facility.name} distance={facility.distance} />
            ))}
          </div>
        );
      };
    const HomeFacilityList = () => {
        const homeFacilityList = [
            { icon: FaSnowflake, name: 'Air conditioner' },
            { icon: IoMdRestaurant, name: 'Kitchen' },
            { icon: FaParking, name: 'Free parking' },
            { icon: FaWifi, name: 'Free WiFi' },
        ];
      
        return (
          <div className="space-y-2">
            {homeFacilityList.map((facility, index) => (
              <Facility key={index} icon={facility.icon} name={facility.name}/>
            ))}
          </div>
        );
      };
      const onClick=()=>{
        router.back();
      }
  return (
    <div className='font-sf-pro-display'>
        <div className='relative'>
            <button
                onClick={onClick}
                className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-lg focus:outline-none"
                >
                <IoArrowBack className="text-gray-800" />
            </button>
            <div className="w-full h-48 relative">
                <Image
                src="/images/saved/save1.png"
                layout="fill"
                className="object-center"
                alt="Image"
                />
            </div>
        </div>
        <div className="flex justify-between p-4 shadow-md">
            <div className="flex-1 text-lg font-semibold pr-8">Entire Bromo mountain view Cabin in Surabaya</div>
            
            <div className='flex-shrink-0 p-2'>
            <Image className='rounded-full' alt='heart' src='/Icons/heart.svg' width={20} height={20}/>
            </div>
               
          </div>
        
        <div className='my-4 ml-2 text-lg'>
            Home facilities
        </div>
        <div className=' ml-2'>
        <HomeFacilityList/>
        </div>
        <div className='my-4 ml-2 text-lg'>
            Nearest public facilities
        </div>
        <div className=' ml-2'>
        <NearFacilityList/>
        </div>
    <div className="flex justify-between items-center p-4 border-t border-gray-200">
      <div  className="flex-1">
        <p className="text-normal font-semibold">$2,700</p>
        <p className="text-medium text-gray-500">Payment estimation</p>
      </div>
      <div className='flex-auto'>
      <Button label='Rent' onClick={()=>{router.push('/checkout')}} variant='outline'/>
      </div>
     
    </div>
    </div>
  )
}
