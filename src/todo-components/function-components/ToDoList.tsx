import { TaskItem } from "../class-components/types"
import ToDoItem from "./ToDoItem"

const TodosList = (props: any) => {
    return (
        <ul>
            {props.todos.map((todo: TaskItem) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteToDoProps={props.deleteToDoProps}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
}
export default TodosList