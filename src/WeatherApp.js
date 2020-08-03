import React from 'react';
import { Provider } from "react-redux";
import { store } from './store/store';
import { WeatherScreen } from './components/weather/WeatherScreen';

import './assets/css/bootstrap.min.css';
import './assets/css/custom-styles.css';
import './assets/fontawesome-free/css/all.min.css';

export const WeatherApp = () => {
    return (
        <Provider store={ store }>
            <WeatherScreen />
        </Provider>
    );
}
