import React from 'react';
import './weather-icons.css';

export const WeatherIcons = ( { 
    icon,
    size = 'lg'
} ) => {

    let weatherIcon;
    let sizeIcon;

    switch ( icon ) {
        case 'sunny':
            weatherIcon = 'sunny';
            break;
        case 'mostlySunny':
            weatherIcon = 'mostlysunny';
            break;
        case 'mostlyCloudy':
            weatherIcon = 'mostlycloudy';
            break;
        case 'cloudy':
            weatherIcon = 'cloudy';
            break;
        case 'fog':
            weatherIcon = 'fog';
            break;
        case 'rain':
            weatherIcon = 'rain';
            break;
        case 'storm':
            weatherIcon = 'tstorms';
            break;
        case 'sleet':
            weatherIcon = 'sleet';
            break;
        case 'flurries':
            weatherIcon = 'flurries';
            break;
        case 'snow':
            weatherIcon = 'snow';
            break;
    
        default:
            weatherIcon = 'snow';
            break;
    }

    switch ( size ) {
        case 'lg':
            sizeIcon = 'weatherIconLg';
            break;
        case 'sm':
            sizeIcon = 'weatherIconSm';
            break;
    
        default:
            sizeIcon = 'weatherIconLg';
            break;
    }

    return (
        <div className={`weatherIcon ${ sizeIcon }`}>
            <div className={ weatherIcon }>
                <div className="inner"></div>
            </div>
        </div>
    )
}
