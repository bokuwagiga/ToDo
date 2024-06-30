//EditTodoModal.js
import React, { useState } from 'react';
import Modal from './Modal';

const EditTodoModal = ({ isOpen, onClose, todo, onEdit, isDarkMode }) => {
  const [editText, setEditText] = useState(todo.text);

  const handleInputChange = e => {
    setEditText(e.target.value);
  };

  const handleSaveEdit = () => {
    const trimmedText = editText.trim();
    if (trimmedText !== todo.text) {
      onEdit(todo.id, trimmedText);
    }
    onClose();
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDarkMode={isDarkMode}>
      <input
        type="text"
        value={editText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className={`input ${isDarkMode ? 'dark-mode' : ''}`}
        autoFocus
      />
      <div className="modal-actions">
        <button className="positive-button" onClick={handleSaveEdit}>
          Save
        </button>
        <button className="negative-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default EditTodoModal;
