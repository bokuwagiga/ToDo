import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com'
});

export const fetchTodos = async () => {
    const response = await api.get('/todos');
    return response.data.todos;
};
