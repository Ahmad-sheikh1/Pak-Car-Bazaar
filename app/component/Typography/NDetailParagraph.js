import React from 'react'

const NDetailParagraph = ({children,className}) => {
  return (
    <p className={`text-lg font-medium ${className}`}>
        {children}
    </p>
)
}

export default NDetailParagraph