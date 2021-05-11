import Form from '../form/Form.js';
import Card from '../card/Card.js';
import { useEffect, useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [zip, setZip] = useState('23608');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setWeather(data);
                setLoading(false);
            })
        },
        [zip]
    );

    return (
        <div>
            <Form setZip={setZip} />
            {loading ? <p>Loading...</p> : <Card data={weather} zipcode={zip} />}
        </div>
    )
}

export default Weather;
