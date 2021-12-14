import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice';

export default function CustomerCard({id, name, food}) {

    const [foodName, setFoodName] = useState('')

    const dispatch = useDispatch();

    const handleChangeAddFood = () => {
      if(!foodName) return
      dispatch(addFoodToCustomer({
        id,
        food: foodName
      }))
      setFoodName('')
    }

    return (
        <div className='customer-food-card-container' >
        <p>{name}</p>
        <div className='customer-foods-container'>
          <div className='customer-food'>
            {food.map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </div>
          <div className='customer-food-input-container'>
            <input value={foodName} onChange={(e) => setFoodName(e.target.value)} />
            <button onClick={handleChangeAddFood} >Add</button>
          </div>
        </div>
      </div>
    )
}
