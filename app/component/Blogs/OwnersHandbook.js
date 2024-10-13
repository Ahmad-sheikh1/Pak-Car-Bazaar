import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import BlogsCrd2 from '../Cards/BlogsCrd2'
import BasicButton from '../Buttons/BasicButton'

const OwnersHandbook = () => {
    let Blogs=[
        {
            title:"A-Z Glossary",
            image:"https://spn-sta.spinny.com/blog/20220228132223/Dashboard-lights.jpg?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Every car part & feature, explained",
        },
        {
            title:"News",
            image:"https://www.spinny.com/blog/wp-content/uploads/2023/02/Wheel-alignment-feature-image-jpg.webp",
            desc:"The latest from the automotive world",
        },
        {
            title:"Top Selling Compact ",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/07/Renew-car-insurance-jpg.webp",
            desc:"The crème de la crème of cars",
        },
        {
            title:"Rules & Regulations",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/06/cropped-read-more-about-ev-maintenance-tips.png",
            desc:"Every law & regulation, explained",
        },
        {
            title:"Car Ownership",
            image:"https://spn-sta.spinny.com/blog/20240403212527/Featured-Images-1.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Everyday car-care tips & advice",
        },
        {
            title:"September 2024: ",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/06/charging-1-ezgif.com-optijpeg-1.jpg",
            desc:"Make the right buying decision",
        },
        {
            title:"Top Selling CUVs in India",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/06/Nexon-EV-Engine-Bay.webp",
            desc:"Make the right selling decision",
        },
        {
            title:"Miscellaneous",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/05/pouring-oil-car-engine-fresh-oil-poured-oil-change-car_157125-16501-ezgif.com-resize-jpg.webp",
            desc:"Cars & eveything in-between",
        }
    ]  
    return (
        <section className="py-10">
            <Container>
                <Heading36 className="">Owners&apos;s Handbook</Heading36>
                <div className="flex flex-wrap justify-center  items-stretch mt-5">
                    {
                        Blogs?.map((Blog_Card, indx) => (
                            <div key={indx} className="w-full lg:w-1/4  md:w-4/12 sm:w-1/2 py-4 px-2 ">
                                <BlogsCrd2 Blog_Card={Blog_Card} />
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

export default OwnersHandbook