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

    /* create method */
    getWeather = async (event) => {
        event.preventDefault();

        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;

        // проверка на пустоту
        if (Boolean(city)) {
            if (Boolean(country)) {
                const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
                const data = await api_call.json();             

                this.setState({
                    temperature: data.main.temp,
                    tempMax: data.main.temp_max,
                    tempMin: data.main.temp_min,
                    city: data.name,
                    country: data.sys.country,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
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