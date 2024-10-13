import React from 'react'
import Container from '../Container/Container'

const CelebBanner = () => {
  return (
    <section className="py-5">
        <Container>
            <div className="relative w-full cursor-pointer rounded-lg group  overflow-hidden">
                <div className="w-full rounded-lg overflow-hidden group-hover:scale-110 duration-700 h-[390px]">
                    <img src="https://www.spinny.com/blog/wp-content/uploads/2022/03/desktop_gofar_v7.webp" alt='Image of CelebBanner' className="w-full h-full object-cover"/>
                </div>
                <div className="w-full bg-[#f59f0b2d] group-hover:bg-[#f59f0b76] duration-500 top-0 absolute rounded-lg overflow-hidden h-[390px]"></div>
                <div className="Details absolute bottom-0 px-14 pb-11">
                    <h1 className="md:text-[80px] sm:text-6xl font-bold text-5xl text-[#FFFFFF]">Spinny Post</h1>
                    <p className="text-2xl font-semibold py-5 text-[#FFFFFF]">Your go-to place for &apos;Everything Cars&apos;</p>
                    <button className="uppercase text-base font-bold text-[#fff] py-5 px-20 rounded-md hover:bg-[#f59e0b] duration-200 bg-[#172554]"> 
                        View Full Details
                    </button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default CelebBanner