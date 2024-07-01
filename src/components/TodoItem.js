//TodoItem.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditTodoModal from './EditTodoModal';

const TodoItem = ({ todo, onToggle, onDelete, onEdit, isDarkMode }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="button-container">
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
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
                        <div className={`todo-text ${todo.completed ? 'completed' : ''}`} onClick={handleEditClick}>
                {todo.text}
            </div>
            {isEditing && (
                <EditTodoModal
                    isOpen={isEditing}
                    onClose={handleCancelEdit}
                    todo={todo}
                    onEdit={onEdit}
                    isDarkMode={isDarkMode}
                />
            )}
        </div>
    );
};

export default TodoItem;
