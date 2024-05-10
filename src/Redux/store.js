import { configureStore } from "@reduxjs/toolkit";
import cleanCitySlice from "./slice/cleanCitySlice";


export const store = configureStore({
    reducer:{
        Clean_City: cleanCitySlice
    }
})