import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoShearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
// import logo from './logo.svg';
// import './App.css';

const todos = [
  {text:'cortar manzanas', completed: false},
  {text:'cortar peras', completed: false},
  {text:'cortar mangos', completed: false},
];

function App() {
  return (
  <React.Fragment>
      <TodoCounter />
      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

    <CreateTodoButton/>
  </React.Fragment>
  );
}

export default App;
