import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCategoryDetail=createAsyncThunk(
  
    "categoryDetail/fetchCategoryDetail",
    async (categoryName)=>{

        try {
            
            var response=await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)