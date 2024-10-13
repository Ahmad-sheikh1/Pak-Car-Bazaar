import React from 'react'
import Heading24 from '../Typography/Heading24'

const CarOverview = () => {
    let CarOverview=[
        {
            title:"Make Year",
            value:"Feb 2022",
        },
        {
            title:"Registration Year",
            value:"Apr 2022",
        },
        {
            title:"Fuel Type",
            value:"petrol",
        },
        {
            title:"Km driven",
            value:"23K km",
        },
        {
            title:"Transmission",
            value:"automatic (DCT)",
        },
        {
            title:"No. of Owner",
            value:"1st Owner",
        },
        {
            title:"Insurance Validity",
            value:"Oct 2025",
        },
        {
            title:"Insurance Type",
            value:"Comprehensive",
        },
        {
            title:"RTO",
            value:"UP14",
        },
        {
            title:"Car Location",
            value:"Sector-27, Faridabad",
        },
    ]
    return (
        <div className="w-full pt-8">
            <Heading24 className={`mb-6`}>Car Overview</Heading24>
            <div className="border border-[#f1f1f] rounded-lg p-5">
                <ul className="flex flex-wrap items-start">
                    {
                        CarOverview?.map((OVF,indx)=>(
                            <li key={indx} className="flex flex-col border-b py-4 border-[#f1f1f] w-1/3">
                                <h4 className="font-bold text-xs text-[#8888]">{OVF.title}</h4>
                                <h4 className="font-bold text-sm text-[#172554]">{OVF.value}</h4>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default CarOverview