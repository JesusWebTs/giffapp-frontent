import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal(props) {
  const { children, onClose } = props;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-item">
          <button className="btn btn-close" onClick={onClose}>
            ✖️
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ModalPortal({ children, onClose }) {
  const rootModal = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    rootModal
  );
}
