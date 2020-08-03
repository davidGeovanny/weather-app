import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { WeatherHeader } from './WeatherHeader';
import { WeatherInfo } from './WeatherInfo';

export const WeatherSelected = () => {

    const { current, city: { city, admin } } = useSelector(state => state.weather);
    
    return (
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <WeatherHeader 
                        temp={ current.temp.day }
                        icon={ current.weather[0].icon }
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <WeatherInfo 
                        weather={ current }
                        city={ `${ city }, ${ admin }` } 
                    />
                </div>
            </div>
        </Fragment>
    )
}
