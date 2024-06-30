import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import SearchBar from '../components/SearchBar';
import useTodos from '../hooks/useTodos';

const TodoPage = ({ isDarkMode }) => {
    const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos();
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredTodos = Array.isArray(todos) ? todos.filter(todo =>
        todo.text && todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const filteredTodosByFilter = filteredTodos.filter(todo => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return todo.completed;
        } else if (filter === 'uncompleted') {
            return !todo.completed;
        }
        return true;
    });

    return (
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
            <SearchBar isDarkMode={isDarkMode} onSearch={handleSearch} />
            <TodoForm isDarkMode={isDarkMode} onSubmit={addTodo} filter={filter} setFilter={setFilter} />
            <TodoList
                isDarkMode={isDarkMode}
                todos={filteredTodosByFilter}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
            />
        </div>
    );
};

export default TodoPage;
