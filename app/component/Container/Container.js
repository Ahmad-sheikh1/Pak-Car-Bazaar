import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`container max-w-screen-xl xl:px-0 md:px-8 px-6 m-auto ${className}`}>
        {
            children
        }
    </div>
    
  )
}

export default Container