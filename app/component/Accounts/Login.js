import React from 'react'
import LoginImage from '../../Assets/LoginImage.svg'
import userSvg from '../../Assets/User.svg'
import OpenEye from '../../Assets/Eye.svg'
import Link from 'next/link'
import { useState } from 'react'
import CloseEye from '../../Assets/closeEye.svg'
const Login = () => {
    let [togglePass,setTogglePass]=useState(false);

  return (
    <>
            <section className=' py-20 w-full  bg-[#f7f7f7]'>
                <div className='max-w-screen-xl lg:px-[90px] sm:px-24 px-4 m-auto '>
                    <div className='flex flex-wrap justify-between items-center'>
                        <div className='sm:w-1/2 w-full'>
                            <img className='' src={LoginImage.src} alt="login" />
                        </div>
                        <div className='sm:w-[41%] w-full'>
                            <div className='login-text'>
                                <h1 className='font-bold text-[64px] text-[#191C29]'>Admin Log In</h1>
                                <p className='mt-3 font-normal text-base text-[#667986]'>Lorem ipsum dolor sit amet adipiscing elit.</p>
                            </div>
                            <form onSubmit={()=>{}} className='mt-11 flex flex-col gap-4' action="">
                                <div className='relative'>
                                    <span className='absolute top-3 right-3 w-5 h-5'>
                                        <img className='object-cover w-full' src={userSvg.src}/>
                                    </span>
                                    <input type="email" name='_Email' placeholder='Email' className='outline-none  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                                </div>
                                <div className='relative'>
                                    <span className='absolute top-3 right-3 w-5 h-5'>
                                        {
                                            togglePass?
                                            <img onClick={()=>setTogglePass(!togglePass)} className='cursor-pointer object-cover w-full' src={CloseEye.src}/>:
                                            <img onClick={()=>setTogglePass(!togglePass)} className='cursor-pointer object-cover w-full' src={OpenEye.src}/>
                                        }
                                    </span>
                                    <input type={!togglePass?"password":"text"} name='_Password' placeholder='Password' className='outline-none  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                                </div>
                                <div className='text-sm font-semibold text-right pb-5 text-blue-600 '>Forget Password?</div>
                                <div>
                                    <button 
                                        // onClick={()=>navigateToDashboard("/Admin Dashboard")}
                                        className=' rounded-3xl leading-6 [#888888] bg-gradient-to-r from-amber-500 to-amber-200 text-[#F7F7F7] w-full   py-4 text-sm text-center'
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <div className='mt-4 justify-center flex font-medium text-sm leading-5 text-[#191C29]'>
                                <p>Don t have account? Let s </p>
                                <Link href="/accounts/signup" 
                                    className='text-[#172554]'
                                >Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Login