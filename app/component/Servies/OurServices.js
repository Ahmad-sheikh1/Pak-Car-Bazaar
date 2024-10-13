"use client"
import React from 'react';
import Container from '../Container/Container';
import NHeading from '../Typography/NHeading';
const OurServices = () => {
    let Cards=[
        {
            title:"Sell Car",
            desc:"Affordable Pre-loved cars",
            img:"https://static.vecteezy.com/system/resources/previews/023/183/060/non_2x/vintage-car-retro-car-vintage-car-3d-rendering-ai-generative-image-free-photo.jpg",
        },
        {
            title:"Sell Car",
            desc:"Affordable Pre-loved cars",
            img:"https://www.shutterstock.com/image-photo/luxuries-car-on-road-wallpaper-600w-2494198445.jpg",
        },
        {
            title:"Sell Car",
            desc:"Affordable Pre-loved cars",
            img:"https://static.vecteezy.com/system/resources/previews/026/971/784/non_2x/rear-view-of-a-luxury-car-bmw-i8-in-the-city-street-free-photo.jpg",
        },
        {
            title:"Sell Car",
            desc:"Affordable Pre-loved cars",
            img:"https://static.vecteezy.com/system/resources/previews/022/797/983/non_2x/image-of-gold-color-beautiful-modern-car-generative-ai-free-photo.jpeg",
        },
    ]
    return (
        <section className="OurServices py-10 bg-[]">
            <Container>
                <NHeading className="text-2xl text-center md:text-left font-bold my-4">Our Services</NHeading>
                <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center">
                    {
                        Cards?.map((card,indx)=>(
                            <div key={indx} className="w-[300px]  p-2">
                                <div className="w-full h-[200px]">
                                    <img className="w-full h-full object-cover" src={card.img} alt="car" />
                                </div>
                                <div className="flex flex-col ">
                                    <h1 className="text-[#0f0f10] font-bold my-1">{card.title}</h1>
                                    <p className="text-gray-400 font-normal my-1">{card.desc}</p>
                                    <button className="flex text-white justify-center items-center gap-2 p-1 rounded bg-[#172554]">
                                        Know More
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}
export default OurServices;
