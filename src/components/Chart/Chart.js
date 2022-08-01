import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    //pull out all the values from the dataPoints array and put them in an array via spread operator
    const totalMaximum=Math.max(...dataPointValues);

    return (
        <div className='chart'>
          {props.dataPoints.map((dataPoint) => (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          ))}
        </div>
      );
};

export default Chart;