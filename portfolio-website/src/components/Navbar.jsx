import {FiHome} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {FiBook} from 'react-icons/fi'
import {FiMessageCircle} from 'react-icons/fi'
import { useState } from 'react'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
        <a href= "#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home'  ? 'active': ''}><FiHome></FiHome></a>
        <a href= "#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'  ? 'active': ''}><FiUser></FiUser></a>
        <a href= "#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'  ? 'active': ''}><FiBook></FiBook></a>
        <a href= "#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'  ? 'active': ''}><FiMessageCircle></FiMessageCircle></a>
    </nav>
  )
}

export default Navbar