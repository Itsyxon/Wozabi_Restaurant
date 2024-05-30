import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'

interface ModalProps {
    children: string | JSX.Element | JSX.Element[]
}

const Backdrop = () => {
    return <div className={styles.backdrop}></div>
}

const ModalWindow = ({ children }: ModalProps) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
}

const Modal = ({ children }: ModalProps) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById('overlays')!
            )}
            {ReactDOM.createPortal(
                <ModalWindow>{children}</ModalWindow>,
                document.getElementById('overlays')!
            )}
        </>
    );
};

export default Modal;