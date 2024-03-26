import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const handleScroll = (id) => {
        setTimeout(() => {
            const item = document.getElementById(id);
            window.scrollTo({
                top: item.offsetTop - 115,
                behavior: 'smooth'
            });
        }, 50); // 1000 milliseconds = 1 second
    };


    return (
        <div className='navbar'>
            <img src={logo} alt="" className='logo' />
            <ul>
                <Link to="/">
                    <li onClick={() => { handleScroll("home") }} style={{ color: 'black' }}  >Home</li>
                </Link >
                <Link to="/">
                    <li onClick={() => { handleScroll("aboutus") }} style={{ color: 'black' }}>About Us</li>
                </Link>
                <Link to="/">
                    <li onClick={() => { handleScroll("event") }} style={{ color: 'black' }}>Events</li>
                </Link>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <li onClick={() => { handleScroll("findus") }} style={{ textDecoration: 'none' }}>Find Us</li>

                </Link>

                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> 

                <li onClick={() => { handleScroll("fact") }} style={{ textDecoration: 'none' }}>Facilities</li>
                
                </Link>

               
                <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>

                    <button >Contct us</button>
                </Link>
                
                <Link to='/apply'style={{ textDecoration: 'none', color: 'black' }}>
                <button>Apply to Program</button> 
                </Link>


             
                
                
                

            </ul>




        </div>
    )
}

export default Navbar
