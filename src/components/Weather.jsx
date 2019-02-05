import React from 'react';
/*
 * Statless
 */
const Weather = props => {
  console.log(props.weather);
  return (
    <div className="weather__info">
      <p className="weather__key">
        {props.weather.weather && <span className="weather__value">{props.weather.weather} </span>}
        {props.weather.weatherDescription && (
          <span className="weather__value">({props.weather.weatherDescription})</span>
        )}
      </p>
      {props.weather.city && props.weather.country && (
        <p className="weather__key">
          <b>Город:</b>{' '}
          <span className="weather__value">
            {props.weather.city}, {props.weather.country}
          </span>
        </p>
      )}
      {props.weather.sunrise && (
        <p className="weather__key">
          <b>Восход солнца в</b> <span className="weather__value">{props.weather.sunrise}</span>
        </p>
      )}
      {props.weather.sunset && (
        <p className="weather__key">
          <b>Закат солнца в</b> <span className="weather__value">{props.weather.sunset}</span>
        </p>
      )}
      {props.weather.temperature && (
        <p className="weather__key">
          <b>Температура:</b>{' '}
          <span className="weather__value">{props.weather.temperature} градусов</span>
        </p>
      )}
      {props.weather.tempMax && (
        <p className="weather__key">
          <b>Максимальная температура: </b>
          <span className="weather__value">{props.weather.tempMax} градусов</span>
        </p>
      )}
      {props.weather.tempMin && (
        <p className="weather__key">
          <b>Минимальная температура: </b>
          <span className="weather__value">{props.weather.tempMin} градусов</span>
        </p>
      )}
      {props.weather.wind && (
        <p className="weather__key">
          <b>
            Ветер <span className="weather__value">{props.weather.wind}</span> км/час
          </b>
        </p>
      )}
      {props.error && (
        <p className="weather__error">
          <b>{props.error}</b>
        </p>
      )}
    </div>
  );
};

export default Weather;
