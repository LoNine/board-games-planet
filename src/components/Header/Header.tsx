import React from 'react'
import LogIn from './LogIn'
import Logo from './Logo'
import NavBar from './NavBar'
import styles from './Header.module.scss';
import Autocomplite from './Autocomplite';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <NavBar />
      <Autocomplite />
      <LogIn />
    </div>
  )
}

export default Header
