import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import styles from '../Header/Header.module.css'

function Header() {
  return (
    <> 
    <div className={styles.headerTop}>
         <div className={styles.title}>
        <h2>UNI Resto Cafe</h2>
    </div>
    <div className={styles.headerButtons}>
        <button>My Orders</button>
        <button><FaShoppingCart/></button>
    </div>
    </div>
   
    </>
   
  )
}

export default Header