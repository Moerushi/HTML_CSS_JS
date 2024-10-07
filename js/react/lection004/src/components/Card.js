import React from 'react'

export const Card = ({title, children}) => {
  return (
    <div style={{border: '1px solid #ccc', padding: '16px', marginBottom: '16px'}}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}
