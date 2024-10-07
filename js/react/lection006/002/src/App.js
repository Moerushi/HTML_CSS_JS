import React from 'react';
import AddTodo from './components/AddToDo';
import TodoList from './components/ToDoList';
import TodoFilter from './components/ToDoFilter';
import { FilterProvider } from './contexts/FilterContext';

function App() {
  return (
      <FilterProvider>
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </FilterProvider>
  );
}

export default App;
