//EditTodoModal.js
import React from 'react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const EditTodoModal = ({ isOpen, onClose, todo, onEdit, isDarkMode }) => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    editText: yup
      .string()
      .trim()
      .required(t('text_required'))
      .max(200, t('text_too_long')),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { editText: todo.text },
  });

  const handleSaveEdit = (data) => {
    const trimmedText = data.editText.trim();
    if (trimmedText !== todo.text) {
      onEdit(todo.id, trimmedText);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDarkMode={isDarkMode}>
      <form onSubmit={handleSubmit(handleSaveEdit)}>
        <input
          type="text"
          {...register('editText')}
          className={`input ${isDarkMode ? 'dark-mode' : ''}`}
          autoFocus
        />
        {errors.editText && (
          <p className={`validation-message`}>
            {errors.editText.message}
          </p>
        )}
        <div className="modal-actions">
          <button type="submit" className="positive-button">
            {t('save')}
          </button>
          <button type="button" className="negative-button" onClick={onClose}>
            {t('cancel')}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTodoModal;
