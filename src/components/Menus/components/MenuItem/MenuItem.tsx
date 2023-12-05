import { type } from 'os';
import styles from './MenuItem.module.css';
export type MenuItemProp ={
    url: string;
    text : string;
}
export function MenuItem( {url, text} : MenuItemProp){
    return (
        <li className={styles.menuItem}>
            <a href={url}>{text}</a>
        </li>
    );
}