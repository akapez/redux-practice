import { createSlice } from '@reduxjs/toolkit';

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    value: [],
  },
  reducers: {
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.value.splice(action.payload, 1)
    }
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
