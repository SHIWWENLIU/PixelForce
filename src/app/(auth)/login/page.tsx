'use client'
import Button from '@/components/Button'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Input from '@/components/Input';
import UserIcon from '@/components/UserIcon';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import PassIcon from '@/components/PassIcon';
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      password: ''
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toast.success("success logged in")
    router.push('/home')
    //ToDo: add auth check
    // axios.post('/api/register', data)
    // .then(() => {
    //   toast.success('Registered!');
    // })
    // .catch((error) => {
    //   toast.error(error);
    // })
  }
  return (
        <div className="min-h-screen bg-foundation-white-light-hover flex flex-col justify-center items-center px-4">
          <button
            onClick={() => router.back()}
            className="absolute top-0 left-0 m-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="90" viewBox="0 0 20 20" fill="none">
              <path d="M12.4999 17.225C12.3416 17.225 12.1832 17.1667 12.0582 17.0417L6.6249 11.6083C5.74157 10.725 5.74157 9.27501 6.6249 8.39168L12.0582 2.95835C12.2999 2.71668 12.6999 2.71668 12.9416 2.95835C13.1832 3.20002 13.1832 3.60002 12.9416 3.84168L7.50824 9.27502C7.10824 9.67502 7.10824 10.325 7.50824 10.725L12.9416 16.1583C13.1832 16.4 13.1832 16.8 12.9416 17.0417C12.8166 17.1583 12.6582 17.225 12.4999 17.225Z" fill="#1A1E25"/>
            </svg>
          </button>
          <div className="bg-foundation-white-light-hover p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="leading-tight text-large font-bold mb-4 font-sf-pro-display text-foundation-blue-dark">Welcome Back</h1>
            <p className="mb-8 text-nav-grey text-medium font-normal font-sf-pro-display">Log In to your Placoo account to explore your dream place to live across the whole world!</p>
            
            <form className="space-y-4 font-sf-pro-display" onSubmit={handleSubmit(onSubmit)}>
              <Input label="Username" id="name" register={register} errors={errors} icon={<UserIcon />}/>
              <Input label="Password" id="password" type="password" register={register} errors={errors} icon={<PassIcon />}/>
              <Button label="Log in" variant="outline" onClick={() => {}} />
            </form>
    
            <div className="my-4 flex flex-col items-center justify-between">
              <a href="#" className="text-medium text-nav-grey hover:underline mb-8">Forgot password?</a>
              <span className="p-2 text-custom-purple text-small">OR</span>
            </div>
    
            <Button label="Sign in with Apple" variant="apple" icon={FaApple} onClick={()=>{}} />
            <Button label="Sign in with Google" variant="google" icon={FcGoogle} onClick={() => {}} />
          </div>
        </div>
    
    
    
  )
}
