import Link from 'next/link'
import React from 'react'

const CardPartner2 = ({Card_Data}) => {
    return (
        <Link href="/" className="Blog-Card flex flex-col items-center w-full  ">
            <div className="w-full h-[230px] mb-5 hover:-translate-y-3 duration-500 hover:bg-[#ffffff6a]">
                <img className="w-full h-full object-contain rounded-md" src={Card_Data.image} />
            </div>
            <h2 className="uppercase text-[#172554] py-3 text-lg font-bold">{Card_Data.title}</h2>
            <p className="text-sm font-normal text-center text-[#888]">{Card_Data.desc}</p>
        </Link>
    )
}

export default CardPartner2