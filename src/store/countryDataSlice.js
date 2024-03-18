import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCountryGuideApi } from "../api";




export const fetchCountryGuide = createAsyncThunk("fetchCountryGuide", async () => {
    const data = await fetchCountryGuideApi();
    return data
})





const countryDataSlice = createSlice({
    name: "countryData",
    initialState: {
        countryDataCollection: [],
        filterDataStore: [],
        lodingStatus: false
    },
    reducers: {

        addFilterData: (state, action) => {
            console.log(action);
            state.filterDataStore = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryGuide.fulfilled, (state, action) => {
                state.countryDataCollection = action.payload
                state.lodingStatus = false
            })
            .addCase(fetchCountryGuide.pending, (state, action) => {
                state.lodingStatus = true
            })
    }
})

export const { addFilterData } = countryDataSlice.actions

export default countryDataSlice.reducer