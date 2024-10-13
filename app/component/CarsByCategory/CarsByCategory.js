"use client"
import React, { useState } from 'react';
import Container from '../Container/Container'
import NHeading from '../Typography/NHeading'
const CarsByCategory = () => {
    let Cars_By_Category_Data=[
        {
            id:1,
            cat_name:"Body type",
            cat_itms:[
                {
                    id:1,
                    itm_name:"Hatchback",
                    itm_img:"https://fastly-production.24c.in/india/homepage/bodytype/hatchback.png"
                },
                {
                    id:2,
                    itm_name:"SUV",
                    itm_img:"https://fastly-production.24c.in/india/homepage/bodytype/suv.png"
                },
                {
                    id:3,
                    itm_name:"Sedan",
                    itm_img:"https://fastly-production.24c.in/india/homepage/bodytype/sedan.png"
                },
            ]
        },
        {
            id:2,
            cat_name:"Car budget",
            range:["3 Lakh","3 Lakh to 5 Lakh","5 Lakh to 7 Lakh","7 Lakh to 10 Lakh","10 Lakh"]
        },
        {
            id:3,
            cat_name:"Fuel type",
            cat_itms:[
                {
                    id:1,
                    itm_name:"Petrol",
                    itm_img:"https://fastly-production.24c.in/india/homepage/fuel/petrol.png"
                },
                {
                    id:2,
                    itm_name:"Diesel",
                    itm_img:"https://fastly-production.24c.in/india/homepage/fuel/diesel.png"
                },
                {
                    id:3,
                    itm_name:"CNG",
                    itm_img:"https://fastly-production.24c.in/india/homepage/fuel/cng.png"
                },
                {
                    id:4,
                    itm_name:"Electric",
                    itm_img:"https://fastly-production.24c.in/india/homepage/fuel/electric.png"
                },
            ]
        },
        {
            id:4,
            cat_name:"Year",
            range:["2020","2017 to 2019","2012 to 2016","2011"]
        },
    ];
    let [selected_tab,setSelectedTab]=useState("Body type");
  return (
    <section className="w-full py-10 bg-white">
        <Container>
            <NHeading className={`mb-7`}>Cars by Category</NHeading>
            <div className={`w-full flex flex-col gap-y-10 pb-6 px-6 rounded-2xl bg-gradient-to-b from-[#fff] to-[#f59e0b]`}>
                <ul className= {` font-normal text-xl text-[#0f0f10] flex flex-wrap  gap-8`}>
                   {
                    Cars_By_Category_Data?.map((cat,indx)=>(
                        <li key={indx} onClick={(e)=>{
                            setSelectedTab(e.target.innerText)
                        }} className={`${indx} bg-[#fff] rounded-[64px] px-8 py-1 cursor-pointer border border-[#d6d6d6]`}>{cat?.cat_name}</li>
                    ))
                   }
                </ul>
                <div className={`w-full overflow-auto`}>
                    <ul className={`flex flex-wrap gap-5`}>
                       {
                           Cars_By_Category_Data?.map((cat,indx)=>{
                                return(
                                    cat.cat_name===selected_tab && cat.cat_itms?
                                    cat.cat_itms?.map((itm,indx)=>{
                                        return(
                                            <li key={indx} className={`max-w-48 p-6 rounded-xl text-xl bg-[#fff] text-black flex flex-col gap-y-2 justify-center items-center`}>
                                                <span className="w-[123px] h-[46px]">
                                                    <img src={itm.itm_img} alt ="image" className={`w-full h-full object-contain`} />
                                                </span>
                                                <strong className="font-normal ">{itm.itm_name}</strong>
                                            </li>
                                        )
                                    }):
                                    cat.cat_name===selected_tab && cat.range?
                                    cat.range?.map((rng,indx)=>{
                                        return (
                                            <li key={indx} className={`cursor-pointer p-6 rounded-xl text-xl bg-[#fff] text-black flex gap-1 justify-center items-center`}>
                                                <span>
                                                   {
                                                    indx==0?"Under ":
                                                    indx==cat.range.length-1?"Above ":
                                                    "From "
                                                   }
                                                </span>
                                                <span className="font-normal ">{rng}</span>
                                            </li>)
                                    })
                                    :""
                                )
                            })
                       }                        
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}
export default CarsByCategory