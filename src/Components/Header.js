import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {MdClose} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'


const Header = (props) => {
////////////////////////////////////////////////////////////
/// found a How-To for this Hamburger menu at: 
// https://ibaslogic.com/how-to-add-hamburger-menu-in-react/
/////////////////////////////////////////////////////////////
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
      }

    return <nav className='header'>
        <button className="navbutton"onClick={handleToggle}>{navbarOpen ? (
            <MdClose style={{ width: "40px", height: "40px" }} />
            ) : (
            <FiMenu style={{  width: "40px", height: "40px" }} />
        )}</button>
         <ul className={`menuNav ${navbarOpen ? "showMenu" : "" }`}>
             <Link className="link" to="/" onClick={() => closeMenu()}>Home</Link>
             <Link className="link" to="MyCart" onClick={() => closeMenu()}>My Cart</Link>
         </ul>
        <img className='logo' src='whitelogo.png' alt='coffeeverse logo'/>
    </nav>
}

export default Header

// mdclose  color: "#e8e4d9"
//fi menu color: "black",