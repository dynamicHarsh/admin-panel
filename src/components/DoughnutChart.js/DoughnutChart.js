import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


const DoughnutChart = ({labels,datasets}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        maintainAspectRatio: false,
        responsive: true
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    }
  }, []);

  return (
    <div className="chart-container">
   
      <canvas ref={chartRef} ></canvas>
    </div>
  );
}

export default DoughnutChart;
