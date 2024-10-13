import React from 'react'

const Heading24 = ({children,className}) => {
  return (
    <h2 className={`text-xl font-semibold leading-6 mb-6 text-[#27272a] ${className}`}>
        {children}
    </h2>
  )
}

export default Heading24