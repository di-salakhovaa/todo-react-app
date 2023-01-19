import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoItem/TodoItem";

const initialTodos = [];

const App = () => {
  // состоянии (данные задачи)
  const [todos, setTodos] = useState(initialTodos);

  // получение данных из localStorage
  useEffect(() => {
    if (localStorage.getItem('todos') != null) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }

  }, []);

  return (
    <div className="container">
      <TodoHeader setTodos={setTodos} />
      <div className="todo_list">
        {todos.map((todo) => <TodoItem setTodos={setTodos} todo={todo} />)}
      </div>
    </div>
  );
}

export default App