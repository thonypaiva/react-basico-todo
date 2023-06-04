import './CreateTodoButton.css';
import { Modal } from '../Modal/';

function CreateTodoButton ({openModal , setOpenModal}) {
    
    return (
       
       <button className="CreateTodoButton"
       onClick={() =>  setOpenModal (state=> !state)
         }>
            +
            </button>
    )
}

export {CreateTodoButton};