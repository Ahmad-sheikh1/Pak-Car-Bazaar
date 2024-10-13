"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
const SignUp = () => {
    const form=useForm();
    let {register,handleSubmit,formState:{errors},watch}=form;
    let formData=(data)=>{
        if(data){
            console.log(data);                   
        }
    }
  return (
    <form onSubmit={handleSubmit(formData)} className='mt-11 flex flex-col gap-4 ' action="">
                        
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._FirstName?.message}</p>
                            <input type="text" {...register('_FirstName',{required:{value:true,message:"First Name is required"}})} placeholder='First Name' className='outline-none mt-4  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._LastName?.message}</p>
                            <input type="text" {...register('_LastName',{required:{value:true,message:"Last Name is required"}})} placeholder='Last Name' className='outline-none mt-4  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._Email?.message}</p>
                            <input type="email" 
                                {...register('_Email',
                                    {
                                        required:{
                                            value:true,
                                            message:"Email is required"
                                        },
                                        validate:{
                                            notAdmin:(fValue)=>{
                                                return (fValue!=="admin@gmail.com" || "Enter Different Email")
                                            }
                                        }
                                    }
                                )}
                                placeholder='Email' className='outline-none mt-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' 
                            />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._Password?.message}</p>
                            <input type="password" 
                                {...register('_Password',
                                    {
                                        required:{value:true,message:"Please Enter Password"}
                                    }
                                )} 
                                placeholder='Password' className='outline-none mt-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' 
                            />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._ConfirmPassword?.message}</p>
                            <input type="password" 
                                {...register('_ConfirmPassword',
                                {
                                    required:{
                                        value:true,
                                        message:"Please Confirm your Password"
                                    },
                                    validate:{
                                        cfirmPass:(fildvalue)=>{
                                        return ( fildvalue===watch("_Password") || "Password not matched")
                                        }
                                    }
                                }
                                )} 
                                placeholder='Confirm Password' className='outline-none mt-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' 
                            />
                        </div>
                        <div>
                            <button className=' rounded-3xl leading-6 [#888888] bg-gradient-to-r from-amber-500 to-amber-200 text-[#F7F7F7] w-full   py-4 text-sm text-center'>
                                Sign Up
                            </button>
                        </div>
                    </form>
  )
}

export default SignUp