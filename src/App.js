import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';
import './App.css';
import CustomerCard from './components/CustomerCard';

function App() {
  const [reservationName, setReservationName] = useState('');
  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector((state) => state.customers.value);


  const dispatch = useDispatch();

  const handleChangeAddReservation = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => {
                return <ReservationCard key={index} name={name} index={index} />;
              })}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleChangeAddReservation}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
         {customers.map((customer) => {
           return <CustomerCard key={customer.id} id={customer.id} name={customer.name} food={customer.food} />
         })}
        </div>
      </div>
    </div>
  );
}

export default App;
