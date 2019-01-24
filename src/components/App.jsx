import React from 'react';
import Info from './Info';
import Form from './Form';
import Weather from './Weather';
import ProgressBar from './ProgressBar';
const API_KEY = '15ba72b97e868a4af1652fafde0edb0b';

class App extends React.Component {
    state = {
        weather: '',
        weatherDescription: '',
        temperature: '',
        tempMax: '',
        tempMin: '',
        city: '',
        country: '',
        sunrise: '',
        sunset: '',
        wind: '',
        error: '',
        buttonName: 'Узнать погоду',
        loadingBarProgress: 0,
    };

    cleanDate = (...sun) => {
        let rise = new Date(sun[0] * 1000);
        let over = new Date(sun[1] * 1000);

        let riseHour = rise.getHours();
        let riseMin = `0 ${rise.getMinutes()}`;
        let riseTime = `${riseHour}ч. ${riseMin.substr(-2)}мин.`;

        let overHour = over.getHours();
        let overMin = `0 ${over.getMinutes()}`;
        let overTime = `${overHour}ч. ${overMin.substr(-2)}мин.`;

        return {
            rise: riseTime,
            over: overTime,
        };
    };

    getWeather = async event => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;

        if (Boolean(city)) {
            if (Boolean(country)) {
                this.setState({
                    buttonName: 'Погода узнается',
                });

                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`,
                )
                    .then(response => {
                        if (response.status === 200) {
                            return response.json();
                        } else {
                            this.setState({
                                error: 'Город не найден, openweathermap СПАСИБО. Попробуйте еще раз и желательно на английском. Этот api слишком предирчив',
                                weather: '',
                                weatherDescription: '',
                                temperature: '',
                                tempMax: '',
                                tempMin: '',
                                city: '',
                                country: '',
                                sunrise: '',
                                sunset: '',
                                wind: '',
                                buttonName: 'Узнать погоду'
                            });
                            setTimeout(() => {
                                this.setState({
                                    loadingBarProgress: 0,
                                });
                            }, 1000);
                        }
                    })
                    .then(data => {
                        console.log(data);
                        if (data) {
                            const sunManipulate = this.cleanDate(data.sys.sunrise, data.sys.sunset);
                            this.setState({
                                weather: data.weather[0].main,
                                weatherDescription: data.weather[0].description,
                                temperature: data.main.temp,
                                tempMax: data.main.temp_max,
                                tempMin: data.main.temp_min,
                                city: data.name,
                                country: data.sys.country,
                                sunrise: sunManipulate.rise,
                                sunset: sunManipulate.over,
                                wind: data.wind.speed,
                                error: '',
                                buttonName: 'Узнать погоду',
                                loadingBarProgress: 100,
                            });
                        }
                    });
            } else {
                this.setState({
                    error: 'Вы не указали страну',
                    weather: '',
                    weatherDescription: '',
                    temperature: '',
                    tempMax: '',
                    tempMin: '',
                    city: '',
                    country: '',
                    sunrise: '',
                    sunset: '',
                    wind: '',
                });
                setTimeout(() => {
                    this.setState({
                        loadingBarProgress: 0,
                    });
                }, 1000);
            }
        } else {
            this.setState({
                error: 'Вы не указали город',
                weather: '',
                weatherDescription: '',
                temperature: '',
                tempMax: '',
                tempMin: '',
                city: '',
                country: '',
                sunrise: '',
                sunset: '',
                wind: '',
            });

            setTimeout(() => {
                this.setState({
                    loadingBarProgress: 0,
                });
            }, 1000);
        }
    };

    updateData = value => {
        this.setState({
            loadingBarProgress: value,
        });
    };

    render() {
        return (
            <div>
                <ProgressBar
                    progress={this.state.loadingBarProgress}
                    updateData={this.updateData}
                />
                <div className="container">
                    <div className="main">
                        <div className="title-container">
                            <Info />
                        </div>
                        <div className="form-container">
                            <Form
                                getWeather={this.getWeather}
                                buttonName={this.state.buttonName}
                                updateData={this.updateData}
                            />
                            <Weather
                                weather={this.state.weather}
                                weatherDescription={this.state.weatherDescription}
                                temperature={this.state.temperature}
                                tempMax={this.state.tempMax}
                                tempMin={this.state.tempMin}
                                city={this.state.city}
                                country={this.state.country}
                                sunrise={this.state.sunrise}
                                sunset={this.state.sunset}
                                wind={this.state.wind}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
