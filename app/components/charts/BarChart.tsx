'use client'
import React from "react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2'
ChartJS.register(...registerables);
ChartJS.defaults.color = '#ffffff';

interface BarChartProps {
    data: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderColor: string;
      }[];
    };
  }

const BarChart: React.FC<BarChartProps> = ({data}) => {

    const option_bar = {
      plugins:{
        legend:{
          position:"right" as "right",
          align:"start" as "start",
          display:false
        }
      },
      scales: {
        y: {
          grid: {
            display:true,
            color:'white'
          }
        },
        x: {
          grid: {
            display:false
          }
        }
      }
    }
    
    return (
      
      <Bar data={data} options={option_bar} />
        
    );
}
 
export default BarChart;