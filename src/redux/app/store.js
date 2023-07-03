import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../features/product/productSlice'
import cardSlice from '../features/product/cardSlice'
import categoriesSlice from '../features/category/categoriesSlice'
import  categoryDetailSlice  from '../features/category/categoryDetailSlice'

export const store=configureStore({

    reducer:{
        card:cardSlice,
        product:productSlice,
        categories:categoriesSlice,
        categoryDetail:categoryDetailSlice
    }
})