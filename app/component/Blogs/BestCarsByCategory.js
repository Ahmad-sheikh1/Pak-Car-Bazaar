import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import BlogsCrd2 from '../Cards/BlogsCrd2'
import BasicButton from '../Buttons/BasicButton'

const BestCarsByCategory = () => {
    let Blogs = [
        {
            title: "A-Z Glossary",
            image: "https://www.spinny.com/blog/wp-content/uploads/2024/10/MG-Hector-jpg.webp",
            desc: "Every car part & feature, explained",
        },
        {
            title: "News",
            image: "https://spn-sta.spinny.com/blog/20230421185708/Volkswagen-Virtus-jpg.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc: "The latest from the automotive world",
        },
        {
            title: "Top Selling Compact ",
            image: "https://spn-sta.spinny.com/blog/20221006122407/Maruti-Suzuki-Alto-K10.jpg?compress=true&quality=80&w=300&dpr=1.4",
            desc: "The crème de la crème of cars",
        },
        {
            title: "Rules & Regulations",
            image: "https://www.spinny.com/blog/wp-content/uploads/2024/02/Tata-Curvv-1.jpg",
            desc: "Every law & regulation, explained",
        },
        {
            title: "Car Ownership",
            image: "https://spn-sta.spinny.com/blog/20220228143049/ezgif.com-gif-maker-100-9.jpg?compress=true&quality=80&w=300&dpr=1.4",
            desc: "Everyday car-care tips & advice",
        },
        {
            title: "September 2024: ",
            image: "https://spn-sta.spinny.com/blog/20220228140459/ezgif.com-gif-maker-64-2.jpg?compress=true&quality=80&w=300&dpr=1.4",
            desc: "Make the right buying decision",
        },
        {
            title: "Top Selling CUVs in India",
            image: "https://spn-sta.spinny.com/blog/20230202075721/4-Sony-sound-New.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc: "Make the right selling decision",
        },
        {
            title: "Miscellaneous",
            image: "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
            desc: "Cars & eveything in-between",
        }
    ]
    return (
        <section className="py-10">
            <Container>
                <Heading36 className="">Best Cars by Categories</Heading36>
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

export default BestCarsByCategory