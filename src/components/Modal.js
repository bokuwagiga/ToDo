import React from 'react';

const Modal = ({ isOpen, onClose, children, isDarkMode }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className={`modal-content ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="modal-header">
                    <h2>Add New Todo</h2>
                </div>
                <div className={'modal-body'}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
