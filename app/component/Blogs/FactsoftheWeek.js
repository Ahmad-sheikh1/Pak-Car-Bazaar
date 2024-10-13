import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import Image from 'next/image'

const FactsoftheWeek = () => {
    return (
        <section className="py-10">
            <Container>
                <Heading36 className="">Fact Of The Week</Heading36>
                <div className="relative flex flex-col justify-center items-center rounded-xl bg-[#f7b33e] py-20">
                    <p className="w-3/4 text-center text-2xl font-normal text-[#172554]">
                        The <span className="font-bold">Tata</span> Nexon was the first model in India to receive a <span className="font-bold">5-Star</span> Global NCAP rating.
                    </p>
                    <span className="Hash-Tag text-lg font-normal text-center mt-5">#SpinnyMag</span>
                    <span className="absolute w-5 h-5 top-2 left-2">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            className="w-full h-full object-contain"
                            src="https://www.svgrepo.com/show/535590/quote-left.svg"
                            alt="Left quotation mark"
                        />
                    </span>
                </div>
            </Container>
        </section >
    )
}

export default FactsoftheWeek