import React from 'react';
import styles from './Header.module.css'
import background from '../../assets/Background.png'
import CardButton from '../CartButton/CardButton';

interface Props {
    onShowCart: () => void
}

const Header: React.FC<Props> = ({ onShowCart }: Props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Wozabi</h1>
                <CardButton onClick={onShowCart} />
            </header>
            <div className={styles.background}>
                <img src={background} alt="background" />
            </div>
        </>

    );
};

export default Header;