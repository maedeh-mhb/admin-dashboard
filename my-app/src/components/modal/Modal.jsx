import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import Overlay from './Overlay';



const portalElement = document.getElementById('backdrop');
const Modal = (props) => {

    return (
    <>
    
     {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
    );
};

export default Modal;