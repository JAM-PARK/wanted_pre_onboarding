import './Modal.scss';
import { useState } from 'react';

const Modal = () => {
  return (
    <>
      <div className="modal-container">
        <button className="modal-btn">Open Modal</button>
        {/* <div className="modal-backdrop">
          <div className="modal-view">
            <span className="close-btn">&times;</span>
            <div className="desc">{`HELLO \n`}wanted &times; CODESTATES!</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Modal;
