
import BarChart from "../charts/BarChart";
import ChartContainer from "../charts/ChartContainer";

const Data = {
    labels: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'duration',
        data: [12,13,14,25,20,23,25,30,28,28,30,29],
        backgroundColor: '#52736e',
        borderColor: '#ffffff'
      },
    ],
  };
const ConsumtionTimeSeries = () => {
    return ( 
        <ChartContainer>
          <div className="flex flex-col w-full">
            <div className="flex px-8 py-4 justify-center text-2xl font-bold">
              Session Duration Over Time
            </div>
            <div className="px-10">
              <BarChart data={Data}/>
            </div>
        
          </div>
            
        </ChartContainer>
     );
}
 
export default ConsumtionTimeSeries;