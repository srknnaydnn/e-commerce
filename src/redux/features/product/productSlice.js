import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../../actions/productAciton";


const initialState={
    
    data:[],
    loading:false,
    error:null
}

export const productSlice=createSlice({

    name:"product",
    initialState:initialState,
    extraReducers:(builder)=>{
       
        builder.addCase(fetchProduct.pending,(state,action)=>{

            state.loading=true
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false
        })
    }
})
export default productSlice.reducer