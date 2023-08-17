'use client'
import Separator from "./Separator";
import {BiSolidDashboard} from 'react-icons/bi'
import {BsEvStation} from 'react-icons/bs'
import {IoCarSportSharp,IoBatteryCharging} from 'react-icons/io5'
import {MdConstruction,MdCurrencyExchange,MdOutlineBugReport,MdPowerSettingsNew} from 'react-icons/md'
import {FaUsers,FaTicketAlt} from 'react-icons/fa'
import {RiCustomerService2Fill,RiSettings3Fill} from 'react-icons/ri'
import NavItem from "./NavItem";
import ProfilePicture from "./ProfilePicture";
const Navbar = () => {
    return ( 
    <nav className="flex flex-col items-center h-full sm:w-20 lg:w-72 rounded-r-lg bg-[#52736E] text-[#f4f4f4]">
        <div className="w-full h-20 flex justify-between items-center px-6">
            <span className="font-bold text-xl text-[#f4f4f4] hidden lg:block">JOMSIGHT</span>
            <span className="bg-white/30 rounded p-1"><BiSolidDashboard size={20}/></span>
        </div>
        <Separator/>
        <div className="my-6 flex flex-col w-full px-6">
            <span className="text-xs text-[#f4f4f4]/50 hidden lg:block">ANALYTICS</span>
            <NavItem iconClassName={<BsEvStation size={20}/>} menuName="Charge Stations"/>
            <NavItem iconClassName={<IoCarSportSharp size={20}/>} menuName="Sessions"/>
            <NavItem iconClassName={<IoBatteryCharging size={20}/>} menuName="Energy"/>
            <NavItem iconClassName={<MdConstruction size={20}/>} menuName="Fault"/>
            <NavItem iconClassName={<MdCurrencyExchange size={20}/>} menuName="Revenue"/>
            <NavItem iconClassName={<FaUsers size={20}/>} menuName="Users"/>
        </div>
        <Separator/>
        <div className="my-6 flex flex-col w-full px-6">
            <span className="text-xs text-[#f4f4f4]/50 hidden lg:block">SERVICES</span>
            <NavItem iconClassName={<RiCustomerService2Fill size={20}/>} menuName="Help Center"/>
            <NavItem iconClassName={<FaTicketAlt size={20}/>} menuName="Tickets"/>
            <NavItem iconClassName={<MdOutlineBugReport size={20}/>} menuName="Bug Report"/>
        </div>
        <Separator/>
        <div className="my-6 flex flex-col w-full px-6">
            <span className="text-xs text-[#f4f4f4]/50 hidden lg:block">GENERAL</span>
            <NavItem iconClassName={<RiSettings3Fill size={20}/>} menuName="Settings"/>
            <NavItem iconClassName={<MdPowerSettingsNew size={20}/>} menuName="Log Out"/>
        </div>
        <Separator/>
        <ProfilePicture/>
    </nav> 
    );
}
 
export default Navbar;