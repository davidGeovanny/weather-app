import React from 'react';
import { WeatherIcon } from './WeatherIcon';

export const WeatherHeader = ({ temp, icon }) => {

    return (
        <div className="row justify-content-around mt-3 mb-3 weather__header">
            <span className="temperature">
                { temp }&deg;
            </span>
            <span className="icon">
                <WeatherIcon icon={ icon } />
            </span>
        </div>
    )
}
