import React from 'react';
import Button from './Button';
/*
* Statlefull
*/
class Form extends React.Component {
    render() {
        return (
            <form className="form__weather" onSubmit={this.props.getWeather}>
                <input type="text" name='city' placeholder='Город...' />
                <input type="text" name='country' placeholder='Страна...' />
                <Button
                    warning={this.props.warning}
                    error={this.props.error}
                />
            </form>
        )
    }
}

export default Form;