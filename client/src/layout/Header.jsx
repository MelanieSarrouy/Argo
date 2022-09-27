import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/index.png'
import Nav from '../components/Nav'
import { MdOutlineMenu } from 'react-icons/md'
import { useState } from 'react'

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false)
  return (
    <header className="header">
      <div className="header__logoDiv">
        <Link to="/" className="header__logoLink">
          <img src={logo} alt="logo de l'Argo" className="header__logo" />
        </Link>
      </div>
      <div className="header__burger" onClick={() => setDisplayNav(!displayNav)}>
        <MdOutlineMenu className="header__burger__icon" />
        {displayNav && <Nav />}
      </div>
      <div className="header__desktop">
        <Nav />
      </div>
    </header>
  )
}

export default Header
