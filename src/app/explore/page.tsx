import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'


const getTrip= async ()=>{
  
  const res = await fetch('https://pfx-interview.s3.ap-southeast-2.amazonaws.com/trips.json')
    
  if(res.ok) return res.json();
   
}
const ExplorePage = async () => {
  const tripList = await getTrip();
  return (
    <div className='font-sf-pro-display'>
      
      <SearchBar placeholder='Search address,city,location' icon='./Icons/search.svg'/> 
      <div className="text-lg font-semibold mb-2 pl-6">Find your next trips</div>
        <div className="flex overflow-x-auto space-x-4 p-4 whitespace-nowrap">
          {tripList.map((item: { name: string | ''; image: string; rented_props_count: number | undefined }) => (
            <ImageCard
            key={item.name}
            src={item.image}
            name={item.name}
            count={item.rented_props_count}
            />
          ))}
        </div>
      <Footer/>
    </div>
  )
}
export default ExplorePage;