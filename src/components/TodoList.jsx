import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggle, onEdit }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) =>
    filter === 'complete'
      ? todo.isComplete
      : filter === 'incomplete'
      ? !todo.isComplete
      : true
  );

  return (
    <div>
      <div className="btn-group mb-4" role="group">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => setFilter('complete')}
        >
          Completed
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
      <ul className="list-group">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
