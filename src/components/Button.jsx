import React from 'react';

class Button extends React.Component {
    state = {
        disabled: false,
        text: 'узнать погоду',
        class: ''
    }
    ButtonDisabled = async () => {
        console.log(this.props.error);
        this.setState({
            // disabled: true,
            text: 'поиск погоды',
            // class: 'form-disabled'
        })
    }
    render() {
        return (
            <button className={this.state.class} disabled={this.state.disabled} onClick={this.ButtonDisabled}>{this.state.text}</button>
        )
    }
}

export default Button;