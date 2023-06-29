import React, { useState } from 'react';
import './App.css';
import TodoTable from './Components/TodoTable';
import NewTodoForm from './Components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water puppy', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make puppy', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Charge puppy', rowAssigned: 'User Two' }

  ])

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your TODO's
        </div>
        <div className="card-body">
          <TodoTable todos={todos}  deleteTodo = {deleteTodo}/>

          <button className="btn btn-primary" onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? 'Close New Todo' : 'New todo'}
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo}  />
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
