import React from 'react';


const Navbar = () => {
  return (
      <div style={{backgroundColor:'white',position:'sticky',top:0,zIndex:1}}>
          <header className='header-container container'>
            <h1>Astro Ecommerce</h1>
              <nav className='navbar'>
              <ul>
                <li>Store</li>
                <li>Designers</li>
                <li>Categories</li>
            </ul>
            
              </nav>
              <ul>
              
                <li>
                    Sign In
                </li>
                <li>
                    Register
                </li>
              
            </ul>
          </header>
          
         
    </div>
  )
}

export default Navbar
