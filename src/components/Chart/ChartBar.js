import React from 'react';
import '../Chart/ChartBar.css'

const ChartBar = props => {

    let barFillHeight = '0%';

    if (props.maxValue > 0){ //this will give us the percentage by which the bar should be filled!
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; 
    }

    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height:barFillHeight }}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    
    );
}

export default ChartBar;