'use client'
import React from 'react';

interface BarProps {
  activeTab: 'rent' | 'buy';
  onTabChange: (tab: 'rent' | 'buy') => void;
}

const SwitchBar: React.FC<BarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-2 p-2 m-4 border-netural-border-color rounded-full overflow-hidden text-base">
      <button
        className={`flex-1 p-2 rounded-full ${activeTab === 'rent' ? 'bg-green-gradient text-foundation-white-light' : 'text-nav-grey'}`}
        onClick={() => onTabChange('rent')}
      >
        I need to rent
      </button>
      <button
        className={`flex-1 p-2 rounded-full ${activeTab === 'buy' ? 'bg-green-gradient text-foundation-white-light' : 'text-nav-grey'}`}
        onClick={() => onTabChange('buy')}
      >
        I need to buy
      </button>
    </div>
  );
};

export default SwitchBar;
