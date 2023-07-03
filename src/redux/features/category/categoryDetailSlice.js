import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryDetail } from "../../actions/categoryDetailAction";
const initialState = {
    data: [],
    loading: false,
    error: null
}
export const categoryDetailSlice = createSlice({

    name: "categoryDetail",
    initialState: initialState,
    extraReducers: (builder) => {

        builder.addCase(fetchCategoryDetail.pending, (state, action) => {
            state.loading = true;

        })
        builder.addCase(fetchCategoryDetail.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
    }
})
export default categoryDetailSlice.reducer;