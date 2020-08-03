import React from "react";
import icon01d from "../../assets/weather-icon-list/01d.png";
import icon01n from "../../assets/weather-icon-list/01n.png";
import icon02d from "../../assets/weather-icon-list/02d.png";
import icon02n from "../../assets/weather-icon-list/02n.png";
import icon03d from "../../assets/weather-icon-list/03d.png";
import icon03n from "../../assets/weather-icon-list/03n.png";
import icon04d from "../../assets/weather-icon-list/04d.png";
import icon04n from "../../assets/weather-icon-list/04n.png";
import icon09d from "../../assets/weather-icon-list/09d.png";
import icon09n from "../../assets/weather-icon-list/09n.png";
import icon10d from "../../assets/weather-icon-list/10d.png";
import icon10n from "../../assets/weather-icon-list/10n.png";
import icon11d from "../../assets/weather-icon-list/11d.png";
import icon11n from "../../assets/weather-icon-list/11n.png";
import icon13d from "../../assets/weather-icon-list/13d.png";
import icon13n from "../../assets/weather-icon-list/13n.png";
import icon50d from "../../assets/weather-icon-list/50d.png";
import icon50n from "../../assets/weather-icon-list/50n.png";

export const WeatherIcon = ({ icon, aditionalClass = '' }) => {
	let imgIcon;

	switch (icon) {
		case "01d":
			imgIcon = icon01d;
			break;
		case "01n":
			imgIcon = icon01n;
			break;
		case "02d":
			imgIcon = icon02d;
			break;
		case "02n":
			imgIcon = icon02n;
			break;
		case "03d":
			imgIcon = icon03d;
			break;
		case "03n":
			imgIcon = icon03n;
			break;
		case "04d":
			imgIcon = icon04d;
			break;
		case "04n":
			imgIcon = icon04n;
			break;
		case "09d":
			imgIcon = icon09d;
			break;
		case "09n":
			imgIcon = icon09n;
			break;
		case "10d":
			imgIcon = icon10d;
			break;
		case "10n":
			imgIcon = icon10n;
			break;
		case "11d":
			imgIcon = icon11d;
			break;
		case "11n":
			imgIcon = icon11n;
			break;
		case "13d":
			imgIcon = icon13d;
			break;
		case "13n":
			imgIcon = icon13n;
			break;
		case "50d":
			imgIcon = icon50d;
			break;
		case "50n":
			imgIcon = icon50n;
			break;

		default:
			imgIcon = icon01d;
			break;
	}

	return <img src={imgIcon} alt="Weather icon" className={ aditionalClass } />;
};
