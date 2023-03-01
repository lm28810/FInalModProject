import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const editTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="text"
              value={todo}
              onChange={(e) => editTodo(index, e.target.value)}
            />
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
