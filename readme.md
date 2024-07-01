# Todo App

This project is a Single Page Application (SPA) built using React.

## Project Structure

```
|   App.js
|   i18n.js
|   index.js
|   styles.css
|
+---components
|       DarkModeToggle.js
|       EditTodoModal.js
|       Footer.js
|       Modal.js
|       Navbar.js
|       SearchBar.js
|       TodoForm.js
|       TodoItem.js
|       TodoList.js
|
+---flags
|       ge.png
|       uk.png
|
+---hooks
|       useDarkMode.js
|       useTodos.js
|
+---locales
|   +---en
|   |       translation.json
|   |
|   \---ka
|           translation.json
|
\---pages
        About.js
        Home.js
        TodoPage.js

```

## Features

### 1. Pages
- **Home Page**: Displays a welcome message and an image fetched from an API.
- **Todos Page**: Allows users to add, edit, delete, and search todos.
- **About Page**: Provides information about the application.

### 2. Dark Mode
- Implemented using a custom hook (`useDarkMode`).
- State is saved in local storage to persist user preference.

### 3. Multi-language Support
- Uses `i18next` for translations.
- Supports English and Georgian.

### 4. Forms and Validation
- Forms are built using `react-hook-form`.
- Validation is handled by `yup`.

### 5. API Integration
- Todos are fetched from `https://dummyjson.com/todos` using Axios.
- State is saved in local storage to prevent refetching on page reload.

### 6. Animations
- Animations for toggling dark mode and changing languages.

### 7. Responsive Design
- The app is responsive and works well on devices of various sizes.


## How to Run the Project

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```
2. **Install the dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm start
   ```
4. **Open your browser and navigate to:**
   ```
   http://localhost:3000/ToDo
   ```

## Conclusion

This Todo App demonstrates the use of several modern web development technologies and practices, including React Hooks, custom hooks, form validation, API integration, responsive design, and state management with local storage. The project also features dark mode and multi-language support, providing a better user experience.