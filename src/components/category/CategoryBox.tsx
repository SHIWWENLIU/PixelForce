'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Image from 'next/image';
import Link from 'next/link';

interface CategoryBoxProps {
  href: string,
  label: string;
  icon: string; 
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon,
  href,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    // if (params) {
    //   currentQuery = qs.parse(params.toString())
    // }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    // const url = qs.stringifyUrl({
    //   url: '/',
    //   query: updatedQuery
    // }, { skipNull: true });

    router.push(href);
  }, [label, router, params]);

  return ( 
    <div
      onClick={handleClick}
      className={`
        ${selected ? 'border-purple-500' : 'border-nav-grey'}
        ${selected ? 'text-purple-500' : 'text-nav-grey'}
      `}
    >
      <Link href={href} key={label}>
          <div key={label} className="flex flex-col items-center space-y-1">
          <Image src={icon} alt={label}  width={25} height={24}
         />
          <span className={`font-semi-bold text-small ${selected ? 'text-green-gradient' : 'text-nav-grey'}`}>{label}</span>
          </div>
        </Link>
    </div>
   );
}
 
export default CategoryBox;