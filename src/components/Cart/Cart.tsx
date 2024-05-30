import React from 'react';
import { IoClose } from "react-icons/io5";
import styles from './Cart.module.css'
import Modal from '../UI/Modal';

interface Props {
    onHideCart: () => void
}

const Cart: React.FC<Props> = ({ onHideCart }: Props) => {
    return (
        <Modal>
            <span className={styles.closeButton} onClick={onHideCart}>
                <IoClose />
            </span>
            <div className={styles.total}>
                <span>Итого: </span>
                <span>1500 руб.</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.buyButton}>Оформить заказ</button>

            </div>
        </Modal>
    );
};

export default Cart;