import React from 'react';
import Info from './Info';
import Form from './Form';
import Weather from './Weather';

const API_KEY = '15ba72b97e868a4af1652fafde0edb0b';

class App extends React.Component {

    /* create method */
    gettingWeather = async (event) => {
        event.preventDefault();
        /* принимаем данные */
        const api_url = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`);
        const data = await api_url.json();
        console.log(data);
    }


    render() {
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather />
            </div>
        )
    }
}

export default App;