import React from 'react'
import BlogsCrd2 from '../Cards/BlogsCrd2'
import BasicButton from '../Buttons/BasicButton'

const BuyingGuides = () => {
    let Blogs=[
        {
            title:"A-Z Glossary",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/09/0002-number-plate-jpg.webp",
            desc:"Every car part & feature, explained",
        },
        {
            title:"News",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/03/Citroen-Basalt-jpg.webp",
            desc:"The latest from the automotive world",
        },
        {
            title:"Top Selling Compact ",
            image:"https://spn-sta.spinny.com/blog/20220321230453/ezgif.com-gif-maker-2022-03-21T230441.819.jpg?compress=true&quality=80&w=300&dpr=1.4",
            desc:"The crème de la crème of cars",
        },
        {
            title:"Rules & Regulations",
            image:"https://www.spinny.com/blog/wp-content/uploads/2024/08/Pre-delivery-inspection-jpg.webp",
            desc:"Every law & regulation, explained",
        },
    ] 
  return (
    <>
        <p className="text-xl font-bold py-3 text-left uppercase tracking-wider">Buying Guides</p>
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

export default BuyingGuides