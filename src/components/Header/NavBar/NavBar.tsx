import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.link}>Home</Link>
      <Link to='/games'className={styles.link}>Games</Link>
      <Link to='/forum'className={styles.link}>Forum</Link>
    </div>
  )
}

export default NavBar
