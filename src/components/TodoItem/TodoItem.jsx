import { useState } from "react";
import formatDate from "../../utils/formatDate";

const TodoItem = ({setTodos, todo}) => {
    // работа со статусом задачи
    const onCheckedToggle = (id) => {
        setTodos((prevState) => {
            prevState = [...prevState];
            prevState = prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }
                return todo;
            });

            localStorage.setItem('todos', JSON.stringify(prevState));
            return prevState;
        })
    }

    // удаление задачи 
    const onDeleteTodoById = (id) => {
        setTodos((prevState) => {
            prevState = [...prevState];
            prevState = prevState.filter((todo) => todo.id !== id)

            localStorage.setItem('todos', JSON.stringify(prevState));

            return prevState;
        })
    }

    return (
        <div className="todo_item">
            <h3 className="todo_name">{todo.name} ({formatDate(todo.date)})</h3>
            <div className="button_list">
                <button className="checked_button" onClick={() => onCheckedToggle(todo.id)}>
                    {todo.checked ? "Не выполнена" : "Выполнена"}
                </button>
                <button className="delete_button" onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
            </div>
        </div>
    )
}

export default TodoItem;