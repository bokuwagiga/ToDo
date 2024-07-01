//useTodos.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useTodos = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [fetched, setFetched] = useState(() => {
        const savedFetched = localStorage.getItem('fetched');
        return savedFetched ? JSON.parse(savedFetched) : false;
    });

    useEffect(() => {
        if (todos.length === 0 && !fetched) {
            const fetchTodos = async () => {
                try {
                    const response = await axios.get('https://dummyjson.com/todos');
                    const fetchedTodos = response.data.todos.map(todo => ({
                        id: todo.id,
                        text: todo.todo,
                        completed: todo.completed
                    }));
                    setTodos(fetchedTodos);
                    setFetched(true);
                    localStorage.setItem('fetched', true);
                } catch (error) {
                    console.error('Error fetching todos:', error);
                    setTodos([]);
                    setFetched(true);
                    localStorage.setItem('fetched', true);
                }
            };
            fetchTodos();
        }
    }, [todos.length, fetched]);

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
