import Container from '../Container/Container'
import React from 'react'
import NHeading from '../Typography/NHeading'
import NDetailParagraph from '../Typography/NDetailParagraph'
import carrep from "../../Assets/1.svg"
import carrset from "../../Assets/2.svg"
import carrwash from "../../Assets/3.svg"
import Image from 'next/image'

const HowItWorks = () => {
    let Cards=[
        {
            image:carrep,
            title:"Choose from the best pre-owned cars",
            desc:"20,000+ fully inspected cars online",
        },
        {
            image:carrset,
            title:"Take a test drive at your home or a Spinny Hub",
            desc:"Sanitized cars for every test drive",
        },
        {
            image:carrwash,
            title:"Online Payment. Doorstep Delivery.",
            desc:"And 5-day money back guarantee",
        },
    ]
  return (
    <section className={`w-full py-10 bg-white`}>
        <Container>
            <NHeading className={`text-center leading-8 mb-2`}>How Pak Car Bazar Works</NHeading>
            <NDetailParagraph className={`leading-6 text-center text-[#2e054e]`}>You wont just love our cars, youll love the way you buy them.</NDetailParagraph>
            <div className={`w-full md:justify-between justify-center flex flex-wrap gap-8`}>
                {
                    Cards?.map((card,indx)=>(
                        <div key={indx} className={`my-12 items-center flex flex-col gap-y-6`}>
                            <div className={`image w-[224px] h-[224px]`}>
                                <Image className={`w-full h-full object-contain`} alt="imagerr" src={card.image}/>
                            </div>
                            <div className={`details py-3`}>
                                <h3 className={`text-lg leading-6 mb-[6px] text-[#2e054e]`}>{card.title}</h3>
                                <p className={`text-base text-center leading-5 text-[#888]`}>{card.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center'>
                <button className="flex gap-4 justify-center items-center text-base leading-5 py-4 px-6 rounded-xl text-[#fff] bg-[#172554]">
                    <span>
                        Watch how it works
                    </span>
                    <span>
                        <svg width="24px" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0.178223C8.96 0.178223 0 9.13822 0 20.1782C0 31.2182 8.96 40.1782 20 40.1782C31.04 40.1782 40 31.2182 40 20.1782C40 9.13822 31.04 0.178223 20 0.178223ZM15 25.5182V14.8382C15 13.2582 16.76 12.2982 18.08 13.1582L26.38 18.4982C27.6 19.2782 27.6 21.0782 26.38 21.8582L18.08 27.1982C16.76 28.0582 15 27.0982 15 25.5182Z" fill="#fff"></path></svg>
                    </span>
                </button>
            </div>
        </Container>
    </section>
  )
}

export default HowItWorks