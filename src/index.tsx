import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoContainer from './todo-components/function-components/ToDoContainer';
import "./todo-components/class-components/App.css";
import { HashRouter as Router } from "react-router-dom"
import "./todo-components/function-components/App.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);
