import {Route, Routes} from "react-router-dom";
import { Product } from "../Product";
import { CategoryDetails } from "../CategoryDetail";

export const Router=()=>{

    return(
        <div>
            <Routes>
                <Route path="/" element={<Product/>}></Route>
                <Route path="/category/:categoryName" element={<CategoryDetails/>}></Route>
            </Routes>
        </div>
    )
}