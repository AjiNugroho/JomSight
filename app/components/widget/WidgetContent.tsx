'use client'
interface WidgetContentProps{
    data:string
}
const WidgetContent:React.FC<WidgetContentProps> = ({data}) => {
    return ( 
        <div className='flex w-full px-2 mx-4 my-2 items-center '>
            <span className="text-4xl font-extrabold text-[#03e9f4] drop-shadow p-1">{data}</span>
        </div>
     );
}
 
export default WidgetContent;