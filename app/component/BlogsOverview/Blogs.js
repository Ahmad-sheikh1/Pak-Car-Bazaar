import React from 'react'
import Container from '../Container/Container'
import NHeading from '../Typography/NHeading'
import Link from 'next/link'
import Image from 'next/image'

const Blogs = () => {
    let Blogs=[
        {
            category:"Brand Equality",
            title:"Sachin, Yuvi, Kumble and a road trip down memory lane",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/AboutUs/components/GoodPress/assets/goodmedia_14V5.jpg?q=85&w=300&dpr=1.4"
        },
        {
            category:"Financial Express",
            title:"Full-stack concept explained with benefits",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/AboutUs/components/GoodPress/assets/cricketers_postV5.jpg?q=85&w=300&dpr=1.4"
        },
        {
            category:"Business Standard",
            title:"Maximum luxury, now accessible with Spinny Max",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/AboutUs/components/GoodPress/assets/goodmedia_14V5.jpg?q=85&w=300&dpr=1.4"
        },
        {
            category:"Economic Times",
            title:"Spinny leads by challenging conventional wisdom",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/AboutUs/components/GoodPress/assets/goodmedia_3V5.jpg?q=85&w=300&dpr=1.4"
        },
    ]
  return (
    <section className={`sm:py-10 py-3 `}>
        <Container>
            <NHeading className={`mb-4`}>Blogs Review</NHeading>
            <div className={`flex flex-wrap justify-center md:justify-between gap-4`}>
                {
                    Blogs?.map((blog,indx)=>(
                        <Link href={"/Blogs"} key={indx} className="max-w-[300px] h-auto bg-[linear-gradient(180deg,rgba(0,0,0,.3)60.76%,#000)] rounded-lg">
                            <div className="relative w-full h-full">
                            <img src={blog.image} className="w-full h-full object-cover rounded-lg" alt={blog.title}/>                                <div className="details absolute z-10 bottom-0 px-4 py-8">
                                    <span className={`text-sm leading-5 text-[#fff]`}>{blog.category}</span>
                                    <p className="text-2xl leading-8 text-[#fff]">{blog.title}</p>
                                </div>
                                <div className="rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,.3)60.76%,#000)] absolute  top-0 w-full z-0 h-full"></div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </Container>
    </section>
  )
}

export default Blogs