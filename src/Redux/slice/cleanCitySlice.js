/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import { Pricing } from "../pricing";


const initialState = {
    isOpenFaq: [false, false, false, false],
    formInput: {
        name: "",
        surname: "",
        email: "",
        password: "",
    },
    moveToAddress: false,
    Pricing: Pricing,
    address: {
        street: "",
        city: "",
    }
}

export const cleanCitySlice = createSlice({
    name: "Clean_City",
    initialState,

    reducers:{
        setIsOpenFaq:(state, action) => {
            const {index, isOpen} = action.payload
            state.isOpenFaq[index] =   isOpen
        },
        setFormInput:(state, action) => {
            const {name, value } = action.payload
            state.formInput[name] = value
        },
        setMoveToAddress:(state, action) => {
            state.moveToAddress = action.payload
        },
        setPricing:(state, action) => {
            state.Pricing = action.payload
        },
        setInputAddress: (state, action) => {
            const {name, value} = action.payload
            state.address[name] = value
        }
    }
})
export const { setIsOpenFaq, setFormInput, setMoveToAddress, setPricing, setInputAddress} = cleanCitySlice.actions
export default cleanCitySlice.reducer