import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.svg'
import './styles/header.css'
import Burger from './component/burger'

const Header = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><Link className='link' to='/'>Início</Link></li>
                    <li><Link className='link' to='/gallery'>Galeria</Link></li>
                    <li><Link className='link' to='/blog'>Blog</Link></li>
                    <li><Link className='link' to='/about'>Sobre</Link></li>
                </ul>
            </nav>
            <Burger/>
            <Link className='logo' to='/'><img src={logo} alt="logo" /></Link>
        </div>
    )
}

export default Header