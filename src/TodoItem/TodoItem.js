import './TodoItem.css'
import { CompleteIcon } from '../CompleteIcon/CompleteIcon'
import { DeleteIcon } from '../DeleteIcon/DeleteIcon'

function TodoItem (props) {
    return ( 
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
         />
        <p className={`"TodoItem-p" ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
          </p>
         <DeleteIcon
         onDelete={props.onDelete}         
         />
      </li>
    );
  }

  export {TodoItem}