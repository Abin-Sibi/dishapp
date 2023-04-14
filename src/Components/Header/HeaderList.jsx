import React, { useEffect, useState } from 'react'
import styles from '../Header/Header.module.css'
import Dishes from '../Dish/Dishes';

function HeaderList({category}) {
    const [dishes,setDishes] = useState([])
    const [select,setSelect] = useState(false)
    console.log(category[0],'pppooo')
    useEffect(() => {
        dishList(category?.[0]?.category_dishes,0)
    }, [category])
    
    
    
    const dishList = ((Dishdata,index)=>{
        setDishes(Dishdata)
        setSelect(index)
     })
  return (
    <div>
    <div className={styles.headerList}>
    
        {category.map((categoryname,index)=>{
            return(
                <div key={index} className={select===index?styles.active:styles.nonactive}>
                    <div   
                onClick={()=>{dishList(categoryname.category_dishes,index)}}>{categoryname.menu_category}</div>
                </div>
                
            )
            
        })}
        
        
   </div>
   <Dishes dishes={dishes}/>
    </div>
  )
}

export default HeaderList