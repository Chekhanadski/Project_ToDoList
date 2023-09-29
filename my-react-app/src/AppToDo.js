import { useState } from 'react'
import ToDo from './components/ToDo/ToDo'
import ToDoForm from './components/ToDoForm/ToDoFrom'

function AppToDo() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      // Создаем новую задачу с уникальным идентификатором
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput, // Текст задачи
        isComplete: false, // По умолчанию задача не завершена
      };
      // Обновляем состояние "todos", добавляя новую задачу в список
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = () => {

  }

  const handleToggle = () => {

  }

  return (
    <div className="App">
      <header>
        <h1>ToDoList</h1>
        <h1>{todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )        
      }
      )}
    </div>
  );
}

export default AppToDo;