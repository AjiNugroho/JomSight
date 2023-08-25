import ChartContainer from "../charts/ChartContainer";
import PieChart from "../charts/PieChart";
import WidgetFilterV2 from "../widget/WidgetFilterV2";

const Data = {
    labels: ['JomCharge', 'ABB', 'EVC','test1','test2'],
    datasets: [
      {
        label: 'count',
        data: [10,10,40,30,20],
        backgroundColor: [
          "#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"
          ],
        borderColor: '#ffffff'
      },
    ],
  };
const CPbyBrand = () => {
    return ( 
        <ChartContainer>
            <div className="flex flex-col w-full h-full">
                <div className="flex w-full h-[15%] text-2xl font-bold relative justify-center items-center">
                {/* <span className="flex w-4/6 justify-end py-2 px-12 md:pe-24 lg:pe-28 xl:pe-14"> */}
                  <span className="">
                    Brand
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
 
export default CPbyBrand;