import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import BlogCard from '../Cards/BlogCard'

const BrowseByCategory = () => {
    let Blogs=[
        {
            title:"A-Z Glossary",
            image:"https://spn-sta.spinny.com/blog/20231222124621/Chennai-585x295.webp?compress=true&quality=80&w=600&dpr=1.4",
            desc:"Every car part & feature, explained",
        },
        {
            title:"News",
            image:"https://spn-sta.spinny.com/blog/20231130020214/porsche-normal-585x295.webp?compress=true&quality=80&w=600&dpr=1.4",
            desc:"The latest from the automotive world",
        },
        {
            title:"Best Cars",
            image:"https://spn-sta.spinny.com/blog/20240201163143/A-Z-1-jpg.webp?compress=true&quality=80&w=1000&dpr=1.4",
            desc:"The crème de la crème of cars",
        },
        {
            title:"Rules & Regulations",
            image:"https://spn-sta.spinny.com/blog/20240201163317/News.jpg?compress=true&quality=80&w=1000&dpr=1.4",
            desc:"Every law & regulation, explained",
        },
        {
            title:"Car Ownership",
            image:"https://spn-sta.spinny.com/blog/20240201163546/Best-Cars.jpg?compress=true&quality=80&w=1000&dpr=1.4",
            desc:"Everyday car-care tips & advice",
        },
        {
            title:"Buying a car",
            image:"https://spn-sta.spinny.com/blog/20240201163652/Rules-Regulations-jpg.webp?compress=true&quality=80&w=1000&dpr=1.4",
            desc:"Make the right buying decision",
        },
        {
            title:"Selling a car",
            image:"https://spn-sta.spinny.com/blog/20240201164141/Owning-Running-jpg.webp?compress=true&quality=80&w=1000&dpr=1.4",
            desc:"Make the right selling decision",
        },
        {
            title:"Miscellaneous",
            image:"https://spn-sta.spinny.com/blog/20240201163928/Buying-a-car.jpg?compress=true&quality=80&w=1000&dpr=1.4",
            desc:"Cars & eveything in-between",
        }
    ]
  return (
    <section className="py-10">
        <Container>
            <Heading36 className="">Browse by Category</Heading36>
            <div className="flex flex-wrap justify-center  items-center mt-5">
                    {
                        Blogs?.map((Blog_Card,indx)=>(
                            <div key={indx} className="w-full lg:w-1/4 md:w-4/12 sm:w-1/2 py-4 px-2">
                                <BlogCard Blog_Card={Blog_Card}/>
                            </div>
                        ))
                    }
            </div>
        </Container>  
    </section >
  )
}

export default BrowseByCategory