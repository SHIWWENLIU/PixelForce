'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import InputDetails from './details/InputDetail';
import PriceDetail from './details/PriceDetail';
import Button from '@/components/Button';
import Card from '../saved/Card';


export default function RentPage() {
    const router = useRouter();
  return (
    <div className='bg-foundation-white-light-hover'>
        <div className="flex items-center px-4 py-2">
            <button className="mr-4" onClick={()=>{router.back()}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="90" viewBox="0 0 20 20" fill="none">
                    <path d="M12.4999 17.225C12.3416 17.225 12.1832 17.1667 12.0582 17.0417L6.6249 11.6083C5.74157 10.725 5.74157 9.27501 6.6249 8.39168L12.0582 2.95835C12.2999 2.71668 12.6999 2.71668 12.9416 2.95835C13.1832 3.20002 13.1832 3.60002 12.9416 3.84168L7.50824 9.27502C7.10824 9.67502 7.10824 10.325 7.50824 10.725L12.9416 16.1583C13.1832 16.4 13.1832 16.8 12.9416 17.0417C12.8166 17.1583 12.6582 17.225 12.4999 17.225Z" fill="#1A1E25"/>
                </svg>
            </button>
            <span className="text-xl font-semibold">Rent booking</span>
         </div>  
         <Card
        imageUrl="/images/saved/save1.png"
        title="Entire Bromo mountain view Cabin in Surabaya"
        location="Malang, Probolinggo"
        rating={4.8}
        reviewCount={73}
        price="$1,290"
        />
        <InputDetails title='Input Details' date='11 Nov - 5 Dec' count={1}/>
        <PriceDetail title='Price Details' duraitonFee='$2,360' serviceFee='$200' totalPrice='$2,460'/>
        <div className='p-6'>
        <Button label='Place Booking request' variant='outline' onClick={()=>{}}/>
        </div>
        
    </div>
  )
}
