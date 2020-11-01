import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.svg'
import './styles/header.css'
import Burger from './component/burger'

const Header = () => {
    const [menu, setMenu] = useState('menu-off')

    const mobileMenu = () => {
        if ( menu === 'menu-off' ) {
            setMenu('menu-on')
        } else {
            setMenu('menu-off')
        }
    }

    return (
        <div className='navbar'>
            <nav className={menu}>
                <ul>
                    <li><Link className='link' to='/'>Início</Link></li>
                    <li><Link className='link' to='/gallery'>Galeria</Link></li>
                    <li><Link className='link' to='/blog'>Blog</Link></li>
                    <li><Link className='link' to='/about'>Sobre</Link></li>
                </ul>
            </nav>
            <Burger menu={mobileMenu}/>
            <Link className='logo' to='/'><img src={logo} alt="logo" /></Link>
        </div>
    )
}

export default Header