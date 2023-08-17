'use client'

import BarChart from "../charts/BarChart";
import ChartContainer from "../charts/ChartContainer";

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'revenue',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#52736e',
        borderColor: '#ffffff'
      },
    ],
  };

const MonthlyRevenue = () => {
    return (
        <ChartContainer>
          <div className="flex flex-col w-full">
            <div className="flex px-8 py-4 justify-center text-2xl font-bold">
              Gained Revenue by Months
            </div>
            <div className="px-10">
              <BarChart data={chartData}/>
            </div>
        
          </div>
            
        </ChartContainer>
      );
}
 
export default MonthlyRevenue;