import React from 'react'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import MessageCard from './MessageCard'
import Avatar from '@/components/Avatar'

export default function page() {
  return (
    <div>
        <SearchBar placeholder='Search messages' icon='./Icons/search.svg'/> 
        
        <div className='flex items-center justify-between px-4'>
          <Avatar src='/./images/chat/chat1.png'/>
          <MessageCard name='Kari Rasamuseen' date='Yesterday' content='Thanks for contacting me'/>
        </div>
          
        <Footer/>
    </div>
  )
}
