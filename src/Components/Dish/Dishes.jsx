import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Dishes.css'

function Dishes({ dishes, Cat }) {
  const initialQuantities = {};
  dishes.forEach(dish => {
    initialQuantities[dish.dish_id] = 0;
  });
  console.log(initialQuantities, 'kkk')
  const [quantities, setQuantities] = useState(initialQuantities);
  const [totalDishesCount, setTotalDishesCount] = useState(0);

  function incrementQuantity(dishId) {
    const quantity = parseInt(quantities[dishId]) || 0;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: quantity + 1,
    }));
  }

  function decrementQuantity(dishId) {
    const quantity = parseInt(quantities[dishId]) || 0;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: Math.max(0, quantity - 1),
    }));
  }

  return (
    <>
      <div>Total:{totalDishesCount}</div>
      {dishes.map((dish, index) => {
        return (
          <div key={index} className="ticket3">
            <div className={dish.dish_Type === 1 ? 'vegSymbolNon' : 'vegSymbol'}>
              <div className={dish.dish_Type === 1 ? 'circleNon' : 'circle'}>
              </div>
            </div>
            <div className="firsthalf">
              <div>{dish.dish_name}</div>
              <div>{dish.dish_currency} {dish.dish_price}</div>
              <div>{dish.dish_description}</div>
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
              <div>
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