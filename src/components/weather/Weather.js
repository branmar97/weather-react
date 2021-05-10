import Form from '../form/Form.js';
import Card from '../card/Card.js';
import { useEffect, useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [zip, setZip] = useState('23608')
    const [weather, setWeather] = useState({})

    useEffect(
        () => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setWeather(data.main)
            })
        },
        [zip]
    );

    return (
        <div>
            <Form setZip={setZip} />
            <Card weather={weather} />
        </div>
    )
}

export default Weather;
