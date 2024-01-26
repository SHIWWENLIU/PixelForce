import React from 'react'
import Image from 'next/image';

interface PersonProps {
        username: string;
        email: string;
        avatarSrc: string;
      
}
const Person: React.FC<PersonProps> = ({ username, email, avatarSrc }) => {
    return (
      <div className="flex flex-col items-center bg-white p-6 shadow rounded-lg">
        <div className="relative w-20 h-20 my-4 rounded-full overflow-hidden">
          <Image src={avatarSrc} alt={`${username}'s avatar`} layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-2xl font-semi-bold">{username}</h1>
        <p className="text-normal text-nav-grey">{email}</p>
      </div>
    );
  };

  export default Person;