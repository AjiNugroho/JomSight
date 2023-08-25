import ChartContainer from "../charts/ChartContainer";
import PieChart from "../charts/PieChart";

const Data = {
    labels: ['Online', 'Idle', 'Faulted'],
    datasets: [
      {
        label: 'count',
        data: [50,10,5],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(200, 100, 86)'
          ],
        borderColor: '#ffffff'
      },
    ],
  };

  const CPStatus = () => {
    return ( 
        <ChartContainer>
            <div className="flex flex-col w-full">
                <div className="flex px-8 py-4 justify-center text-2xl font-bold">
                By Status
                </div>
                <div className="flex w-full">
                <PieChart data={Data}/>
                </div>
            </div>
        </ChartContainer>
     );
  }
   
  export default CPStatus;