'use client'
import Footer from '@/components/Footer'
import {useState} from 'react'
import SwitchBar from './SwitchBar'
import ArticleCard from './ArticleCard';
import Card from '../saved/Card';
import SearchBar from '@/components/SearchBar';


export default function HomePage() {
    const [activeTab, setActiveTab] = useState<'rent' | 'buy'>('rent');
    const handleTabChange = (tab: 'rent' | 'buy') => {
        setActiveTab(tab);
      };
  return (
    <div className='font-sf-pro-display'>
        <div className="pb-14 min-h-screen">
        <SearchBar placeholder='Search address, city, location' icon='./Icons/search.svg'/> 
        <div className="text-lg font-semibold mb-2 pl-6">What do you need?</div>
        <SwitchBar activeTab={activeTab} onTabChange={handleTabChange}/>
        <div className="text-lg font-semibold mb-2 pl-6">Near your location</div>
        <Card
        imageUrl="/images/saved/save1.png"
        title="Entire Bromo mountain view Cabin in Surabaya"
        location="Malang, Probolinggo"
        rating={4.8}
        reviewCount={73}
        price="$1,290"
      />
        <div className="text-lg font-semibold my-2 pl-6">Travel tips for you</div>
            <ArticleCard 
            title='Learn more about Surabaya’s Ecosystem in 2022'
            date='Saturday, November 10, 2021'
            description='Surabaya as the second largest city in Indonesia has very high dynamics of land '
            imageUrl='/images/article/article1.png' 
            />
        </div>
        <Footer/>
    </div>
  )
}
