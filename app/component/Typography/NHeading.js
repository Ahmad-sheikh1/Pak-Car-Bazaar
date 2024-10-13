import React from 'react'

const NHeading = ({children,className}) => {
  return (
    <h2 className={`text-[#0f0f10] font-bold md:text-[28px] text-lg ${className}`}>
        {children}
    </h2>
  )
}

export default NHeading