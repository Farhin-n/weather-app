import React from 'react';
import moment from 'moment';
import '../index.css';
import { Button } from 'semantic-ui-react';

const refresh = () => {
	window.location.reload();
}
const KELVIN_TO_CEL = 273.15;

const CardExampleCard = ({ weatherData }) => (
	<div className='main'>
		<div className='top'>
			<p className="header">City Name: {weatherData.name}</p>
			<Button className="button" circular icon='refresh' onClick={refresh} />
		</div>
		<div className=''>
			<p className='day'>{moment().format('dddd')} <span>{moment().format('LL')}</span></p>
		</div>
		<div className=''>
			<p className='description'>{weatherData.weather[0].main}</p>
			<img className='icon' alt='weather icon' src={`${process.env.REACT_APP_ICON_URL}/${weatherData.weather[0].icon}.png`}></img>
		</div>
		<div className='flex'>
			<p className='temp'>Temprature: {(weatherData.main.temp - KELVIN_TO_CEL).toFixed(1)} &deg;C</p>
			<p className='temp'>Humidity: {weatherData.main.humidity} %</p>
		</div>
		<div className='flex'>
			<p className='ss'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
			<p className='ss'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
		</div>
	</div>
)

export default CardExampleCard;