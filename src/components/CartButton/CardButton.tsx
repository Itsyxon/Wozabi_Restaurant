import React, { useContext } from 'react';
import { GiShoppingBag } from "react-icons/gi";
import styles from './CardButton.module.css'
import CartContext from '../../context/CartContext';

interface Props {
    onClick: () => void
}
const CardButton = ({ onClick }: Props) => {

    const cartContext = useContext(CartContext)
    const cartItemsNumber = cartContext.items.reduce((acc, item) => {
        console.log(acc, item)
        return acc + item
    }, 0)


    return (
        <button className={styles.button} onClick={onClick}>
            <span>
                <GiShoppingBag className={styles.icon} />
            </span>
            <span>Корзина</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
};

export default CardButton;