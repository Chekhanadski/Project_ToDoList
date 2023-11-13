import { useLayoutEffect, useState } from "react";
import ToDo from "./components/ToDo/ToDo";
import ToDoForm from "./components/ToDoForm/ToDoFrom";

function AppToDoWithLocalStorage() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        isComplete: false,
      };
      const updateTodos = [...todos, newItem];
      setTodos(updateTodos);
      localStorage.setItem("todos", JSON.stringify(updateTodos));
    }
  };

  const restoreDataFromLocalStorage = () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
    }
  };

  useLayoutEffect(() => restoreDataFromLocalStorage(), []);

  const removeTask = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  };

  const handleToggle = (id) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  };

  const completeTasksCounter = () => {
    return todos.filter((todo) => todo.isComplete).length;
  };

  return (
    <div className="App">
      <header>
        <h2>ToDoList</h2>
      </header>
      <ToDoForm addTask={addTask} />
      <div className="counters">
        <div className="tasks-counter">
          <h6>Tasks: {todos.length}</h6>
        </div>
        <div className="complete-tasks-counter">
          <h6>Complete tasks: {completeTasksCounter()}</h6>
        </div>
      </div>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            removeTask={removeTask}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  );
}

export default AppToDoWithLocalStorage;
