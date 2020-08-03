import { types } from "../types/types";

const initialState = {
    current: null,
    forecast: [],
    city: null,
    temp: 0,
    loading: false,
    error: false,
};

export const weatherReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.weatherSetError:
            return {
                ...state,
                error: true,
                city: null,
                current: null,
                forecast: [],
            };
        case types.weatherCleanError:
            return {
                ...state,
                error: false,
            };
        case types.weatherSetLoading:
            return {
                ...state,
                loading: true,
            };
        case types.weatherCleanLoading:
            return {
                ...state,
                loading: false,
            };
        case types.weatherSetCity:
            return {
                ...state,
                city: action.payload.city,
            };
        case types.weatherSetTemp:
            return {
                ...state,
                temp: action.payload.temp,
            };
        case types.weatherLoadedForecast:
            return {
                ...state,
                forecast: action.payload.forecast,
            };
        case types.weatherSetCurrent:
            return {
                ...state,
                current: action.payload.weather,
            };
    
        default:
            return state;
    }
}