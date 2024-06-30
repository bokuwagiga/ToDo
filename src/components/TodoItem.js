//TodoItem.js
import React, {useState} from 'react';
import '../styles.css';
import EditTodoModal from './EditTodoModal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({todo, onToggle, onDelete, onEdit, isDarkMode}) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
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
            {isEditing ? (
                <EditTodoModal
                    isOpen={isEditing}
                    onClose={handleCancelEdit}
                    todo={todo}
                    onEdit={onEdit}
                    isDarkMode={isDarkMode}
                />
            ) : (
                <div className={`todo-text ${todo.completed ? 'completed' : ''}`}
                     onClick={handleEditClick}>
                     {todo.text}
                </div>
            )}
            <div className="button-container">
                {(
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
