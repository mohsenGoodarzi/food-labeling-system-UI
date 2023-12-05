import styles from './menuItemSepartor.module.css';

export function MenuItemSeparator(){
    return (
        <li className={styles.menuItemSeparator}>
            <span className='separator'></span>      
        </li>
    );
}