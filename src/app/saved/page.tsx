'use client'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import React from 'react'
import Card from './Card'

export default function page() {
  return (
    <div>
      <SearchBar placeholder='Search saved properties' icon='./Icons/search.svg'/> 
      
      <Card
        imageUrl="/./images/saved/save1.png"
        title="Entire Bromo mountain view Cabin in Surabaya"
        location="Malang, Probolinggo"
        rating={4.8}
        reviewCount={73}
        price="$1,290"
      />
      <Footer/></div>
  )
}
