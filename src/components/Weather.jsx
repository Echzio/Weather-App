import React from 'react';

class Weather extends React.Component {

    render() {
        return (
            <div>
                {Boolean(this.props.city) &&
                    <div>
                        <p><b>Город:</b> {this.props.city}</p>
                        <p><b>Страна:</b> {this.props.country}</p>
                        <p><b>Восход солнца в</b> {this.props.sunrise}</p>
                        <p><b>Закат солнца в</b> {this.props.sunset}</p>
                        <p><b>Температура:</b> {this.props.temperature} градусов</p>
                        <p><b>Максимальная температура: </b>{this.props.tempMax} градусов</p>
                        <p><b>Минимальная температура: </b>{this.props.tempMin} градусов</p>
                        <p>Ветер <b>{this.props.wind}</b> км/час</p>
                    </div>
                }
            </div>
        )
    }
}

export default Weather;