import axios from "axios"

export const fetchCountryGuideApi = async () => {
    try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all")
        return data

    } catch (error) {
        throw error
    }
}

export const fetchCountryDetailsApi = async (countryName) => {
    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        return data
    } catch (error) {
        throw error
    }
}
