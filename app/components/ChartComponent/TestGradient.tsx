'use client'

import BarChartGradient from "../charts/BarChartGradient"
import ChartContainer from "../charts/ChartContainer";

const Data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'test',
        data: [12, 19, 3, 5, 2],
      },
    ],
};

const ColorGrad={
    start:'rgba(255,219,143,0.1)',
    mid:'rgba(255,219,143,0.6)',
    end:'rgba(255,219,143,0.1)'
}

const TestGradient = () => {
    return ( 
        <div className='bg-[#1c3633] rounded-xl border h-full w-full mb-4 text-white
        shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl'>
          <div className="flex flex-col w-full">
            <div className="flex px-8 py-4 justify-center text-2xl font-bold">
              Test
            </div>
            <div className="px-10">
              <BarChartGradient data={Data} colorGrad={ColorGrad}/>
            </div>
        
          </div>
            
        </div>
        

     );
}
 
export default TestGradient;