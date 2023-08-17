'use client'

interface ChartContainerProps{
    children: React.ReactNode;
}

const ChartContainer:React.FC<ChartContainerProps> = ({children}) => {
    return ( 
        
        <div className=" bg-white/20 rounded-lg border h-full w-full mb-4 text-white">
            {children}
        </div>
        
        
     );
}
 
export default ChartContainer;