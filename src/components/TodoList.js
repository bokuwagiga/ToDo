//TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const TodoList = ({ onToggle, onDelete, onEdit, isDarkMode, todos }) => {
  const reversedTodos = Array.isArray(todos) ? [...todos].reverse() : [];

  return (
    <div className="todo-list">
      {reversedTodos.length === 0 ? (
        <div className="empty-container">
          <p className="empty-message">No todos!</p>
          <FontAwesomeIcon icon={faInbox} className="empty-icon" />
        </div>
      ) : (
        reversedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            isDarkMode={isDarkMode}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
