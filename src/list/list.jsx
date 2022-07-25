import react from "react";
import "../list/list.css"

function TodoList(props){
    return(
        <section>
            <ul key={props.text}>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};