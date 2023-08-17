import ChartContainer from "../charts/ChartContainer";
import PieChart from "../charts/PieChart";

const statusData = {
    labels: ['Online', 'Offline', 'Iddle'],
    datasets: [
      {
        label: 'ulitization',
        data: [75,10,15],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        borderColor: '#ffffff'
      },
    ],
  };

const powerData={
    labels: ['2kW', '5kW', '10kW', '20kW', '50kW', '100kW'],
    datasets: [
      {
        label: 'ulitization',
        data: [5,7,10,12,20,15],
        backgroundColor: [
            'red',
            'green',
            'blue',
            'yellow',
            'purple',
            'brown'
          ],
        borderColor: '#ffffff'
      },
    ],
};

const UtilizationRate = () => {
    return ( 
        <ChartContainer>
            <div className="flex flex-col w-full">
                <div className="flex px-8 py-4 justify-center text-2xl font-bold">
                Utilization Ratio
                </div>
                <div className="flex w-full">
                    <div className="w-1/2 ps-4">
                        <PieChart data={statusData} title="By Status"/>
                    </div>
                    <div className="w-1/2 ">
                        <PieChart data={powerData} title="By Power"/>
                    </div>
                </div>
                
            
            </div>
            
        </ChartContainer>
     );
}
 
export default UtilizationRate;