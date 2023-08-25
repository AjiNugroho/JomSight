import {MenuTrigger, Button, Popover, Menu, Item} from 'react-aria-components';
import {HiOutlineDotsHorizontal} from 'react-icons/hi'


interface WidgetFilterProps{
    ButtonStyle?:string;
    PopoverStyle?:string;
    MenuStyle?:string;
}

const WidgetFilter = ({ButtonStyle,PopoverStyle,MenuStyle}:WidgetFilterProps) => {
    return ( 
        <MenuTrigger>
            <Button className='border-none' aria-label="Menu">click</Button>
            <Popover className=''>
                <Menu className={MenuStyle+' rounded-xl'} onAction={alert}>
                    <Item className='hover:bg-blue-400 border-transparent' id="open">Open</Item>
                    <Item id="rename">Rename…</Item>
                    <Item id="duplicate">Duplicate</Item>
                    <Item id="share">Share…</Item>
                    <Item id="delete">Delete…</Item>
                </Menu>
            </Popover>
        </MenuTrigger>
     );
}
 
export default WidgetFilter;