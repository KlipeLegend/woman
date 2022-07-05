import React, { useState } from 'react'
import About from './About'
import Action from './Action'
import Contact from './Contact'
import Home from './Home'
import Paint from './Paint'
import Shop from './Shop'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const Nav = () => {
    const [nav, setNav] = useState(false)
    const Nav = () => {
        setNav(!nav)
    }
    return (
        <div>
            <Router>
                <nav>
                    <div className="nav_logo">
                        <div>
                            <img src="./img/logo.svg" alt="" />
                        </div>
                        <button className='menu' onClick={Nav}>MENU</button>
                    </div>
                    <ul className={nav ? 'nav_item activ' : 'nav_item'}>
                        <li className='nav_link'>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li className='nav_link'>
                            <Link to='/about'>ABOUT</Link>
                        </li>
                        <li className='nav_link'>
                            <Link to='/action'>TAKE ACTION</Link>
                        </li>
                        <li className='nav_link'>
                            <Link to='/paint'>UMA’S PAINTING</Link>
                        </li>
                        <li className='nav_link'>
                            <Link to='/contact'>CONTACT</Link>
                        </li>
                        <li className='nav_link'>
                            <Link to='/shop'><img src="./img/shop.svg" alt="" /></Link>
                        </li>
                    </ul>

                </nav>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/action" element={<Action />} />
                    <Route path="/paint" element={<Paint />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Nav