import React from 'react'
import Heading24 from '../Typography/Heading24'

const CarSpecifications = () => {
    let Specifications=[
        {
            title:"Mileage (ARAI)",
            value:"17.1 kmpl",
            image:"https://spn-sta.spinny.com/spinny-web/oth/Xukf8VUvThKPAtKCznDu1Q/raw/file.svg?q=85&w=32px",
        },
        {
            title:"Ground clearance",
            value:"178 mm",
            image:"https://spn-sta.spinny.com/spinny-web/oth/o4jJ7xSCSp%2B9zvx%2BMqnfYQ/raw/file.svg?q=85&w=32px",
        },
        {
            title:"Boot space",
            value:"408 litres",
            image:"https://spn-sta.spinny.com/spinny-web/oth/aRWGv%2B21RVqenLXu5x_p6g/raw/file.svg?q=85&w=32px",
        },
        {
            title:"Seating capacity",
            value:"5 units",
            image:"https://spn-mda.spinny.com/oth/2WIVcokVRHyfPZNnXK9cGw/raw/file.svg?q=85&w=32px",
        },
        {
            title:"Fuel tank capacity",
            value:"60 litres",
            image:"https://spn-sta.spinny.com/spinny-web/oth/WrTNIFNyS_uUh6yF8faTDw/raw/file.svg?q=85&w=32px",
        },
        {
            title:"Displacement",
            value:"1368 cc",
            image:"https://spn-sta.spinny.com/spinny-web/oth/04w8db2kTcO5PhEUtdQx4A/raw/file.svg?q=85&w=32px",
        },
    ]
  return (
    <div className="w-full pt-8">
    <Heading24 className={`mb-6`}>Car Specifications</Heading24>
    <div className="border border-[#f1f1f] rounded-lg p-5">
        <ul className="flex flex-wrap items-start">
            {
                Specifications?.map((spevification,indx)=>(
                    <li key={indx} className="flex border-b py-4 border-[#f1f1f] w-1/3">
                        <span className="w-8 h-8 mr-4">
                            <img className="w-full h-full object-contain" src={spevification.image}/>
                        </span>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-xs text-[#8888]">{spevification.title}</h4>
                            <h4 className="font-bold text-sm text-[#172554]">{spevification.value}</h4>
                        </div>
                    </li>
                ))
            }
        </ul>
        <div className="pt-10 text-right">
            <button className=" uppercase text-base border border-[#172554] font-bold text-[#172554] py-3 px-10 rounded-md hover:bg-[#f59e0b] hover:text-[#fff] hover:border-[#f59e0b] duration-200 bg-[#fff]"> 
                View All Specification
            </button>
        </div>
    </div>
</div>
  )
}

export default CarSpecifications