import './TodoSeach.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch () {
  const {
    searchValue,
    setSearchValue,
  } =  React.useContext(TodoContext)
  
  return (
     
     <input
      placeholder="Buscar tu TODO            🔍"
      className="TodoSearch" 
      value={searchValue}      
      onChange={(event)=>{
        setSearchValue(event.target.value)
     }} />
    );
  }

  export {TodoSearch};