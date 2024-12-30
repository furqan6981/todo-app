import React, { useState, useEffect } from 'react';

const TodoForm = ({ onAddOrUpdate, editTodo }) => {
  const [task, setTask] = useState('');
  const [id, setId] = useState(null);

  useEffect(() => {
    if (editTodo) {
      setTask(editTodo.task);
      setId(editTodo.id);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddOrUpdate({ id, task });
      setTask('');
      setId(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Add Todo Task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          value={task}
          placeholder="Enter your task"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {id ? 'Update' : 'Add'} Task
      </button>
    </form>
  );
};

export default TodoForm;
