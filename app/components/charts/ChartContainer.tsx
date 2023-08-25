'use client'

interface ChartContainerProps{
    children: React.ReactNode;
    bgColor?:string;
}

const ChartContainer:React.FC<ChartContainerProps> = ({children,bgColor}) => {
    return ( 
        
        <div className={`${bgColor?bgColor:'bg-white'} rounded-xl border h-full w-full mb-4 text-[#121212]
        shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl`}>
            {children}
        </div>
        
        
     );
}
 
export default ChartContainer;