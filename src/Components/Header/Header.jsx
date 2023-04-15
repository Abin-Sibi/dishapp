import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {IoMdArrowBack} from 'react-icons/io'
import Badge from '@mui/material/Badge';
import styles from '../Header/Header.module.css'
import { useSelector } from 'react-redux'

function Header() {
     const cartCount=useSelector((state)=>state.cartCount)
  return (
    <> 
    <div className={styles.headerTop}>
         <div className={styles.title}>
         <div className={styles.arrowDiv} ><IoMdArrowBack className={styles.arrow}/></div><h3>UNI Resto Cafe</h3>
    </div>
    <div className={styles.headerButtons}>
        <span>My Orders</span>
        <Badge badgeContent={cartCount.cartTotal} color="error"><FaShoppingCart/></Badge>

        
    </div>
    </div>
   
    </>
   
  )
}

export default Header