import React from 'react'

const CardPartner = ({Card_data}) => {
    return (
        <div className="rounded-xl w-full h-full overflow-hidden relative">
            <div className="w-full h-[235px] overflow-hidden">
                <img className="w-full h-full object-cover" src={Card_data.image} />
            </div>
            <div className="rounded-xl flex justify-center w-full h-[235px] items-center absolute top-0 left-0 bg-[#14141491] ">
                <p className="text-center text-[#fff] text-xl font-semibold w-3/5">{Card_data.title}</p>
            </div>
        </div>
    )
}

export default CardPartner