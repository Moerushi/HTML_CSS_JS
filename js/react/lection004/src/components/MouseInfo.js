import React from 'react'

export const MouseInfo = ({x,y}) => {
  return (
    <div>
        <h2>Mouse position.</h2>
        <p>x: {x}, y: {y}</p>
    </div>
  )
}
