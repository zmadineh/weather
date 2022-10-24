import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {appid} from "../../data/appid";

export const fetchWeatherAsync = createAsyncThunk(
    "weather/fetch",
    async (payload, thunkAPI) => {
        const res_en = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${payload.location}&appid=${appid}&lang=en&units=${payload.unit}`);
        const res_fa = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${payload.location}&appid=${appid}&lang=fa&units=${payload.unit}`);
        return {en: res_en.data, fa: res_fa.data};
    }
)

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: {},
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherAsync.pending, (state) => {
            state.isReceived = false
            state.loading = true
            state.error = "";
        });
        builder.addCase(fetchWeatherAsync.fulfilled, (state, action) => {
            state.isReceived = true
            state.loading = false
            state.data = action.payload
        });
        builder.addCase(fetchWeatherAsync.rejected, (state, action) => {
            state.data = action.payload
            state.isReceived = false
            state.loading = false
            state.error = action.error.message
        });
    },
})

// export const weatherSelector = (state): IState => state

export default weatherSlice.reducer;

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;