import React from 'react';
import DISHES from '../../DishModel/DishModel';
import styles from './DishesList.module.css'
import SingleDish from '../SingleDish/SingleDish';


const DishesList = () => {
    return (
        <section>
            <div className={styles.dishesList}>
                {DISHES.map((dish) => (
                    <SingleDish key={dish.id} dish={dish} />
                ))}
            </div>
        </section>
    );
};

export default DishesList;