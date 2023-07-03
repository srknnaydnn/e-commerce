import { createSlice } from "@reduxjs/toolkit";


const initialState={
    card:[]
};

export const cardSlice=createSlice({

    name:'product',
    initialState:initialState,
    reducers:{

        addToCard:(state,action)=>{
        
            state.card.push(action.payload);
        }
    }
})

export const {addToCard}=cardSlice.actions;
export default cardSlice.reducer;
