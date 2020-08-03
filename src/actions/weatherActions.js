import { types } from "../types/types";
import { fetchToApi } from "../helpers/fetch";

import options from '../data/temperature.list.json';

export const setError = () => {
    return {
        type: types.weatherSetError
    }
};

export const cleanError = () => {
    return {
        type: types.weatherCleanError
    }
};

const setLoading = () => {
    return {
        type: types.weatherSetLoading
    }
};

const cleanLoading = () => {
    return {
        type: types.weatherCleanLoading
    }
};

export const setCity = ( city ) => {
    return {
        type: types.weatherSetCity,
        payload: {
            city
        }
    }
};

export const setTemperature = ( temp ) => {
    return {
        type: types.weatherSetTemp,
        payload: {
            temp
        }
    }
};

export const startLoadForecast = () => {
    return async ( dispatch, getState ) => {

        const { temp, city } = getState().weather;
        const { lat, lng } = city;

        const units = options[ temp ].unit;

        dispatch( setLoading() );

        try {
            const resp = await fetchToApi(`onecall?lat=${ lat }&lon=${ lng }&units=${ units }`);
            const body = await resp.json();
    
            dispatch( cleanError() );
            dispatch( setCurrentWeather( body.daily[0] ) );
            dispatch( loadedForecast( body.daily ) );
        } catch (error) {
            console.log(error);
            dispatch( setError() );
        }

        dispatch( cleanLoading() );
    }
};

export const loadedForecast = ( forecast ) => {
    return {
        type: types.weatherLoadedForecast,
        payload: {
            forecast
        }
    }
};

export const setCurrentWeather = ( weather ) => {
    return {
        type: types.weatherSetCurrent,
        payload: {
            weather
        }
    }
};