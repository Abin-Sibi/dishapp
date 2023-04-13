import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from '../Header/Header.module.css'
import axios from 'axios';
import Dishes from '../Dish/Dishes';

function HeaderList({category}) {
    const { pathname } = useLocation();
    const [dishes,setDishes] = useState([])
    
    const headerNav = [
        {
          display: "Salads and Soup",
          path: "/",
        },
        {
          display: "From the BarnYard",
          path: "/dish",
        },
        {
          display: "From the Hen House",
          path: "/",
        },
        {
            display: "Fresh from the sea",
            path: "/",
          },
      ];
    const dishList = ((Dishdata)=>{
        console.log(Dishdata,'l')
        setDishes(Dishdata)
     })


      
  return (
    <div>
    <div className={styles.headerList}>
    
        {category.map((categoryname)=>{
            return(
                <Link  className={styles.nonactive} onClick={()=>{dishList(categoryname.category_dishes)}}>{categoryname.menu_category}<div ><hr className={ styles.ddash }/></div></Link>
            )
            
        })}
        
        
   </div>
   <Dishes dishes={dishes} />
    </div>
  )
}

export default HeaderList