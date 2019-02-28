import React from 'react';
import { hot } from 'react-hot-loader';
import Info from './Info';
import Form from './Form';
import Weather from './Weather';
import ProgressBar from './ProgressBar';
import loop from './Loop';
//loop();

class App extends React.Component {
  state = {
    main: {
      weather: '',
      weatherimage: '',
      weatherDescription: '',
      temperature: '',
      tempMax: '',
      tempMin: '',
      wind: '',
    },
    loadingBarProgress: 0,
    buttonName: 'узнать погоду',
  };

  updateState = response => {
    this.setState({
      main: {
        weather: response.weather[0].main,
        weatherimage: `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
        weatherDescription: response.weather[0].description,
        temperature: response.main.temp,
        tempMax: response.main.temp_max,
        tempMin: response.main.temp_min,
        wind: response.wind.speed,
      },
    });
  };

  updateProgress = value => {
    this.setState({
      loadingBarProgress: value,
    });
  };

  render() {
    return (
      <div>
        <ProgressBar
          progress={this.state.loadingBarProgress}
          updateProgress={this.updateProgress}
        />
        <div className="container">
          <div className="main">
            <div className="title-container">
              <Info />
            </div>
            <div className="form-container">
              <Form
                updateState={this.updateState}
                buttonName={this.state.buttonName}
                updateProgress={this.updateProgress}
              />
              <Weather weather={this.state.main} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
