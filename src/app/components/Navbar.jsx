import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
      <div className='navbar'>
          <div className='col'>
              <div className='logo'>
                  <Link href='/'>Revival Studio.</Link>
              </div>
          </div>

            <div className='col'>
              <div className='navigation-items'>

                  <div className='nav-item'>
                      <Link href='/'>Home</Link>
                  </div>

                  <div className='nav-item'>
                      <Link href='/about'>About</Link>
                  </div>

                  <div className='nav-item'>
                      <Link href='/work'>Work</Link>
                  </div>

                  <div className='nav-item'>
                      <Link href='/contact'>Contact</Link>
                  </div>
              </div>
          
          <div className='nav-end'>
            <p>Kolkata ,IND</p>
          </div>


          </div>
        </div>
  )
}

export default Navbar
