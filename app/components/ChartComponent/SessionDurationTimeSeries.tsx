
import BarChart from "../charts/BarChart";
import ChartContainer from "../charts/ChartContainer";

interface ChartProps{
  bgColor?:string;
}

const Data = {
    labels: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'duration',
        data: [12, 19, 3, 5, 2,6,9,10,9,10,11,14],
        backgroundColor: '#52736e',
        borderColor: '#ffffff'
      },
    ],
};
const SessionDurationTimeSeries = ({bgColor}:ChartProps) => {
    return ( 
        <ChartContainer bgColor={bgColor}>
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
 
export default SessionDurationTimeSeries;