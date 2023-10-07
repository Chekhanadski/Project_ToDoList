import { useState } from "react";
import ToDo from "./components/ToDo/ToDo";
import ToDoForm from "./components/ToDoForm/ToDoFrom";

function AppToDo() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        isComplete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const countCompleteTasks = () => {
    return todos.filter((todo) => todo.isComplete).length;
  };

  return (
    <div className="App">
      <header>
        <h1>ToDoList</h1>
      </header>
      <ToDoForm addTask={addTask} />
      <div className="counters">
        <div className="tasks-counter">
          <h6>Tasks: {todos.length}</h6>
        </div>
        <div className="complete-tasks-counter">
          <h6>Complete tasks: {countCompleteTasks()}</h6>
        </div>
      </div>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default AppToDo;
