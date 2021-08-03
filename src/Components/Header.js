import React from 'react'
import {Link} from 'react-router-dom'



const Header = (props) => {
    return <nav className='header'>
        <Link className="link" to="/">Home</Link>
        <img className='logo' src='coffeelogo.png' alt='coffeeverse logo'/>
        <Link className="link" to="MyCart">My Cart</Link>
    </nav>
}

export default Header