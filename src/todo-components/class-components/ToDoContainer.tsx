import React from "react"
import ToDoList from "./ToDoList";
import Header from "./Header"
import { TaskItem } from "./types";
import InputToDo from "../function-components/InputToDo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  // The state.
  state: { todos: TaskItem[] } = {
    todos: []
  };
  /**
   * Handle change for checkbox
   */
  handleChange = (id: number | string) => {
    this.setState((prevState: { todos: TaskItem[] }) => {
      const updatedState: { todos: TaskItem[] } = {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      };
      return updatedState;
    });
  };

  /**
   * Deletes task item.
   * @param id 
   */
  delTodo = (id: number | string) => {
    this.setState(
      { todos: [...this.state.todos.filter(todo => { return todo.id !== id; })] }
    );
  };

  /**
   * Handle task item insert.
   * @param title 
   */
  addTodoItem = (title: string) => {
    const newTodo: TaskItem = { id: uuidv4(), title: title, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  /**
   * Handles edits to items.
   * @param updatedTitle 
   * @param id 
   */
  setUpdate = (updatedTitle: string, id: string | number) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    });
  }

  /**
   * Fetch TODOs from local state.
   */
  componentDidMount() {
    if (localStorage.getItem("todos")) {
      const temp: any = localStorage.getItem("todos")
      const loadedTodos = JSON.parse(temp)
      if (loadedTodos) {
        this.setState({
          todos: loadedTodos
        })
      }
    }

  }

  /**
   * Persist TODOs
   * @param prevProps 
   * @param prevState 
   */
  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }


  /**
   * The actual rended method.
   */
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addTodoProps={this.addTodoItem} />
          <ToDoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteToDoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    )
  }
}
export default TodoContainer