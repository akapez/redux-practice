import React from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import { v4 as uuidv4 } from 'uuid';

export default function ReservationCard({ name, index }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(addCustomer({
            id: uuidv4(),
            name,
            food: []
        }));
      }}
      className='reservation-card-container'
    >
      {name}
    </div>
  );
}
