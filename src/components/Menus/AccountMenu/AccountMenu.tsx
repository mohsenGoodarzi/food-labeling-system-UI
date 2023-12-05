import { MenuItemSeparator } from "../components/MenuItemSeparator";
import { MenuItem } from "../components/MenuItem";
import {MenuItemContainer} from '../components/MenuItemsContainer';
export function AccountMenu() {

    return (
        <MenuItemContainer name="test" >
        <>
         <MenuItem text ={'Profile'} url = {'/Profile'}/>
         <MenuItemSeparator/>
         <MenuItem text ={'Change Password'} url = {'/Users/{userName}/Password/Change'}/>
         <MenuItem text ={'Reset Password'} url = {'/Users/{userName}/Password/Reset'}/>
         <MenuItemSeparator/>
         <MenuItem text ={'Close Account'} url = {'/Close'}/>
        </>
        </MenuItemContainer>
    );
}
