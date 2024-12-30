import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={todo.isComplete ? 'text-decoration-line-through' : ''}>
        {todo.task}
      </span>
      <div>
        <button
          className={`btn btn-sm ${todo.isComplete ? 'btn-warning' : 'btn-success'} me-2`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.isComplete ? 'Undo' : 'Complete'}
        </button>
        <button className="btn btn-sm btn-info me-2" onClick={() => onEdit(todo)}>
          Edits
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
