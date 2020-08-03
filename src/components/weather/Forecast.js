import React, { Fragment } from "react";
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import { WeatherIcon } from "./WeatherIcon";

import { setCurrentWeather } from "../../actions/weatherActions";
import { findForecastByDate } from "../../helpers/filter";

import 'moment/locale/es';

export const Forecast = () => {

	const dispatch = useDispatch();

	const { forecast } = useSelector(state => state.weather);

	const onClick = ( dt ) => {
		const weather = findForecastByDate( forecast, dt );

		dispatch( setCurrentWeather( weather ) );
	};

	return (
		<div>
			<table className="table table-hover table-striped text-center">
				<thead>
					<tr>
						<th scope='col'>Fecha</th>
						<th scope='col'>Clima</th>
						<th scope='col'>Temperatura</th>
					</tr>
				</thead>
				<tbody>
					{
						forecast.map( item => (
							<Fragment key={ item.dt }>
								<tr className="pointer" onClick={ () => onClick( item.dt ) }>
									<td>{ moment( item.dt * 1000 ).format('l') }</td>
									<td>
										<WeatherIcon 
											icon={ item.weather[0].icon }
											aditionalClass='iconWeather'	
										/>
									</td>
									<td>{ item.temp.day }&deg;</td>
								</tr>
							</Fragment>
						))
					}
				</tbody>
			</table>
		</div>
	);
};
