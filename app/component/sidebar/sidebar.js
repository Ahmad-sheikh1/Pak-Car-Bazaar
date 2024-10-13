import React from 'react'
import PriceRangeSlider from './Range'

const Sidebar = () => {
    let Brands_name=["Maruti Suzuki","Hyundai","Honda","Tata","Renault","Mahindra","Kia","Ford","Volkswagen","Toyota","Skoda","Nissan","Jeep","Datsun","MG Motors","Audi","Mercedes-Benz","Chevrolet","BMW","Land Rover","Citroen","Other Brands","Ferrari","Fiat","Jaguar","Lamborghini","Lexus","Maserati","Maybach","Mini","Mitsubishi","Porsche","Rolls-Royce","Tata EV","Volvo"]
    let Years=["2008","2010","2012","2014","2016","2018","2020","2022","2024"]
    let KMs_driven=["30,000 kms","10,000 kms","50,000 kms","75,000 kms","1,00,000 kms"]
    let Fule_type=["Petrol","Diesel","CNG","Electric"]
    let Body_type=["Hatchback","Sedan","SUV","MUV"]
    let Transmitions=["Automatic","Manual"]
    let Colors=["#ffff35","#fff","#d00","#dbcaa9","#c0c0c0","#000","#999","#1e6fd8","#2daf41","#ff8300"]
  return (
    <div className="w-[30%] h-screen sticky top-0 overflow-y-auto p-3 bg-[#fff] border border-[#e8e8e8] rounded-md">
        <aside className=" top-4 z-50 ">            
            <nav className="flex flex-col transition-all ">
                <div className="Price-Range border-b border-b-[#e8e8e8]">
                    <div className="">
                        <div className="Range-Selector">
                            <PriceRangeSlider/>
                         </div>
                    </div>
                </div>
                <div className="Brands-Models pb-5 border-b border-b-[#e8e8e8]">
                    <p className="lg:text-sm text-xs font-bold mb-5 mt-5 text-[#0f0f10]">Brands + Models</p>
                    <div className="search-bar my-4">
                        <div className="search-bar">
                            <input type="search" placeholder="Search" className=" px-2 w-full border-[#e8e8e8] border rounded-md text-[#0f0f10] text-sm outline-none h-11 bg-[#fff]"/>
                        </div>
                    </div>
                    <span className="text-xs leading-4 block  text-[#acacac]">Top Brands</span>
                    <div className="check-boxes mt-3 max-h-[500px] overflow-y-auto">
                        {
                            Brands_name?.map((brand,indx)=>{
                                return(
                                    <div key={indx} className="flex relative cursor-pointer gap-4 items-center py-3 border-b border-b-[#e8e8e8]">
                                        <div className="w-5 h-5 border border-black">
                                            {
                                            }
                                        </div>
                                        <label className="text-xs font-semibold">{brand}</label>
                                        <span className="absolute right-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" stroke="#2e054e" width="14" height="14" viewBox="0 0 14 8" className=""><path fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M386 48L392 54 398 48" transform="translate(-385 -47)"></path></svg>
                                        </span>
                                    </div>            
                                )
                            })

                        }
                    </div>                       
                </div>
                <div className="Year pb-5 border-b border-b-[#e8e8e8]">
                    <p className="lg:text-sm text-xs font-bold mb-5 mt-5 text-[#0f0f10]">Year</p>
                    <div className="check-circles mt-3 pl-4 overflow-y-auto">
                        {
                            Years?.map((year,indx)=>{
                                return(
                                    <div key={indx} className="flex relative cursor-pointer gap-4 items-center py-3 ">
                                        <div className="w-4 h-4 border rounded-full border-black">
                                            {
                                            }
                                        </div>
                                        <label className="text-xs font-semibold">{year} & above</label>
                                    </div>            
                                )
                            })

                        }
                    </div>                       
                </div>
                <div className="Kms-Driven pb-5 border-b border-b-[#e8e8e8]">
                    <p className="lg:text-sm text-xs font-bold mb-5 mt-5 text-[#0f0f10]">Kms Driven</p>
                    <div className="check-circles mt-3 pl-3 overflow-y-auto">
                        {
                            KMs_driven?.map((KMs,indx)=>{
                                return(
                                    <div key={indx} className="flex relative cursor-pointer gap-4 items-center py-3 ">
                                        <div className="w-4 h-4 border rounded-full border-black">
                                            {
                                            }
                                        </div>
                                        <label className="text-xs font-semibold">{KMs} or Less</label>
                                    </div>            
                                )
                            })

                        }
                    </div>                       
                </div>
                <div className="Fule-type pb-5 border-b border-b-[#e8e8e8]">
                    <p className="lg:text-sm text-xs font-bold mb-5 mt-5 text-[#0f0f10]">Fule Type</p>
                    <div className="check-boxes mt-3 max-h-[500px] overflow-y-auto">
                        {
                            Fule_type?.map((fule,indx)=>{
                                return(
                                    <div key={indx} className="flex relative cursor-pointer gap-4 items-center py-3 border-b border-b-[#e8e8e8]">
                                        <div className="w-5 h-5 border border-black">
                                            {
                                            }
                                        </div>
                                        <label className="text-xs font-semibold">{fule}</label>
                                    </div>            
                                )
                            })

                        }
                    </div>                       
                </div>
                <div className="Body-Type pb-5 border-b border-b-[#e8e8e8]">
                    <p className="lg:text-sm text-xs font-bold mb-5 mt-5 text-[#0f0f10]">Body Type</p>
                    <div className="check-boxes mt-3 max-h-[500px] overflow-y-auto">
                        {
                            Body_type?.map((body_,indx)=>{
                                return(
                                    <div key={indx} className="flex relative cursor-pointer gap-4 items-center py-3 border-b border-b-[#e8e8e8]">
                                        <div className="w-5 h-5 border border-black">
                                            {
                                            }
                                        </div>
                                        <label className="text-xs font-semibold">{body_}</label>
                                    </div>            
                                )
                            })

                        }
                    </div>                       
                </div>
                <div className="Trnasmition pb-5 border-b border-b-[#e8e8e8]">
                    <p className="lg:text-sm text-xs font-bold mb-5 mt-5 text-[#0f0f10]">Transmission</p>
                    <div className="check-boxes mt-3 max-h-[500px] overflow-y-auto">
                        {
                            Transmitions?.map((Transmition,indx)=>{
                                return(
                                    <div key={indx} className="flex relative cursor-pointer gap-4 items-center py-3 border-b border-b-[#e8e8e8]">
                                        <div className="w-5 h-5 border border-black">
                                            {
                                            }
                                        </div>
                                        <label className="text-xs font-semibold">{Transmition}</label>
                                    </div>            
                                )
                            })

                        }
                    </div>                       
                </div>
                <div className="Colors pb-5 border-b border-b-[#e8e8e8]">
                    <p className="lg:text-sm text-xs font-bold mb-5 mt-5 text-[#0f0f10]">Colors</p>
                    <div className="Colors flex flex-wrap  gap-3 mt-3 overflow-y-auto">
                        <div className={`w-10 h-10 bg-[#ffff35] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#fff] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#d00] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#dbcaa9] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#c0c0c0] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#000] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#999] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#1e6fd8] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#2daf41] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#ff8300] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#114511] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                        <div className={`w-10 h-10 bg-[#ecc090] rounded-md border-[0.5px] border-[#e8e8e8]"`}></div>        
                    </div>                       
                </div>
            </nav>
        </aside>
    </div>
  )
}

export default Sidebar