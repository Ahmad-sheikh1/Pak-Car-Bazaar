import React from 'react'
import Heading24 from '../Typography/Heading24'

const ReasonToBuy = () => {
  return (
    <div className="w-full pt-8">
        <Heading24 className={`mb-6`}>Reasons to buy</Heading24>
        <ul className="flex flex-col w-3/4 ">
            <li className="flex items-start border-b border-[#f1f1f] py-3">
                <span className="w-8 h-8 mr-4"><img className="w-full h-full object-cover" src="https://mda.spinny.com/sp-file-system/public/2024-09-03/140080ce08d74bdc904b9f0f0db13af0/raw/top_variant.svg.svg?q=85&w=32"/></span>
                <div className="flex flex-col">
                    <h5 className="text-sm font-semibold  leading-6">Premium variant</h5>
                    <h5 className="text-[12px] text-[#8888] font-semibold mb-1 leading-6">Fully loaded variant offering the best of features</h5>
                </div>
            </li>
            <li className="flex items-start border-b border-[#f1f1f] py-3">
                <span className="w-8 h-8 mr-4"><img className="w-full h-full object-cover" src="https://mda.spinny.com/sp-file-system/public/2024-07-02/b3bfdc74599d446abbd6b743d405a734/raw/Frame%2022362.svg.svg?q=85&w=32"/></span>
                <div className="flex flex-col">
                    <h5 className="text-sm font-semibold  leading-6">2 new tyres</h5>
                    <h5 className="text-[12px] text-[#8888] font-semibold mb-1 leading-6">New tyres for a reduced ownership cost</h5>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ReasonToBuy