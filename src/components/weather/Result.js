import React from 'react'
import { WeatherSelected } from './WeatherSelected'
import { Forecast } from './Forecast'

export const Result = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center pt-5 result__container">
                <div className="col-lg-6 col-md-6 col-12 mb-5">
                    <WeatherSelected />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <h5 className="text-center">Pronóstico (8 días)</h5>
                    <Forecast />
                </div>
            </div>
		</div>
    )
}
