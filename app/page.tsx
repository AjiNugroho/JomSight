import Image from 'next/image'
import WidgetComponent from './components/widget/WidgetComponent'
import {FaExchangeAlt,FaUserFriends} from 'react-icons/fa'
import {MdCurrencyExchange} from 'react-icons/md'
import {IoCarSportSharp} from 'react-icons/io5'
import MonthlyRevenue from './components/ChartComponent/MonthlyRevenue'
import UtilizationRate from './components/ChartComponent/UtilizationRate'
import TrendingChart from './components/ChartComponent/TrendingChart'
import CPbyPower from './components/ChartComponent/CPbyPower'
import CPbyConnType from './components/ChartComponent/CPbyConnType'
import CPbyBrand from './components/ChartComponent/CPbyBrand'
import SessionDurationTimeSeries from './components/ChartComponent/SessionDurationTimeSeries'
import ConsumtionTimeSeries from './components/ChartComponent/ConsumtionTimeSeries'
import CPStatus from './components/ChartComponent/CPStatus'
import DateRangeCustom from './components/CustomHook/DateRangeCustom'
import TestGradient from './components/ChartComponent/TestGradient'
export default function Home() {
  return (
    <div className='flex flex-col p-4 gap-2 text-gray-700'>
      <section className='w-full mb-4'><h1 className='text-2xl font-extrabold'>Overview</h1></section>
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4'>
        <WidgetComponent icon={<IoCarSportSharp size={20}/>} label="Sessions" value="1M" growth={3.61} isGrow/>
        <WidgetComponent bgColor='bg-[#ffdb8f]' icon={<FaExchangeAlt size={20}/>} label="Charge Points" value="500" growth={17} isGrow/>
        <WidgetComponent icon={<MdCurrencyExchange size={20}/>} label="Session Duration" value="50M" growth={5.21} isGrow={false}/>
        <WidgetComponent bgColor='bg-[#ffdb8f]' icon={<FaUserFriends size={20}/>} label="Avg Session" value="1.2M" growth={20} isGrow/>
        <WidgetComponent icon={<FaUserFriends size={20}/>} label="Total Consumption" value="1.2M" growth={20} isGrow/>        
        <WidgetComponent bgColor='bg-[#ffdb8f]' icon={<FaExchangeAlt size={20}/>} label="Avg Session Duration" value="200" growth={17} isGrow/>
        <WidgetComponent icon={<MdCurrencyExchange size={20}/>} label="Avg Consumption" value="50M" growth={5.21} isGrow={false}/>
        
      </section>
      <section className='w-full'><h1 className='text-2xl font-extrabold my-4'>Charge Points Distribution</h1></section>
      <section className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
        <CPbyPower/>
        <CPbyConnType/>
        <CPbyBrand/>
        {/* <CPStatus/> */}
      </section>
      <section className='w-full'><h1 className='text-2xl font-extrabold my-4'>Sessions Analytics</h1></section>
      <section className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
        <SessionDurationTimeSeries/>
        <ConsumtionTimeSeries/>
      </section>
      <section className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
        <TestGradient/>
      </section>
    </div>
  )
}
