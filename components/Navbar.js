'use client'
//importing necesary  modules
import { CiSearch } from "react-icons/ci";
import { NavDropdown } from "react-bootstrap";
import './navbar.css'

// Functional component definition for Navbar
const Navbar = () => {
  return (
    <>
     {/* Navbar structure */}
    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
    <div className="container-fluid">
        <img src="https://tse4.mm.bing.net/th?id=OIP.5Z68EOCl90fkQ1AAAiA2lQHaGS&pid=Api&P=0&h=220" alt="" height="60px" className="d-block d-md-none" />
       {/* Navigation links for larger screens */}
        <ul className="navbar-nav d-none d-md-block">
        <li className="nav-item dropdown">
            {/* Dropdown for Course options */}
        <NavDropdown title="Course" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Maths</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Science</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Other
              </NavDropdown.Item>
            </NavDropdown>
            </li>
        </ul>
        {/* Search form for larger screens */}
        <form className="form-inline d-none d-md-block">
            <div className="search-box">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <span className="search-icon"><CiSearch/></span>
            </div>
        </form>
        
        {/* Logo displayed on larger screens */}
        <img src="https://res.cloudinary.com/hometech/image/upload/v1708371322/banners/mmdx63qsmewh8alhxapt.jpg" alt="" height="60px" className="d-none d-md-block" />
        
        {/* Mobile navigation options */}
        <ul className="navbar-nav d-flex flex-row align-items-center d-md-none gap-3">
            {/* Search icon for mobile */}
            <li className="nav-item dropdown">
                <span className="search-icon"><CiSearch/></span>
            </li>
            
            {/* Sidebar dropdown for mobile */}
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarMenu" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Sidebar
                </a>
                {/* Sidebar dropdown menu */}
                <div className="dropdown-menu" aria-labelledby="navbarMenu">
                    <a className="dropdown-item" href="#">Donate</a>
                    <a className="dropdown-item" href="#">Login</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Signup</a>
                </div>
            </li>
        </ul>

        {/* Navigation links on the right for larger screens */}
        <ul className="navbar-nav ml-auto d-none d-md-flex">
            <li className="nav-item">
                <a className="nav-link" href="#"><i className="far fa-share-square"></i>Donate</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Log in</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
            </li>
        </ul>
    </div>
</nav>
    </>
  )
}

// Exporting the Navbar component
export default Navbar