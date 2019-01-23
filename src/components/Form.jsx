import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form className="form__weather" onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Город..." />
                <input type="text" name="country" placeholder="Страна..." />
                <button onClick={() => {this.props.updateData(30)}}>{this.props.buttonName}</button>
            </form>
        );
    }
}

export default Form;
