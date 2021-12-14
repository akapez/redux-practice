import {createSlice} from '@reduxjs/toolkit';


export const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        value: [],
        id: '',
        name: '',
        food: [],
    },
    reducers: {
        addCustomer: (state, action) => {            
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state, action) => {  
            console.log(action.payload)
            state.value.forEach((customer) => {               
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food)
                }
            })
        }
    }
});


export const {addCustomer, addFoodToCustomer} = customerSlice.actions;

export default customerSlice.reducer;