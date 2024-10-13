import React from 'react'
import Container from '../Container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons'

const BannerPaychallan = () => {
    return (
        <section className='1'>
            <div className="w-full  h-[60vh]  bg-[url('https://assets.cars24.com/production/c2b-website/241009162609/js/f16c55ef8f2453b082fbc61062d273c5.jpg')]">
                <Container>
                    <div className="px-28 flex justify-around items-center">
                        <div className="head-section flex flex-col gap-4">
                            <h1 className=' text-white mb-2  text-5xl font-bold'> Check Traffic Challan Status & Pay Online</h1>
                            <h3 className='flex items-center gap-4 text-2xl text-white font-bold'>
                                <FontAwesomeIcon className='w-5 h-5 text-green-500 text-4xl font-bold' icon={faCheck} />
                                View your traffic eChallans for Free
                            </h3>
                            <h3 className='flex gap-4  text-2xl text-white font-bold'><FontAwesomeIcon className='w-5 h-5 text-green-500 text-4xl font-bold' icon={faCheck} /> Pay your traffic eChallans with ease</h3>
                            <h3 className='flex gap-4 text-2xl text-white font-bold'><FontAwesomeIcon className='w-5 h-5 text-green-500 text-4xl font-bold' icon={faCheck} /> No hassle of court visits</h3>
                        </div>
                        <div className="view-challans w-[480px]  bg-white rounded-xl p-8">
                            <h3 className='font-bold mb-4  text-black'>Enter Vehicle Number</h3>
                            <input className='w-full font-bold text-lg mb-4 h-12 px-2' type="text" placeholder='DL 01 AB1X21' />
                            <button className='text-center w-full p-2 mb-6 rounded-xl bg-[#ef6e0b]'>View Challans</button>
                            <div className="banner flex gap-12 bg-[#f1f8ff] p-4 rounded-lg  gap-4">
                                <div className="one">
                                    <h1 className='p-1 flex  gap-2 items-center font-bold text-lg'><FontAwesomeIcon className='w-5 h-5 rounded-full ' icon={faCircleCheck} /> 20,000 +  </h1>
                                    <h3 className='text-[#465166]'>Challans Setteled</h3>
                                </div>
                                <div className="two">
                                    <h1 className='p-1 flex  gap-2 items-center font-bold text-lg'><FontAwesomeIcon className='w-5 h-5' icon={faStar} />4.5 +</h1>
                                    <h3 className='text-[#465166]'>Customers Rating</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default BannerPaychallan