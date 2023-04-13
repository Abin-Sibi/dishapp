import React, { useState } from 'react'
import axios from 'axios'
import './Dishes.css'

function Dishes({dishes}) {
  const [data,setData]=useState()


  return (
  <>
{dishes.map((dish,index)=>{
  return( <div className="ticket3 ">
              <div className="firsthalf ">
                  <div>{dish.dish_name}</div>
                  <div>{dish.dish_currency} {dish.dish_price}</div>
                  <div>{dish.dish_description}</div>
                  <div className='quantityButton'><button>-</button><span>0</span><button>+</button></div>
                  <div>{dish.dish_Availability?<span>{dish.addonCat.length > 0 ? <span>Customization Avilable</span>:""}</span> :<span>Not availible</span>}</div>
              </div>
              <div className="secondhalf">
                <div>
                {dish.dish_calories} calories
                </div>
                <div className='dishImage'><img  src={dish.dish_image}/></div>
          </div>
  </div>)
})}
      
         
  </>
      )
}

export default Dishes