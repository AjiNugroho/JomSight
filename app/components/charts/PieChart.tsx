'use client'
import React from "react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(...registerables);


interface PieChartProps {
    title?:string;
    data: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string;
      }[];
    };
  }

const PieChart: React.FC<PieChartProps> = ({data,title}) => {
  const option_pie = {
    plugins:{
      legend:{
        position:"bottom" as "bottom",
        align:"start" as "start",
      },
      title: {
        display: Boolean(title),
        text: title,
        position:"top" as "top",
        align:"center" as "center"
      }
    },
  }
    return ( <div>
        <Doughnut data={data} options={option_pie}/>
    </div> );
}
 
export default PieChart;