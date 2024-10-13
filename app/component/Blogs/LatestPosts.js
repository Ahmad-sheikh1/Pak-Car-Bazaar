import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import BlogCard from '../Cards/BlogCard'
import BlogsCrd2 from '../Cards/BlogsCrd2'
import BasicButton from '../Buttons/BasicButton'

const LatestPosts = () => {
    let Blogs=[
        {
            title:"A-Z Glossary",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/10/MG-Hector-jpg.webp",
            desc:"Every car part & feature, explained",
        },
        {
            title:"News",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/04/New-Maruti-Swift-jpg.webp",
            desc:"The latest from the automotive world",
        },
        {
            title:"Top Selling Compact ",
            image:"https://spn-sta.spinny.com/blog/20231121183350/new-Tata-Nexon.jpg?compress=true&quality=80&w=300&dpr=1.4",
            desc:"The crème de la crème of cars",
        },
        {
            title:"Rules & Regulations",
            image:"https://spn-sta.spinny.com/blog/20220627145950/Mahindra-Scorpio-N-header.jpg?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Every law & regulation, explained",
        },
        {
            title:"Car Ownership",
            image:"https://spn-sta.spinny.com/blog/20240509161023/new-Maruti-Swift-jpg.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Everyday car-care tips & advice",
        },
        {
            title:"September 2024: ",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/02/Tata-Curvv-1.jpg",
            desc:"Make the right buying decision",
        },
        {
            title:"Top Selling CUVs in India",
            image:"https://spn-sta.spinny.com/blog/20230216172400/Maruti-Ertiga-jpg.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Make the right selling decision",
        },
        {
            title:"Miscellaneous",
            image:"https://spn-sta.spinny.com/blog/20230421185708/Volkswagen-Virtus-jpg.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Cars & eveything in-between",
        }
    ]   
  return (
    <section className="py-10">
        <Container>
            <Heading36 className="">Our Latest Posts</Heading36>
            <div className="flex flex-wrap justify-center  items-stretch mt-5">
                    {
                        Blogs?.map((Blog_Card,indx)=>(
                            <div key={indx} className="w-full lg:w-1/4  md:w-4/12 sm:w-1/2 py-4 px-2 ">
                                <BlogsCrd2 Blog_Card={Blog_Card}/>
                            </div>
                        ))
                    }
            </div>
            <div className="text-center py-5">
                <BasicButton className={`px-10`}>
                    view all
                </BasicButton>
            </div>
        </Container>  
    </section >
  )
}

export default LatestPosts