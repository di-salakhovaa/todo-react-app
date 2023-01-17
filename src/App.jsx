import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoItem/TodoItem";

const initialTodos = [
  {
    id: 1,
    name: "Купить продукты",
    date: new Date(),
    checked: false
  },

  {
    id: 2,
    name: "Заправить автомобиль",
    date: new Date(),
    checked: false
  }
]

const App = () => {
  // состоянии (данные задачи)
  const [todos, setTodos] = useState(initialTodos);

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