'use client'
import React from "react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

interface LineChartProps {
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

const LineChart:React.FC<LineChartProps> = ({data,title}) => {
    return ( <><Line data={data}/></> );
}
 
export default LineChart;