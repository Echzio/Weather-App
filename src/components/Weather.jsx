import React from 'react';

class Weather extends React.Component {

    render() {
        return (
            <div>
                {Boolean(this.props.city) &&
                    <div>
                        <p>Город: {this.props.city}</p>
                        <p>Страна: {this.props.country}</p>
                        <p>Восход солнца будет в : {this.props.sunrise}</p>
                        <p>Закат солнца в : {this.props.sunset}</p>
                        <p>Температура {this.props.temperature} по Цельсию</p>
                        <p>Максимальная температура составит {this.props.tempMax} градусов</p>
                        <p>Минимальная температура будет {this.props.tempMin} градусов</p>
                        <p>Ветер {this.props.wind} км/час</p>
                    </div>
                }
            </div>
        )
    }
}

export default Weather;