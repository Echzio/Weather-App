import React from 'react';

const Weather = props => {
  return (
    <div className="weather__info">
      <p className="weather__key">
        {props.weather.weather && <span className="weather__value">{props.weather.weather}, </span>}
        {props.weather.weatherDescription && (
          <span className="weather__value">{props.weather.weatherDescription}</span>
        )}
        {props.weather.weatherimage && <img src={props.weather.weatherimage} />}
      </p>
      {props.weather.temperature && (
        <p className="weather__key">
          <b>Температура: </b>
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
    </div>
  );
};

export default Weather;
