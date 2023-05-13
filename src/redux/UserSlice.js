import {createSlice} from "@reduxjs/toolkit";
const userSlice = new createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)

        },
        removeUser(state,action){
            return [];

        }

    }

})

export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions;