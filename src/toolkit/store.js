import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import weatherSlice from "./slices/weather.slice";
import weatherForecastSlice from "./slices/weather_forecast.slice";


const persistConfig = {
    key: "root",
    storage,
};
const rootReducer = combineReducers({
    weather: weatherSlice,
    weatherForecast: weatherForecastSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: { weather: weatherSlice, weatherForecast: weatherForecastSlice},
    // reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
export default store;

