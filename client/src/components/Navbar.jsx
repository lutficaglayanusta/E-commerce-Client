import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"


const Navbar = () => {
  return (
      <div style={{backgroundColor:'white',position:'sticky',top:0,zIndex:1}}>
          <header className='header-container container'>
        <Link to="/">
          <img src={logo} alt="" width={250} />
        </Link>
              <nav className='navbar'>
              <ul>
                <li>Store</li>
                <li>Designers</li>
                <li>Categories</li>
            </ul>
            
              </nav>
              <ul>
              
          <li>
            <Link to="/login">
              Sign In
            </Link>
                    
                </li>
          <li>
            <Link to="/register">Register</Link>
                    
                </li>
              
            </ul>
          </header>
          
         
    </div>
  )
}

export default Navbar
