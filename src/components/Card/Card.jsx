import React, { Component } from "react";
import "./Card.css";
import DoughnutChart from "../DoughnutChart.js/DoughnutChart";
import Chart from "react-apexcharts";

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        legend: {
          show: false // Hide the legend
        }
      },
      series: [44, 55, 41, 17, 15],
      
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="220" />
      </div>
    );
  }
}

const Card=({labels,datasets})=>{
  return (
    
    <div data-testid="cd-1" className="Card" >
    
    <DoughnutChart labels={labels} datasets={datasets}/>

    </div>
      
    
  )
}

export default Card;
