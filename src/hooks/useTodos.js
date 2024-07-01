import { useState, useEffect } from 'react';
import axios from 'axios';

const useTodos = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        if (todos.length === 0) {
            const fetchTodos = async () => {
                try {
                    const response = await axios.get('https://dummyjson.com/todos');
                    const fetchedTodos = response.data.todos.map(todo => ({
                        id: todo.id,
                        text: todo.todo,
                        completed: todo.completed
                    }));
                    setTodos(fetchedTodos);
                } catch (error) {
                    console.error('Error fetching todos:', error);
                    setTodos([]);
                }
            };
            fetchTodos();
        }
    }, [todos.length]); 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo
    };
};

export default useTodos;
