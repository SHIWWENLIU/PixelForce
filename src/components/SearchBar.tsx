import React from 'react'
import Image from 'next/image';


type SearchProps = {
    icon: string;
    placeholder: string;
  };
  
const SearchBar: React.FC<SearchProps> = ({ icon, placeholder }) => {
    return (
    <div className="m-4">
      <div className="w-full flex items-center border-2 rounded-full p-4  space-x-2">
         <Image src={icon} alt={icon}  width={22} height={22}/>
        <input
          className="outline-none placeholder-nav-grey flex-grow font-normal text-base"
          type="search"
          placeholder={placeholder}
        />
      </div>
    </div>
    );
  };
  
  export default SearchBar;