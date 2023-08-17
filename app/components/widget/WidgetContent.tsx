'use client'
interface WidgetContentProps{
    data:string
}
const WidgetContent:React.FC<WidgetContentProps> = ({data}) => {
    return ( 
        <div className='flex w-full items-center sm:justify-center lg:justify-normal lg:mx-6 lg:my-2 '>
            <span className="sm:text-2xl lg:text-4xl font-extrabold">{data}</span>
        </div>
     );
}
 
export default WidgetContent;