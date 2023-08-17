import Image from 'next/image'
import WidgetComponent from './components/widget/WidgetComponent'
import {FaExchangeAlt,FaUserFriends} from 'react-icons/fa'
import {MdCurrencyExchange} from 'react-icons/md'
import {IoCarSportSharp} from 'react-icons/io5'
import MonthlyRevenue from './components/ChartComponent/MonthlyRevenue'
import UtilizationRate from './components/ChartComponent/UtilizationRate'
export default function Home() {
  return (
    <div className='flex flex-col m-10 z-10 w-full gap-2'>
      <section className='flex flex-col w-full gap-4'>
        <h1 className='text-3xl font-bold'>Overview</h1>
        <div className='flex gap-2 lg:justify-between'>
          <WidgetComponent icon={<FaExchangeAlt size={20}/>} label="Transaction" value="200" growth={17} isGrow/>
          <WidgetComponent icon={<FaUserFriends size={20}/>} label="Users" value="1.2M" growth={20} isGrow/>
          <WidgetComponent icon={<MdCurrencyExchange size={20}/>} label="Revenue" value="50M" growth={5.21} isGrow={false}/>
          <WidgetComponent icon={<IoCarSportSharp size={20}/>} label="Session" value="200" growth={3.61} isGrow/>

        </div>
      </section>
      <section className='flex flex-col w-full h-3/6 mt-4 gap-2 lg:flex-row '>
        <div className=' w-full'>
          <MonthlyRevenue/>
        </div>
        <div className=' w-full'>
          <UtilizationRate/>
        </div>
      </section>
      <section className='flex w-full h-1/6'>

      </section>
    </div>
  )
}
