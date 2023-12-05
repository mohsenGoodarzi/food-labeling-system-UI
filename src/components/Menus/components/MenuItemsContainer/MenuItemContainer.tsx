import { MenuItem } from '../MenuItem/MenuItem';
import { MenuItemSeparator } from '../MenuItemSeparator/MenuItemSeparator';

export type MenuItemsContainer = {
    name:string;
    children:  JSX.Element ;
}
export function  MenuItemContainer( {children, name} : MenuItemsContainer){
    return (
        <ul className='menuItemsContainer' aria-name={ name}> 
         {children}
        </ul>
    )
}