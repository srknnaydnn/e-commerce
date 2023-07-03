import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoy } from "../../actions/categoryAction";


const initialState = {

    data: [],
    loading: false,
    error: null
}

export const categoriesSlice = createSlice({

    name: "categories",
    initialState: initialState,
    extraReducers: (builder) => {

        builder.addCase(fetchCategoy.pending, (state, action) => {

            state.loading = true;

        })
        builder.addCase(fetchCategoy.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
    }
})
export default categoriesSlice.reducer;