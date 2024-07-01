//TodoForm.js
import React, { useState } from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
    todoText: yup
        .string()
        .required('Todo text is required')
        .max(100, 'Todo text cannot exceed 100 characters'),
});

const TodoForm = ({ onSubmit, isDarkMode, filter, setFilter }) => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        reset();
    };

    const onSubmitForm = (data) => {
        onSubmit(data.todoText);
        handleCloseModal();
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className={`todo-form ${isDarkMode ? 'dark-mode' : ''}`}>
            <button className="todo-form-button" onClick={handleOpenModal}>
            {t('add_new_todo')}
            </button>
            <select
                className={`select ${isDarkMode ? 'dark-mode' : ''}`}
                value={filter} onChange={handleFilterChange}>
                <option value="all">{t('all')}</option>
                <option value="completed">{t('completed')}</option>
                <option value="uncompleted">{t('uncompleted')}</option>
            </select>
            <Modal isDarkMode={isDarkMode} isOpen={showModal} onClose={handleCloseModal}>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <input
                        type="text"
                        {...register('todoText')}
                        className={`input ${isDarkMode ? 'dark-mode' : ''}`}
                        placeholder={t('enter_new_todo')}
                    />
                    {errors.todoText && (
                        <p className={`validation-message ${isDarkMode ? 'dark-mode' : ''}`}>
                            {errors.todoText.message}
                        </p>
                    )}
                    <div className="modal-actions">
                        <button type="submit" className="positive-button">
                        {t('add')}
                        </button>
                        <button type="button" className="negative-button" onClick={handleCloseModal}>
                        {t('cancel')}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default TodoForm;
