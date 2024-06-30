import React, { FC } from 'react';
import { Dish } from '../../DishModel/DishModel';
import styles from './SingleDish.module.css'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

interface Props {
    dish: Dish
}

const SingleDish: FC<Props> = ({ dish }: Props) => {
    const cartContext = useContext(CartContext)
    const addHandler = () => {
        cartContext.addItem!({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            img: dish.img
        })
        console.log(cartContext)
    }

    return (
        <div className={styles.singleDish}>
            <div><img src={dish.img} alt='product' className={styles.singleDish__img}></img></div>
            <div>
                <div className={styles.singleDish__name}>{dish.name}</div>
                <div className={styles.singleDish__price}>{dish.price}</div>
            </div>
            <button onClick={addHandler} className={styles.singleDish__btn}>Купить</button>
        </div>
    );
};

export default SingleDish;