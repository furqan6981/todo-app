import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const addTodo = () => {
    if (input.trim() === '') return;
    if (isEditing) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === currentTodoId
            ? { ...todo, text: input, isCompleted: todo.isCompleted }
            : todo
        )
      );
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: input,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    }
    setInput('');
  };

  const markComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setInput(todo.text);
    setIsEditing(true);
    setCurrentTodoId(id);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const renderTodos = (completed) =>
    todos
      .filter((todo) => todo.isCompleted === completed)
      .map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center mb-2"
        >
          <span
            className={`text-break ${
              todo.isCompleted ? 'text-decoration-line-through text-muted' : ''
            }`}
            onClick={() => markComplete(todo.id)}
            style={{ cursor: 'pointer' }}
          >
            {todo.text}
          </span>
          <div>
            <button
              className="btn btn-sm btn-primary me-2"
              onClick={() => editTodo(todo.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ));

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="card p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 className="text-center mb-4">Todo App</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-success" onClick={addTodo}>
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
        <div>
          <h3 className="mt-4">Incomplete Todos</h3>
          <ul className="list-group mb-3">{renderTodos(false)}</ul>
          <h3>Completed Todos</h3>
          <ul className="list-group">{renderTodos(true)}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
