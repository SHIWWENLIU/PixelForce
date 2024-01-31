import Footer from '@/components/Footer'
import React from 'react'
import Person from './Person'
import MenuItem from './MenuItem';

export default function page() {
  type MenuItem = {
    name: string;
    icon: string; 
  };
  
  const menuItems: MenuItem[] = [
    { name: 'Personal details', icon: './images/profile/personal.svg'},
    { name: 'Settings', icon: './images/profile/settings.svg'},
    { name: 'Payment details', icon: './images/profile/payment.svg'},
    { name: 'FAQ', icon: './images/profile/faq.svg'},
  ];

  return (
    <div>
      <Person username="Lucy Bond" email='lucybond08@gmail.com' avatarSrc='/images/image.png'/>
         <div className='border-b-2 mb-6 pb-2'>
          {menuItems.map((item)=>(
            <MenuItem key={item.name} name={item.name} iconSrc={item.icon}/>
          ))}
         </div>
            <MenuItem name='Switch to hosting' iconSrc='./images/profile/switch.svg'/>
         <Footer/>
    </div>
  )
}
