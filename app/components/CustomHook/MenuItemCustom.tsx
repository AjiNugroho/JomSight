'use client'
import React from 'react';
import {useMenuItem, AriaMenuItemProps } from 'react-aria';
import {TreeState} from 'react-stately'


interface MenuItemProps<T extends object> {
    item: {
      key: string;
      rendered: React.ReactNode;
    };
    state: TreeState<T>;
  }

const MenuItemCustom:React.FC<MenuItemProps<any>> = ({item,state}) => {
    let ref = React.useRef(null);
    let { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
        { key: item.key },
        state,
        ref
        );
    return (
            <li
              {...menuItemProps}
              ref={ref}
              style={{
                background: isFocused ? 'gray' : 'transparent',
                color: isDisabled ? 'gray' : isFocused ? 'white' : 'black',
                padding: '2px 5px',
                outline: 'none',
                cursor: 'default',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              {item.rendered}
              {isSelected && <span aria-hidden="true">✅</span>}
            </li>
        );
}
 
export default MenuItemCustom;