import React, { Component } from "react";
import "./Card.css";

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

const Card=()=>{
  return (
    <>
    <div className="Card">
    <Donut/>
    <div className="additional-info Upcoming">
        <div>Upcoming</div>
        <div>100</div>
    </div>
    <div className="additional-info Ongoing">
        <div>Ongoing</div>
        <div>90</div>
    </div>
    <div className="additional-info Completed">
        <div>Completed</div>
        <div>50</div>
    </div>
    </div>
      
    </>
    
  )
}

export default Card;
