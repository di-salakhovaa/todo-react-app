import { useState, useEffect } from "react";

const App = () => {

  // состоянии (данные задачи)
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Купить продукты",
      date: new Date(),
      checked: false
    },

    {
      id: 2,
      name: "Заправить автомобиль (Lada Granta - чёрного цвета 21 века)",
      date: new Date(),
      checked: false
    }
  ]);

  const [value,setValue] = useState('');

  // значение поля 
  const onChangeHandle = (e) => {
    setValue(e.target.value);
  }

  // Функция добавления задания
  const onSubmitHandle = (e) => {
    e.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false
      });

      return prevState;
    });

    setValue('');
  }

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

      return prevState;
    })
  }

  // удаление задачи 
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      // .filter()
      prevState = prevState.filter((todo) => todo.id !== id)
      
      return prevState;
    })
  }

  // формат времени
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    return `${day}.${month}.${year}`;
  }

  return (
    <div className="container">
      <div>
        <form onSubmit={(e) => onSubmitHandle(e)}>
          <h2>Добавить задачу:</h2>
          <input type="text" placeholder="Купить молоко..." onChange={(e) => onChangeHandle(e)} value={value}/>
        </form>
      </div>

      {/* все задачи */}
      <div className="todo_list">
        {/* одна задача */}
        {
          todos.map((todo) => {
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
          })
        }
      </div>
    </div>
  );
}

export default App