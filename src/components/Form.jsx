import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name='city' placeholder='Город...' />
                <input type="text" name='country' placeholder='Страна...' />
                <button>узнать погоду</button>
            </form>
        )
    }
}

export default Form;