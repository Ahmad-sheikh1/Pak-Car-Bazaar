import Link from 'next/link'
import React from 'react'

const BlogCard = ({Blog_Card}) => {
    return (
        <Link href="/" className="Blog-Card flex flex-col items-center w-full  ">
            <div className="w-full h-[200px] hover:-translate-y-3 duration-500 hover:bg-[#ffffff6a]">
                <img className="w-full h-full object-cover rounded-md" src={Blog_Card.image} />
            </div>
            <h2 className="uppercase text-[#172554] pt-3 text-lg font-bold">{Blog_Card.title}</h2>
            <p className="text-xs font-normal text-[#172554]">{Blog_Card.desc}</p>
        </Link>
    )
}

export default BlogCard