import React from 'react'
import Logo from './Fill 213.png'

const Navbar = () => {
  return (
    <header className='navbar'>
      <nav className='header' >
        <p><span><img src={Logo} alt='journal' className='logo'/></span>my travel journal.</p>
      </nav>
    </header>
  )
}

export default Navbar
