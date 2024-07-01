import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditTodoModal from './EditTodoModal';
import '../styles.css';

const TodoItem = ({ todo, onToggle, onDelete, onEdit, isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleEditSave = (id, newText) => {
    onEdit(id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <div className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </div>
      <div className="button-container">
        <div className="icon-container">
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="fa-icon-edit"
            onClick={handleEditClick}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-icon-delete"
            onClick={() => onDelete(todo.id)}
          />
        </div>
      </div>
      {isEditing && (
        <EditTodoModal
          isOpen={isEditing}
          onClose={handleCancelEdit}
          todo={todo}
          onEdit={handleEditSave}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default TodoItem;
