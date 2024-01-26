'use client'
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4  font-sf-pro-display">
    <div className="grid grid-cols-2 gap-4 mb-8">
    {/* Map through your images and display them here */}
    {/* This is a placeholder for your images */}
    {/* <img src="/path-to-your-image.jpg" alt="Home" className="rounded-lg" /> */}
    {/* Repeat the above line for each image you have */}
  </div>
  <div className="text-center p-4">
    <h1 className="text-foundation-blue-dark  text-center text-large font-semi-bold leading-tight p-2">New Place, New Home!</h1>
    <p className="text-nav-grey text-base font-normal">Are you ready to uproot and start over in a new area? Placoo will help you on your journey!</p>
  </div>
    <div className="w-full max-w-xs">
    <Link href='/login'>
      <Button variant="outline" label="Log in" onClick={()=>{}} />
    </Link>
    <Link href='/signup'>
    <Button variant="primary" label="Sign up" onClick={()=>{}} />
    </Link>
  </div>
</div>
  );
}
