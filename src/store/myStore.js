import { configureStore } from "@reduxjs/toolkit";
import countryDataReducer from "./countryDataSlice";
import countryDetailsReducer from "./countryDetailsSlice";

const myStore = configureStore({
    reducer: {
        countryData: countryDataReducer,
        countryDetails: countryDetailsReducer
    }
})

export default myStore