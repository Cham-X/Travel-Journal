import React from 'react'
import Logo from './Fill 213.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='header' >
        <p><span><img src={Logo} alt='journal' className='logo'/></span>my travel journal.</p>
      </nav>
    </div>
  )
}

export default Navbar
