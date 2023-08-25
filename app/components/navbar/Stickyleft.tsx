interface StickyLeftProps{
    isShow:boolean;
    closeNav?:()=>void;
    isLargeScreen:boolean;
}
import {BiSolidDashboard} from 'react-icons/bi'
import {BsEvStation} from 'react-icons/bs'
import {IoCarSportSharp,IoBatteryCharging,IoClose} from 'react-icons/io5'
import {MdConstruction,MdCurrencyExchange,MdOutlineBugReport,MdPowerSettingsNew} from 'react-icons/md'
import {FaUsers,FaTicketAlt} from 'react-icons/fa'
import {RiCustomerService2Fill,RiSettings3Fill} from 'react-icons/ri'
import NavItem from "./NavItem";
import Separator from './Separator';
const StickyLeft:React.FC<StickyLeftProps> = ({isShow,closeNav,isLargeScreen}) => {
    return ( 
        <div className={` bg-[#1c3633] shadow-lg z-10 rounded-md fixed lg:relative
        transition-transform transform
        ${isShow && !isLargeScreen ? 'translate-x-0': !isShow&&!isLargeScreen?'-translate-x-full':!isShow&&isLargeScreen?'translate-x-0':''}
        flex flex-col items-center gap-2 text-white w-[200px]
        `}>
            <div className='flex w-full items-center p-4'>
                <h1 className='text-2xl font-bold mx-auto text-white'>Jom<strong className='text-[#ffdb8f]'>Sights</strong></h1>
                <span className='p-1 ms-auto me-0 rounded-lg hover:bg-neutral-300 hover:text-white cursor-pointer lg:hidden' onClick={closeNav}><IoClose size={30}/></span>
            </div>
            <Separator/>
            <span className='text-white/50 w-full ps-5'>DASHBOARD</span>
            <NavItem iconClassName={<BsEvStation size={20}/>} menuName="Charge Points"/>
            <NavItem iconClassName={<IoCarSportSharp size={20}/>} menuName="Sessions"/>
            <NavItem iconClassName={<IoBatteryCharging size={20}/>} menuName="Energy"/>
            <NavItem iconClassName={<MdConstruction size={20}/>} menuName="Fault"/>
            <NavItem iconClassName={<MdCurrencyExchange size={20}/>} menuName="Revenue"/>
            <NavItem iconClassName={<FaUsers size={20}/>} menuName="Users"/>
            {/* <Separator/>
            <NavItem iconClassName={<RiCustomerService2Fill size={20}/>} menuName="Help Center"/>
            <NavItem iconClassName={<FaTicketAlt size={20}/>} menuName="Tickets"/>
            <NavItem iconClassName={<MdOutlineBugReport size={20}/>} menuName="Bug Report"/> */}
            <Separator/>
            <span className='text-white/50 w-full ps-5'>SETTINGS</span>
            <NavItem iconClassName={<RiSettings3Fill size={20}/>} menuName="Settings"/>
            <NavItem iconClassName={<MdPowerSettingsNew size={20}/>} menuName="Log Out"/>
            <Separator/>
        </div>
     );
}
 
export default StickyLeft;