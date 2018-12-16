import React from 'react';

class Form extends React.Component{
    render() {
        return(
            <div>
               <form onSubmit={this.weatherMethod}>
                <input type="text" name='city' placeholder='Город'/>
                <button>узнать погоду</button>
               </form>
            </div>
        )
    }
}

export default Form;