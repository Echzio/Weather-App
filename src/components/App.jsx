import React from 'react';
import Info from './Info';
import Form from './Form';
import Weather from './Weather';

const API_KEY = '15ba72b97e868a4af1652fafde0edb0b';

class App extends React.Component {

    state = {
        temperature: '',
        tempMax: '',
        tempMin: '',
        city: '',
        country: '',
        sunrise: '',
        sunset: '',
        wind: '',
        error: ''
    }

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
            over: overTime
        }
    }


    getWeather = async (event) => {
        event.preventDefault();

        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;

        if (Boolean(city)) {
            if (Boolean(country)) {
                const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
                const data = await api_call.json();
                const sunManipulate = this.cleanDate(data.sys.sunrise, data.sys.sunset);

                this.setState({
                    temperature: data.main.temp,
                    tempMax: data.main.temp_max,
                    tempMin: data.main.temp_min,
                    city: data.name,
                    country: data.sys.country,
                    sunrise: sunManipulate.rise,
                    sunset: sunManipulate.over,
                    wind: data.wind.speed,
                    error: ''
                });

            } else {
                alert('Вы забыли указать страну!');
            }
        } else {
            alert('Ой, кажется вы забыли указать свой город');
        }
    }


    render() {
        return (
            <div>
                <Info />
                <Form getWeather={this.getWeather} />
                <Weather
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
        )
    }
}

export default App;