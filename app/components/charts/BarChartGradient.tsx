'use client'
import React, { useRef, useEffect, useState } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import {createGradient} from './GradientCreator'

ChartJS.register(...registerables);

interface BarChartGradientProps {
    data: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
      }[];
    };
    colorGrad:{
        start:string;
        mid?:string;
        end:string;
    }
  }

const BarChartGradient: React.FC<BarChartGradientProps> = ({data,colorGrad}) => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(()=>{
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chart_data = {
        ...data,
        datasets: data.datasets.map(dataset => ({
          ...dataset,
          backgroundColor: createGradient(chart.ctx, chart.chartArea,colorGrad),
        })),
    };

    setChartData(chart_data);

  },[])
  
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
          display:false,
        },
        gridLines:{
            display:false
        },
        ticks:{
            display:false
        }
      },
      x: {
        grid: {
            display:false,
        },
        gridLines:{
              display:false
        },
        ticks:{
              color:'#ffffff'
        }
      }
    }
  }
    
    return (
      
      <Chart ref={chartRef} type='bar' data={chartData} options={option_bar}/>
        
    );
}
 
export default BarChartGradient;