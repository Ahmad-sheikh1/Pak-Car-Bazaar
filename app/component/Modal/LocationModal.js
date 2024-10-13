"use client"
import Link from 'next/link'
import React from 'react'

const LocationModal = ({ setModal }) => {
    let cities=[
        {
            name:"Karachi",
            image:"",
            slug:`used-cars-in-Karachi`,
        },
        {
            name:"Lahore",
            image:"",
            slug:`used-cars-in-Lahore`,
        },
        {
            name:"Faisalabad",
            image:"",
            slug:`used-cars-in-Faisalabad`,
        },
        {
            name:"Bahawalpur",
            image:"",
            slug:`used-cars-in-Bahawalpur`,
        },
        {
            name:"Hyderabad",
            image:"",
            slug:`used-cars-in-Hyderabad`,
        },
        {
            name:"Multan",
            image:"",
            slug:`used-cars-in-Multan`,
        },
        {
            name:"Gujranwal",
            image:"",
            slug:`used-cars-in-Gujranwal`,
        },
        {
            name:"Rawalpindi",
            image:"",
            slug:`used-cars-in-Rawalpindi`,
        },
        {
            name:"Islamabad",
            image:"",
            slug:`used-cars-in-Islamabad`,
        },
        {
            name:"Gujrat",
            image:"",
            slug:`used-cars-in-Gujrat`,
        },
        {
            name:"Jhang Sadar",
            image:"",
            slug:`used-cars-in-Jhang Sadar`,
        },
    ]
    return (
        <section className={`fixed z-40`}>
            <div onClick={()=>setModal(prv=>!prv)} className={`backdrop-blur-[8px] opacity-[1] bg-[#00000066]  h-full fixed left-0 top-0 w-full`}></div>
            <div className={`xl:w-[60%] w-[80%] xl:left-[20%] left-[10%] h-[80vh] top-[10vh] overflow-y-auto fixed z-20  border border-transparent rounded-xl p-6  bg-[#fff]`}>
                <div className={`flex flex-wrap items-center gap-5`}>
                    <span className="text-lg font-bold text-[#0f0f10]">Select a city</span>
                    <input type="search" placeholder="Secrch for a city" className=" px-2 sm:w-96 w-auto border-none rounded-xl text-[#0f0f10] text-sm outline-none h-11 bg-[#f6f6f6]"/>
                </div>
                <span className="text-xs leading-4 block mt-10 uppercase tracking-[2px] text-[#888]">POPULAR CITIES</span>
                <div className="flex flex-wrap justify-center md:justify-normal mt-6">
                    {
                        cities?.map((city,indx)=>(
                            <Link key={indx} href={`/used-cars`} onClick={()=>setModal(prv=>!prv)}>
                                <div  className="flex flex-col items-center justify-between gap-2 w-28 h-24 bg-[#fff] cursor-pointer text-sm py-5 border border-[#f1f1f1]">
                                    <span className="w-9 h-9">
                                        <img alt="image" src="https://bill.pitc.com.pk/images/companies/fesco/fescoLogo.png" className="w-full h-full"/>
                                    </span>
                                    <span className="text-sm py-1 text-[#172554]">{city.name}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <span className="text-xs leading-4 block mt-10 uppercase tracking-[2px] text-[#888]">MORE CITIES</span>
                <div className="flex flex-wrap  gap-3 mt-6">
                    {
                        cities?.map((city,indx)=>(
                            <Link key={indx} href={city.slug}>
                                <div className="rounded-xl bg-[#f6f6f6] cursor-pointer text-base font-semibold py-2 px-5">
                                    <span className="text-xs text-[#172554]">{city.name}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LocationModal