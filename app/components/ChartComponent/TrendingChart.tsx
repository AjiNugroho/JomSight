'use client'

import ChartContainer from "../charts/ChartContainer";
import LineChart from "../charts/LineChart";

const trendData = {
    labels: ['January', 'February', 'March', 'April','May','June','July','August'],
    datasets: [
      {
        label: 'trend',
        data: [5,10,12,16,30,25,23,35],
        backgroundColor: ['#121212'
          ],
        borderColor: '#121212'
      },
    ],
  };

const TrendingChart = () => {
    return ( 
       <ChartContainer>
        <div className="flex flex-col w-full">
                <div className="flex px-8 py-4 justify-center text-2xl font-bold">
                Trend Time Series
                </div>
                <LineChart data={trendData}/>
            </div>
       </ChartContainer> 
     );
}
 
export default TrendingChart;