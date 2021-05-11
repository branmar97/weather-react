const Card = ({ data, zipcode }) => {

    return (
        <div>
            <h1>Weather in "{zipcode}"</h1>
            <p>{data.weather[0].description}</p>
            <h2>{Math.floor(data.main.temp)}°</h2>
            <span>H:{Math.floor(data.main.temp_max)}° L:{Math.floor(data.main.temp_min)}°</span>
            <span>Feels like {Math.floor(data.main.feels_like)}°</span>
        </div>
    )
}

export default Card;