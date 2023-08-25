import ProfilePicture from "./ProfilePicture";
import {HiMenu} from 'react-icons/hi';

interface TopNavProps {
    toggle: () => void;
  }

const TopNav:React.FC<TopNavProps> = ({toggle}) => {
    return ( 
        <>  <div className="flex items-center">
                <div className="p-1 hover:bg-neutral-700 rounded-lg cursor-pointer" onClick={toggle}>
                    <HiMenu size={20}/>
                </div>
            </div>
            
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col flex-nowrap">
                    <span className="">Welcome Amirul</span>
                </div>
                <div>
                <ProfilePicture/>
                </div>
                
            </div>
        </>
     );
}
 
export default TopNav;