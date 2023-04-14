import React, { useEffect, useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Badge from '@mui/material/Badge';
import styles from '../Header/Header.module.css'
import HeaderList from './HeaderList'
import { useSelector } from 'react-redux'

function Header() {
     const cartCount=useSelector((state)=>state.cartCount)
  return (
    <> 
    <div className={styles.headerTop}>
         <div className={styles.title}>
        <h2>UNI Resto Cafe</h2>
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