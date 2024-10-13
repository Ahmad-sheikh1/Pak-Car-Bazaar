"use client"
import React, { useEffect,useState }from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Heading24 from '../Typography/Heading24';
import { useRouter } from 'next/router';
const NumberVerification = () => {
    const form = useForm();
    let { register, handleSubmit, formState: { errors }, watch } = form;
    let formData = (data) => {
        if (data) {
            console.log(data);
        }
    }
    
    return (
        <form onSubmit={handleSubmit(formData)} className='p-10 md:min-w-[50%]  rounded-xl bg-white flex flex-col gap-4 ' action="">
            <Heading24 className="!text-center">Login to view Account</Heading24>
            <div className='relative'>
                <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._FirstName?.message}</p>
                <input type="number" {...register('_MobileNumber', { required: { value: true, message: "First Name is required" } })} placeholder='Enter Your Mobile Number' className='outline-none mt-4  border bg- rounded-md border-[#888888] w-full h-11 px-4 py-4 text-sm' />
            </div>
            <div className="mt-14 w-full text-center">
                <p className="text-[#888] text-xs">
                    By proceeding, you agree to our <Link className="text-[#172554] underline" href="">terms</Link> and <Link className="text-[#172554] underline" href="">conditions</Link>
                </p>
            </div>
            <div>
                <button className='mt-2 rounded-xl  [#888888] bg-gradient-to-r from-amber-500 to-amber-200 text-[#F7F7F7] w-full    text-sm text-center'>
                    <Link href="/accounts/Login" className="leading-6 py-4 block w-full">
                        Verify Number
                    </Link>
                </button>
            </div>
        </form>
    )
}

export default NumberVerification