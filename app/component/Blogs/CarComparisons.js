import React from 'react'
import BasicButton from '../Buttons/BasicButton'
import BlogsCrd2 from '../Cards/BlogsCrd2'

const CarComparisons = () => {
    let Blogs=[
        {
            title:"Top Selling Compact ",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/09/fsdf-ezgif.com-optijpeg-jpg.webp",
            desc:"The crème de la crème of cars",
        },
        {
            title:"Rules & Regulations",
            image:"https://spn-sta.spinny.com/blog/20230213114553/Grand-i10-NIOS-comparison.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Every law & regulation, explained",
        },
        {
            title:"Car Ownership",
            image:"https://spn-sta.spinny.com/blog/20231226132204/ezgif.com-optijpeg-jpg.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Everyday car-care tips & advice",
        },
        {
            title:"September 2024: ",
            image:"https://spn-sta.spinny.com/blog/20231129190406/Mercedes-GLC-vs-Audi-Q5-feature-image-jpg.webp?compress=true&quality=80&w=300&dpr=1.4",
            desc:"Make the right buying decision",
        },
    ] 
    return (
        <>
            <p className="text-xl font-bold py-3 text-left uppercase tracking-wider">Car Comparisons</p>
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
        </>
    )
}

export default CarComparisons