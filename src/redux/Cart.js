import { createSlice } from "@reduxjs/toolkit";


const cartSlice = new createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
            state.push(action.payload)

        },
        emptyCart(state,action){
            return[];
        },
        removeFromCart(state,action){
            return state.filter((singleItem)=>singleItem._id !== action.payload);
            

            
        }

    }
})


export default cartSlice.reducer;
export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions;