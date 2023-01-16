import React from "react"
import { TaskItem } from "./types";
import ToDoItem from "../function-components/ToDoItem";

export type ToDoListProp = TaskItem[];

class ToDoList extends React.Component
    <{ todos: ToDoListProp, handleChangeProps: (id: number | string) => void, deleteToDoProps: (id: number | string) => void, setUpdate: (updatedTitle: string, id: string | number) => void }> {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <ToDoItem 
                    key={todo.id} 
                    todo={todo} 
                    handleChangeProps={this.props.handleChangeProps} 
                    deleteToDoProps={this.props.deleteToDoProps} 
                    setUpdate={this.props.setUpdate}/>
                ))}
            </ul>
        )
    }
}

export default ToDoList;