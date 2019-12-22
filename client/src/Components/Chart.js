import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const chart_1 = {
    chart: {
      borderColor: '##ffffff',
      borderWidth: 2,
      type: 'bar',
    },
    title: {
      text: 'eleftheria chart'
    },
    subtitle: {
      text: 'A demo'
  },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
        color: '#00cdbe'
      },

    ]
  };

  export class Chart extends React.Component {



  render() {

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chart_1} />
      </div>
 
        );
    }
  }
  