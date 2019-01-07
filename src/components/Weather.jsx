import React from 'react';
/*
* Statless
*/
const Weather = (props) => {
    return (
        <div className="weather__info">
            <p className="weather__key">
                {props.weather && <span className="weather__value">{props.weather} </span>}
                {props.weatherDescription && <span className="weather__value">({props.weatherDescription})</span>}
            </p>
            {props.city && props.country && <p className="weather__key"><b>Город:</b> <span className="weather__value">{props.city}, {props.country}</span></p>}
            {props.sunrise && <p className="weather__key"><b>Восход солнца в</b> <span className="weather__value">{props.sunrise}</span></p>}
            {props.sunset && <p className="weather__key"><b>Закат солнца в</b> <span className="weather__value">{props.sunset}</span></p>}
            {props.temperature && <p className="weather__key"><b>Температура:</b> <span className="weather__value">{props.temperature} градусов</span></p>}
            {props.tempMax && <p className="weather__key"><b>Максимальная температура: </b><span className="weather__value">{props.tempMax} градусов</span></p>}
            {props.tempMin && <p className="weather__key"><b>Минимальная температура: </b><span className="weather__value">{props.tempMin} градусов</span></p>}
            {props.wind && <p className="weather__key"><b>Ветер <span className="weather__value">{props.wind}</span> км/час</b></p>}
            {props.error && <p className="weather__error"><b>{props.error}</b></p>}
        </div>
    )
}

export default Weather;