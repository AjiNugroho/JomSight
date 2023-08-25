import ChartContainer from "../charts/ChartContainer";
import PieChart from "../charts/PieChart";
import WidgetFilterV2 from "../widget/WidgetFilterV2";
const Data = {
    labels: ['<10kW', '<20kW', '<50kW','>100kW'],
    datasets: [
      {
        label: 'count',
        data: [10,10,40,60],
        backgroundColor: [
          "#77C2FE", "#249CFF", "#1578CF", "#0A579E", "#003870"
          ],
        borderColor: '#ffffff'
      },
    ],
  };

  const CPbyPower = () => {
    return ( 
      <ChartContainer>
      <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-[15%] text-2xl font-bold relative justify-center items-center">
          {/* <span className="flex w-4/6 justify-end py-2 px-12 md:pe-24 lg:pe-28 xl:pe-14"> */}
            <span className="">
              Power
            </span>
            <div className="absolute right-5">
            <WidgetFilterV2/>
            </div>
          
          </div>
          <div className="flex w-full justify-center">
          <PieChart data={Data}/>
          </div>
      </div>
      
  </ChartContainer>
     );
  }
   
  export default CPbyPower;