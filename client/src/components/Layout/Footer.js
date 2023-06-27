import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='text-center mt-1'>
          <Link to="/about">About</Link>|
          <Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
        <h6 className='text-center'>All Rights Reserved &copy; Pritam</h6>
    </div>
  )
}

export default Footer;