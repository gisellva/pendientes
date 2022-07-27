import react from "react";
import "../item/item.css"

function TodoItem(props){
    return(
        <li className="TodoItem">
        <span 
        onClick={props.oncomplete}
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
          ✓
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span
         className="Icon Icon-delete"
         onClick={props. ondelete}>
          X
        </span>
      </li>
    );
}

export { TodoItem };