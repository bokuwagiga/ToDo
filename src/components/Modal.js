import React from 'react';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, children, isDarkMode }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className={`modal-content ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="modal-header">
                    <h2>{t('enter_todo')}</h2>
                </div>
                <div className={'modal-body'}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
