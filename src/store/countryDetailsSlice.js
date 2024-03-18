import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCountryDetailsApi } from "../api";


export const fetchCountryDetails = createAsyncThunk("fetchCountryDetails", async (countryName) => {
    const data = await fetchCountryDetailsApi(countryName);
    return data
})



const countryDetailsSlice = createSlice({
    name: "countryDetails",
    initialState: {
        countryDetailsData: [],
        lodingSatus: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryDetails.fulfilled, (state, action) => {

                state.countryDetailsData = action.payload;
                state.lodingSatus = false
            })
            .addCase(fetchCountryDetails.pending, (state, action) => {
                state.countryDetailsData = []
                state.lodingSatus = true
            })
    }
})


export default countryDetailsSlice.reducer