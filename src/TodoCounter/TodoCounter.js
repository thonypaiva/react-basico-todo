import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';




function TodoCounter () {
    const {
      completedTodos,
      totalTodos,
    } =  React.useContext(TodoContext)

    return ( 
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
      
    );
  }

  export {TodoCounter}