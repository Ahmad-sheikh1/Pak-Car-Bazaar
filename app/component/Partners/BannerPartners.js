import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import Heading24 from '../Typography/Heading24'
import NHeading from '../Typography/NHeading'

const BannerPartners = () => {
  return (
    <section className="relative h-[500px] pt-10 w-full bg-[#172554]">
        <Container>
            <div className="flex  justify-between ">
                <div className="Texts-Titles py-">
                    <Heading36 className={`!text-left text-[#fff]`}>Hello, Partner</Heading36>
                    <Heading24 className={`text-[#fff]`}>Drive your business ahead with trusted cars</Heading24>
                </div>
                <div className="Input-Form rounded-xl md:max-w-[432px] w-full p-6 shadow-xl bg-[#fff] ">
                    <NHeading className={`!text-center !text-lg `}>Enter your details to join our network</NHeading>
                    <form className="w-full mt-2 flex flex-col ">
                        <div className="w-full my-4">
                            <input className="w-full text-sm leading-6 border border-[#e8e8e8] rounded-lg px-4 py-4 outline-none text-[#888]" type="number" placeholder="Enter your mobile number" />
                        </div>
                        <div className="w-full flex flex-wrap my-4">
                            <div className="md:w-1/2 w-full md:pr-2">
                                <input className="w-full text-sm leading-6 border border-[#e8e8e8] rounded-lg px-4 py-4 outline-none text-[#888]" type="text" placeholder="Enter your first name" />
                            </div>                        
                            <div className="md:w-1/2 w-full md:pl-2">
                                <input className="w-full text-sm leading-6 border border-[#e8e8e8] rounded-lg px-4 py-4 outline-none text-[#888]" type="text" placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div className="w-full my-4">
                            <select className="w-full text-sm leading-6 border border-[#e8e8e8] rounded-lg px-4 py-4 outline-none text-[#888]" type="number">
                                <option>Select your state</option>
                                <option>Punjab</option>
                                <option>Sindh</option>
                                <option>KPK</option>
                                <option>Balochistan</option>
                                <option>Azaad Kashmir</option>
                            </select>
                        </div>
                        <div className="w-full my-4">
                            <select  className="w-full text-sm leading-6 border border-[#e8e8e8] rounded-lg px-4 py-4 outline-none text-[#888]" type="number">
                                <option>Select your city</option>
                                <option>Punjab</option>
                                <option>Sindh</option>
                                <option>KPK</option>
                                <option>Balochistan</option>
                                <option>Azaad Kashmir</option>
                            </select>
                        </div>
                        <div className="w-full my-4">
                            <button className="w-full hover:bg-[#f59e0b] hover:border-[#f59e0b] duration-200 uppercase text-sm leading-6 border bg-[#172554] rounded-lg px-4 py-4 outline-none text-[#fff]">
                                register now
                            </button>
                        </div>
                    </form>
                    <span className="text-[#8888] text-xs text-center block w-8 m-auto">OR</span>
                    <div className="w-full my-3">
                        <button className="w-full uppercase hover:bg-[#f59e0b] hover:border-[#f59e0b] duration-200 border-[#172554] text-sm leading-6 border bg-[#fff] rounded-lg px-4 py-3 outline-none text-[#172554]">
                           DOwnload the app
                        </button>
                    </div>
                </div>
            </div>
        </Container>
        <div className="Cars-outside-section-image absolute left-0 -bottom-[27%] max-w-[839px] w-1/2 h-[365px]">
            <img className="w-full h-full object-contain" src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/banner-desktop.png?q=85" alt="Three cars image"/>
        </div>
    </section>
  )
}

export default BannerPartners