import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id:1, 
        value: 3,
    },
    {
        id:2, 
        value: 4,
    }
]

const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers:{
        increment:(state, action)=>{
            const counterIndex = state.findIndex(c=>c.id === action.payload);
            state[counterIndex].value++
        }, 
        decrement:(state, action)=>{
            const counterIndex = state.findIndex(c=>c.id === action.payload);
            state[counterIndex].value--
        }
    }
});

export default countersSlice.reducer;
export const {increment, decrement} = countersSlice.actions;