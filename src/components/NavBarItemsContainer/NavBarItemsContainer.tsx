import { Children } from "react";

export  enum Direction  {
    LEFT ='left',
    RIGHT ='right',
    MIDDLE='middle,'
}
type NavBarItemsContainerProp = {
    direction: Direction;
    children:JSX.Element;
}
export function NavBarItemsContainer({children}:NavBarItemsContainerProp){
    return (
        <ul>
            {children}
        </ul>
    );
}