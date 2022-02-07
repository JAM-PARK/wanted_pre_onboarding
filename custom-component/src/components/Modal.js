import './Modal.scss';
import { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal-container">
      <button className="modal-btn" onClick={handleModal}>
        Open Modal
      </button>
      {isOpen ? (
        <div className="modal-backdrop">
          <div className="modal-view">
            <span className="close-btn" onClick={handleModal}>
              &times;
            </span>
            <div className="desc">{`HELLO \n`}wanted &times; CODESTATES!</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Modal;
