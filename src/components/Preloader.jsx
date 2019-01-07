import React from 'react';


const Preloader = () => {
    return (
        <div id='preloader'>
            <div className='spinner'>
    <div className='dot'></div>
    <div className='dot'></div>
    <div className='dot'></div>
    <div className='dot'></div>
    <div className='dot'></div>
    <div className='dot'></div>
    <div className='dot'></div>
</div>
<svg>
    <defs>
        <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='8' result='blur' />
            <feColorMatrix in='blur' mode='matrix' values='
                1 0 0 0 0 
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 25 -8' result='goo' />
            <feBlend in='SourceGraphic' in2='goo' />
        </filter>
    </defs>
</svg>
        </div>
    )
}

export default Preloader;