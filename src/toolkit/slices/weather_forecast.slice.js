import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {appid} from "../../data/appid";
import {getClosestTime} from "../../helper/getClosestTime";
import {getGroupingForcastData} from "../../helper/getGroupingForcastData";

export const fetchWeatherForecastAsync = createAsyncThunk(
    "weather/fetchForecast",
    async (payload, thunkAPI) => {
        try {
            // console.log('fetch',payload.location);
            const res_en = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload.location}&appid=${appid}&lang=en&units=${payload.unit}&cnt=40`);
            const res_fa = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload.location}&appid=${appid}&lang=fa&units=${payload.unit}&cnt=48`);
            // console.log('grouping response', getGroupingForcastData(res_en.data.list), getGroupingForcastData(res_fa.data.list));
            return {en: getClosestTime(res_en.data.list), fa: getClosestTime(res_fa.data.list)};

        } catch (error) {
            console.log(error)
        }
    }
)

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: {},
}

const weatherForecastSlice = createSlice({
    name: 'weather-forecast',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherForecastAsync.pending, (state) => {
            state.isReceived = false
            state.loading = true
            state.error = "";
        });
        builder.addCase(fetchWeatherForecastAsync.fulfilled, (state, action) => {
            state.isReceived = true
            state.loading = false
            state.data = action.payload
        });
        builder.addCase(fetchWeatherForecastAsync.rejected, (state, action) => {
            state.data = action.payload
            state.isReceived = false
            state.loading = false
            state.error = action.error.message
        });
    },
})

export default weatherForecastSlice.reducer;
