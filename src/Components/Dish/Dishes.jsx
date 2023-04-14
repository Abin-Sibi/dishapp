import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {createStoreHook, useDispatch} from 'react-redux'
import './Dishes.css'
import { cartDetails, cartremoveDetails } from '../../Redux/CartCountReducer'

function Dishes({ dishes}) {
  console.log(dishes, 'kkk')
  const dispatch = useDispatch()
  const initialQuantities = {};
  dishes?.forEach(dish => {
    initialQuantities[dish.dish_id] = 0;
  });
  console.log(initialQuantities, 'kkk')
  const [quantities, setQuantities] = useState(initialQuantities);

  function incrementQuantity(dishId) {
    const quantity = parseInt(quantities[dishId]) || 0;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: quantity + 1,
    }));
    dispatch(cartDetails(quantity+1,dishId))
  }

  function decrementQuantity(dishId) {
    const quantity = parseInt(quantities[dishId]) || 0;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: Math.max(0, quantity - 1),
    }));

    dispatch(cartremoveDetails(quantity-1,dishId))
  }

  return (
    <>
      {dishes && dishes.map((dish, index) => {
        return (
          <div key={index} className="ticket3">
            <div className={dish.dish_Type === 1 ? 'vegSymbolNon' : 'vegSymbol'}>
              <div className={dish.dish_Type === 1 ? 'circleNon' : 'circle'}>
              </div>
            </div>
            <div className="firsthalf">
              <div className='dishName'>{dish.dish_name}</div>
              <div><strong>{dish.dish_currency} {dish.dish_price}</strong></div>
              <span className='description'>{dish.dish_description}</span>
              {dish.dish_Availability ?
                <div className='quantityButton'>
                  <span onClick={() => { decrementQuantity(dish.dish_id) }}>-</span>
                  <span className='quantity'>{quantities[dish.dish_id] ? quantities[dish.dish_id] : '0'}</span>
                  <span onClick={() => { incrementQuantity(dish.dish_id) }}>+</span>
                </div>
                : ""
              }
              <div>
                {dish.dish_Availability ?
                  <span>{dish.addonCat.length > 0 ? <span>Customization Available</span> : ""}</span>
                  : <span>Not Available</span>
                }
              </div>
            </div>
            <div className="secondhalf">
              <div className='calories'>
                {dish.dish_calories} calories
              </div>
              <div className='dishImage'>
                <img src={dish.dish_image} alt={dish.dish_name} />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}


export default Dishes