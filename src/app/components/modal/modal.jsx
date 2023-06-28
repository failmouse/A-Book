import React from "react";
import { useEffect } from "react";
import './modal.scss';

const Modal = (props) => {

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                props.onClose();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });

    return (
        <>
            <div className='modal__background' onClick={props.onClose} />
            <div className="modal__container">
                {props.children}
            </div>
        </>
    )
}

export default Modal;