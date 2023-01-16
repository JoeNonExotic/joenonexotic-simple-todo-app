import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import Header from "../class-components/Header"
import ToDoList from "../function-components/ToDoList"
import { TaskItem } from "../class-components/types"
import InputTodo from "./InputToDo";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import NotMatch from "./pages/NoMatch";
import NavBar from "./NavBar";

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos());
    const handleChange = (id: string | number) => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    const delTodo = (id: number | string) => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    }

    const addTodoItem = (title: string) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle: string, id: string | number) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    // /**
    //  * Get Items Effect
    //  */
    // useEffect(() => {
    //     console.log("Running get items effect")
    //     // getting stored items
    //     const temp: any = localStorage.getItem("todos");
    //     const loadedTodos = JSON.parse(temp) as TaskItem[];

    //     if (loadedTodos) {
    //         setTodos(loadedTodos)
    //     }
    // }, []);

    function getInitialTodos(): TaskItem[] {
        // getting stored items
        const temp: any = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    /**
     * Set items effect.
     */
    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem} />
                            <ToDoList
                                todos={todos}
                                handleChangeProps={handleChange}
                                deleteToDoProps={delTodo}
                                setUpdate={setUpdate}
                            />
                        </div>
                    </div>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </>
    )
}

export default TodoContainer