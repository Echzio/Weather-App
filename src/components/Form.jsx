import React from 'react';
import GetWeatherApi from './API';

class Form extends React.Component {
  GetWeather = e => {
    e.preventDefault();
    this.props.updateProgress(50);
    GetWeatherApi(e.target.city.value, e.target.country.value, this._Data);
  };

  _Data = response => {
    this.props.updateState(response);
    this.props.updateProgress(response.loadingProgress);
  };

  render() {
    return (
      <form className="form__weather" onSubmit={this.GetWeather}>
        <input type="text" name="city" placeholder="Город..." />
        <input type="text" name="country" placeholder="Страна..." />
        <button>{this.props.buttonName}</button>
      </form>
    );
  }
}

export default Form;
