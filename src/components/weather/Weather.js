import Form from '../form/Form.js';
import Card from '../card/Card.js';
import { useEffect, useState } from 'react';

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
        <div className="mx-auto text-center">
            <div className="mx-auto max-w-md mt-16 mb-16 pt-20 pb-20 shadow-xl border-black bg-gradient-to-b from-blue-400 to-blue-200">
                <Form setZip={setZip} />
                {loading ? <h2 className="text-xl text-white">Loading...</h2> : <Card data={weather} zipcode={zip} />}
            </div>
        </div>
    )
}

export default Weather;
