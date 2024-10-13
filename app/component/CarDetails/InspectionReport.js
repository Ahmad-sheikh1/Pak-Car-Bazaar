import React from 'react'
import Heading24 from '../Typography/Heading24'

const InspectionReport = () => {

    return (
        <div className="w-full pt-8">
            <Heading24 className={`mb-6`}>Inspection Report</Heading24>
            <div className="border border-[#f1f1f] rounded-lg p-5">
                <ul className="flex flex-wrap items-start">
                    <li className="border-r pt-4 px-4 border-[#f1f1f] w-1/2">
                        <div className="flex items-center py-5 justify-between border-b border-[#f1f1f]">
                            <div className="w-full flex">
                                <span className="block w-5 h-5 overflow-hidden" >
                                    <img className="w-full h-full object-cover " src="https://www.svgrepo.com/show/382122/engine-oil.svg"/>
                                </span>
                                <h4 className="font-bold text-sm text-[#172554] ml-2">Engine & Peripherals</h4>
                            </div>
                            <div className="w-5 h-5">
                                <img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-xs text-[#8888]">{}</h4>
                    </li>
                    <li className="border-r pt-4 px-4 border-[#f1f1f] w-1/2">
                        <div className="flex items-center py-5 justify-between border-b border-[#f1f1f]">
                            <div className="w-full flex">
                                <span className="block w-5 h-5 overflow-hidden" >
                                    <img className="w-full h-full object-cover " src="https://www.svgrepo.com/show/382122/engine-oil.svg"/>
                                </span>
                                <h4 className="font-bold text-sm text-[#172554] ml-2">Interior</h4>
                            </div>
                            <div className="w-5 h-5">
                                <img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-xs text-[#8888]">{}</h4>
                    </li>
                    <li className="border-r pt-4 px-4 border-[#f1f1f] w-1/2">
                        <div className="flex items-center py-5 justify-between border-b border-[#f1f1f]">
                            <div className="w-full flex">
                                <span className="block w-5 h-5 overflow-hidden" >
                                    <img className="w-full h-full object-cover " src="https://www.svgrepo.com/show/382122/engine-oil.svg"/>
                                </span>
                                <h4 className="font-bold text-sm text-[#172554] ml-2">Drivetrain</h4>
                            </div>
                            <div className="w-5 h-5">
                                <img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-xs text-[#8888]">{}</h4>
                    </li>
                    <li className="border-r pt-4 px-4 border-[#f1f1f] w-1/2">
                        <div className="flex items-center py-5 justify-between border-b border-[#f1f1f]">
                            <div className="w-full flex">
                                <span className="block w-5 h-5 overflow-hidden" >
                                    <img className="w-full h-full object-cover " src="https://www.svgrepo.com/show/382122/engine-oil.svg"/>
                                </span>
                                <h4 className="font-bold text-sm text-[#172554] ml-2">Body Structure (Chassis)</h4>
                            </div>
                            <div className="w-5 h-5">
                                <img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-xs text-[#8888]">{}</h4>
                    </li>
                    <li className="border-r pt-4 px-4 border-[#f1f1f] w-1/2">
                        <div className="flex items-center py-5 justify-between border-b border-[#f1f1f]">
                            <div className="w-full flex">
                                <span className="block w-5 h-5 overflow-hidden" >
                                    <img className="w-full h-full object-cover " src="https://www.svgrepo.com/show/382122/engine-oil.svg"/>
                                </span>
                                <h4 className="font-bold text-sm text-[#172554] ml-2">Exterior</h4>
                            </div>
                            <div className="w-5 h-5">
                                <img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-xs text-[#8888]">{}</h4>
                    </li>
                    
                    <li className="border-r pt-4 px-4 border-[#f1f1f] w-1/2">
                        <div className="flex items-center py-5 justify-between  border-[#f1f1f]">
                            <div className="w-full flex">
                                <span className="block w-5 h-5 overflow-hidden" >
                                    <img className="w-full h-full object-cover " src="https://www.svgrepo.com/show/382122/engine-oil.svg"/>
                                </span>
                                <h4 className="font-bold text-sm text-[#172554] ml-2">Wheel & Tyre</h4>
                            </div>
                            
                            <div className="w-5 h-5">
                                <img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-xs text-[#8888]">{}</h4>
                    </li>
                    <li className="border-r pt-4 px-4 border-[#f1f1f] w-1/2">
                        <div className="flex items-center py-5 justify-between  border-[#f1f1f]">
                            <div className="w-full flex">
                                <span className="block w-5 h-5 overflow-hidden" >
                                    <img className="w-full h-full object-cover " src="https://www.svgrepo.com/show/382122/engine-oil.svg"/>
                                </span>
                                <h4 className="font-bold text-sm text-[#172554] ml-2">Mechanical</h4>
                            </div>
                            
                            <div className="w-5 h-5">
                                <img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-xs text-[#8888]">{}</h4>
                    </li>
                
                </ul>
                <div className="flex flex-wrap items-end justify-between px-4 my-5">
                    <div className="flex gap-5 items-end">
                        <div className="flex items-center">
                            <span className="w-3 h-3"><img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/422280/correct-success-tick.svg"/></span>
                            <span className=" ml-2 text-xs text-[#8888] font-bold">Tested OK</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3"><img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/500311/warning.svg"/></span>
                            <span className=" ml-2 text-xs text-[#8888] font-bold">Imperfection</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3"><img className="w-full h-full object-contain " src="https://www.svgrepo.com/show/203313/tools-hammer.svg"/></span>
                            <span className=" ml-2 text-xs text-[#8888] font-bold">Fixed</span>
                        </div>
                    </div>
                    <button className="uppercase text-base font-bold text-[#fff] py-3 px-10 rounded-md hover:bg-[#f59e0b] duration-200 bg-[#172554]"> 
                        View Full Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InspectionReport