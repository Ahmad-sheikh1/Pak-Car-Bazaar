import React from 'react'

const BasicButton = ({children,className}) => {
  return (
    <button className={`uppercase text-base font-bold text-[#fff] py-5 px-20 rounded-md hover:bg-[#f59e0b] duration-200 bg-[#172554] ${className}`}> 
        {children}
    </button>
  )
}

export default BasicButton