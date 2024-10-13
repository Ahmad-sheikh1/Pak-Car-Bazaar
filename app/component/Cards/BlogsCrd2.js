import Link from 'next/link'
import React from 'react'

const BlogsCrd2 = ({Blog_Card}) => {
  return (
        <Link href="/" className="Blog-Card group flex flex-col items-center w-full  bg-[#ffffff] overflow-hidden rounded-md">
            <div className="w-full h-[200px]   hover:bg-[#ffffff6a] overflow-hidden">
                <img className="w-full h-full object-cover  duration-500 group-hover:scale-110" src={Blog_Card.image} />
            </div>
            <h2 className="uppercase text-[#172554] py-5 px-3 text-lg font-bold">{Blog_Card.title}</h2>
        </Link>
  )
}

export default BlogsCrd2