import React, { useContext } from 'react';
import { GiShoppingBag } from "react-icons/gi";
import styles from './CartButton.module.css'
import { CartContext } from '../../context/cartContext';

interface Props {
    onClick: () => void
}

const CardButton = ({ onClick }: Props) => {
    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.length

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