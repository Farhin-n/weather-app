import React from 'react';
import moment from 'moment';
import '../index.css';
import cloudy from '../Assets/cloudy.png';
import thunderstorm from '../Assets/thunderstorm.png';
import snow from '../Assets/snow.png';
import shower_rain from '../Assets/shower_rain.png';
import rain from '../Assets/rain.png';
import mist from '../Assets/mist.png';
import few_clouds from '../Assets/few_clouds.png';
import clear_sky from '../Assets/clear_sky.png';
import broken_clouds from '../Assets/broken_clouds.png';

const KELVIN_TO_CEL = 273.15;
const TODAY = moment();
const ICONS = [cloudy, thunderstorm, snow, shower_rain, rain, mist, few_clouds, clear_sky, broken_clouds];

const getIcons = (weather) => {
	switch (weather) {
		case "shattered clouds":
			return ICONS[0];
		case "thunderstorm":
			return ICONS[1];
		case "snow":
			return ICONS[2];
		case "shower rain":
			return ICONS[3];
		case "rain":
			return ICONS[4];
		case "mist":
			return ICONS[5];
		case "few clouds":
			return ICONS[6];
		case "clear sky":
			return ICONS[7];
		case "broken clouds":
			return ICONS[8];
		default:
			return ICONS[0];
	}
}

const CardExampleCard = ({ weatherData }) => (
	<div className='main'>
		<div className='main-details'>
			<p className='thin big'>{TODAY.format('MMMM Do YYYY, dddd')}</p>
			<p className='biggest'>{TODAY.format('LT')}</p>
			<div className='image-container'>
				<img className='icon' src={getIcons(weatherData.weather[0].description)}></img>
			</div>
			<p className='bigger'>{weatherData.name}</p>
			<p className='biggest'>{(weatherData.main.temp - KELVIN_TO_CEL).toFixed(1)} &deg;C</p>
			<div className='range-container'>
				<p className='thin'>High: {(weatherData.main.temp_max - KELVIN_TO_CEL).toFixed(1)}</p>
				<p className='thin'>Low: {(weatherData.main.temp_min - KELVIN_TO_CEL).toFixed(1)}</p>
			</div>
			<p className='bigger'>{weatherData.weather[0].main}</p>
			<p className='thin medium'>{weatherData.weather[0].description}</p>
		</div>
	</div>
)

export default CardExampleCard;