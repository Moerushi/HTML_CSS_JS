import React from 'react'
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h1>Main</h1>
      <Link to='/about'>About Us</Link>
    </div>
  )
}
