import { AccountMenu } from "../Menus/AccountMenu";
import { NavBarItemsContainer , Direction} from "../NavBarItemsContainer";

export function NavBar(){
    return (
        <div className="NavBar">
            <>
                <NavBarItemsContainer direction = {Direction.LEFT}> 
                    <AccountMenu />
                </NavBarItemsContainer>
               
            </>
        </div>
    );
}