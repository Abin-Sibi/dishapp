import React, {  useState } from 'react'
import { useDispatch} from 'react-redux'
import style from'./Dishes.module.css'
import { cartDetails, cartremoveDetails } from '../../Redux/CartCountReducer'

function Dishes({ dishes}) {
  const dispatch = useDispatch()
  const initialQuantities = {};
  dishes?.forEach(dish => {
    initialQuantities[dish.dish_id] = 0;
  });
  const [quantities, setQuantities] = useState(initialQuantities);
  const [total, setTotal] = useState(1);
  function incrementQuantity(dishId) {
    const quantity = parseInt(quantities[dishId]) || 0;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: quantity + 1,
    }));
    dispatch(cartDetails(total))
  }

  function decrementQuantity(dishId) {
    const quantity = parseInt(quantities[dishId]) || 0;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: Math.max(0, quantity - 1),
    }));
     if(quantities[dishId]>0){
      dispatch(cartremoveDetails(total))
     }
    
  }

  return (
    <>
      {dishes && dishes.map((dish, index) => {
        return (
          <>
          <div key={index} className={style.main}>
            <div className={dish.dish_Type === 1 ? style.vegSymbolNon : style.vegSymbol}>
              <div className={dish.dish_Type === 1 ? style.circleNon : style.circle}>
              </div>
            </div>
            <div className={style.firsthalf}>
              <div className={style.dishName}>{dish.dish_name}</div>
              <div><strong>{dish.dish_currency} {dish.dish_price}</strong></div>
              <span className={style.description}>{dish.dish_description}</span>
              {dish.dish_Availability ?
                <div className={style.quantityButton}>
                  <span onClick={() => { decrementQuantity(dish.dish_id) }}>-</span>
                  <span className={style.quantity}>{quantities[dish.dish_id] ? quantities[dish.dish_id] : '0'}</span>
                  <span onClick={() => { incrementQuantity(dish.dish_id) }}>+</span>
                </div>
                : ""
              }
              <div>
                {dish.dish_Availability ?
                  <span>{dish.addonCat.length > 0 ? <span style={{color:"red"}}>Customization Available</span> : ""}</span>
                  : <span style={{marginTop:"5px",color:"red"}}>Not Available</span>
                }
              </div>
            </div>
            <div className={style.secondhalf}>
              <div className={style.calories}>
                {dish.dish_calories} calories
              </div>
              <div className={style.dishImage}>
                <img src={dish.dish_image} alt={dish.dish_name} />
              </div>
            </div>
          </div>
          <hr/>
          </>
        )
      })}
    </>
  )
}


export default Dishes