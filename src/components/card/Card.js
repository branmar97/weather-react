const Card = ({ data, zipcode }) => {

    return (
        <div className="text-white">
            <h1 className="text-2xl drop-shadow-lg">Weather in "{zipcode}"</h1>
            <small className="capitalize">{data.weather[0].description}</small>
            <h2 className="text-6xl font-bold">{Math.floor(data.main.temp)}°</h2>
            <small>Feels like {Math.floor(data.main.feels_like)}°</small>
        </div>
    )
}

export default Card;