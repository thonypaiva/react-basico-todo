import './TodoList.css'

function TodoList ({children , icono }) {
    return(   
     
     <ul className='TodoList'>
     {children}
     </ul>
    );
  }

  export {TodoList};