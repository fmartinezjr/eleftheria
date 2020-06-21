import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

export class Chart extends React.Component {
  state = {
    transaction_list: []
  };

  componentDidMount() {
    axios.get(`/get/transaction`).then(res => {
      const transaction_list = res.data;
      this.setState({ transaction_list });
    });
  }

  render() {
    const chartData = this.state.transaction_list;
    const priceData = chartData.map(element => element.amount);

    const chartDetails_1 = {
      chart: {
        borderColor: "##ffffff",
        borderWidth: 2,
        type: "bar",
        width: 600,
        marginLeft: 50
      },
      title: {
        text: "Spending Chart"
      },
      subtitle: {
        text: "See your spending"
      },
      series: [
        {
          data: priceData,
          color: "#00cdbe"
        }
      ]
    };

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartDetails_1} />
      </div>
    );
  }
}
