import React from 'react';
/*
* Statless
*/
const Form = (props) => {
    return (
        <form className="form__weather" onSubmit={props.getWeather}>
            <input type="text" name='city' placeholder='Город...' />
            <input type="text" name='country' placeholder='Страна...' />
            <button>узнать погоду</button>
        </form>
    )
}

export default Form;