import React from 'react';
import moment from 'moment';

import 'moment/locale/es';

export const WeatherInfo = ({ weather, city }) => {

    const {
        dt,
        temp,
        feels_like,
        humidity,
        pressure,
        sunrise,
        sunset,
    } = weather;

    const { day: tDay, min, max } = temp;
    const { day: flDay } = feels_like;

    const date = moment( dt * 1000 ).format('LL');
    const dateSunrise = moment( sunrise * 1000 ).format('LTS');
    const dateSunset = moment( sunset * 1000 ).format('LTS');

    return (
        <div className="row justify-content-between">
            <div className="container text-center mb-2">
                <div className="col-12">
                    <h5>{ city }</h5>
                    <h4>{ date }</h4>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">Sensación térmica: </b>
                            { flDay }&deg;
                        </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">Temperatura actual: </b>
                            { tDay }&deg;
                        </span>
                    </div>
                </div>
                <hr/>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">Temperatura máxima: </b>
                            { max }&deg;
                        </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">Temperatura mínima: </b>
                            { min }&deg;
                        </span>
                    </div>
                </div>
                <hr/>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">Humedad: </b>
                            { humidity }%
                        </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">Presión: </b>
                            { pressure } <em>atm</em>
                        </span>
                    </div>
                </div>
                <hr/>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">El sol sale a las...: </b>
                            { dateSunrise }
                        </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <span>
                            <b className="h6">El sol entra a las...: </b>
                            { dateSunset }
                        </span>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
