import React, { CSSProperties } from "react";
import { TaskItem } from "./types";
import styles from "./ToDoItem.module.css"

class ToDoItem extends React.Component
    <{ todo: TaskItem, handleChangeProps: (id: number | string) => void, deleteToDoProps: (id: number | string) => void, setUpdate: (updatedTitle: string, id: string | number) => void }> {

    state = {
        editing: false,
    }

    /**
     * Handle for todo item.
     */
    handleEditing = () => {
        this.setState({
            editing: true,
        });
    };

    /**
     * Handle update done.
     * @param event 
     */
    handleUpdatedDone = (event: any) => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }

    render() {
        const completedStyle: CSSProperties = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        const { completed, id, title } = this.props.todo;
        let viewMode: any = {}
        let editMode: any = {}
        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() => { this.props.handleChangeProps(id) }}
                    />
                    <span style={this.props.todo.completed ? completedStyle : {}}>
                        {title}
                    </span>
                    <button onClick={() => { this.props.deleteToDoProps(id) }}>Delete</button>
                </div>
                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput}
                    value={title}
                    onChange={e => {
                        this.props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdatedDone} />
            </li>
        )
    }
}

export default ToDoItem;