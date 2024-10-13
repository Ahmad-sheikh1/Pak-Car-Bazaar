import React from 'react'
import Heading24 from '../Typography/Heading24'

const Benifits = () => {
    let Benifits=[
        {
            title:"Up to1 year warranty",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/Banners/banner/SpinnyBudgetBanner/assets/warranty-max.svg?q=85&w=128&dpr=1.3",        
        },
        {
            title:"250-points inspected",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/Banners/banner/SpinnyBudgetBanner/assets/points-max.svg?q=85&w=128&dpr=1.3",        
        },
        {
            title:"5-day money back",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/Banners/banner/SpinnyBudgetBanner/assets/money-back-max.svg?q=85&w=128&dpr=1.3",        
        },
        {
            title:"Fixed price assurance",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/Banners/banner/SpinnyBudgetBanner/assets/fixed-price-max.svg?q=85&w=128&dpr=1.3",        
        },
        {
            title:"Roadside assistance",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/Banners/banner/SpinnyBudgetBanner/assets/assistance-max.svg?q=85&w=160&dpr=1.3",        
        },
        {
            title:"Buyback guarantee",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/Banners/banner/SpinnyBudgetBanner/assets/buyback-disabled.svg?q=85&w=128&dpr=1.3",        
        },
    ]
  return (
    <div className="w-full py-8">
            <Heading24 className={`mb-6`}>Benefits & add-ons</Heading24>
            <div className="flex flex-wrap justify-between items-stretch  md:gap-y-0 gap-y-10 p-5">
                {
                    Benifits?.map((benifit,indx)=>(
                        <div key={indx} className="flex flex-col items-center   grow w-[126px]  mx-2">
                            <span className="w-[126px] h-[100px]">
                                <img src={benifit.image} className="w-full h-full object-contain"/>
                            </span>
                            <span className="mt-5 w-3/4 text-sm text-[#172554] leading-5 text-center">{benifit.title}</span>
                        </div>
                    ))
                }
            </div>
            <div className="aditional-wronty w-full px-4">
                <div className="border border-[#f1f1f] rounded-xl px-4 py-3 flex items-center gap-5">
                    <span className="w-8 h-8 ">
                        <img className="w-full h-full object-contain" src="https://www.svgrepo.com/show/407418/shield.svg"/>
                    </span>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-[#172554] leading-5">10 month additional warranty</span>
                        <span className="">
                            <span className="text-xs text-[#555] ">Get extended coverage a </span>
                            <span className="text-xs px-1 text-[#f59e0b] bg-[#fdeccd]">Rs 36,000</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Benifits