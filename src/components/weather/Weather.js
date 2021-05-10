import { useEffect, useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [zip, setZip] = useState('23608')

    useEffect(
        () => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                return data.main
            })
        }
    );

    return <div></div>
}

export default Weather;
