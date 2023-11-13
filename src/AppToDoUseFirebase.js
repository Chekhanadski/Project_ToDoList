import { useEffect, useState } from "react";
import ToDo from "./components/ToDo/ToDoUseFarebase";
import ToDoForm from "./components/ToDoForm/ToDoFrom";
import {
  addTodo,
  fetchTodos,
  removeTodo,
  toggleTodo,
} from "./store/firebase_requests";

function AppToDoUseFirebase() {
  const [todos, setTodos] = useState(null);

  async function fetchData() {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  const addTask = async (userInput) => {
    if (userInput) {
      const newItem = {
        task: userInput,
        isComplete: false,
      };
      const data = await addTodo(newItem);
      if (data.id) {
        fetchData();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTask = async (id) => {
    if (todos) {
      const deletedId = await removeTodo(id);
      if (deletedId) {
        fetchData();
      }
    }
  };

  const handleToggle = async (todo) => {
    if (todos) {
      const toggleId = await toggleTodo(todo);
      if (toggleId) {
        fetchData();
      }
    }
  };

  const countCompleteTasks = () => {
    if (todos) {
      return todos.filter((todo) => todo.isComplete).length;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>ToDoList</h1>
      </header>
      <ToDoForm addTask={addTask} />
      <div className="counters">
        <div className="tasks-counter">
          <h6>Tasks: {todos ? todos.length : 0}</h6>
        </div>
        <div className="complete-tasks-counter">
          <h6>Complete tasks: {countCompleteTasks()}</h6>
        </div>
      </div>
      {todos
        ? todos.map((todo) => {
            return (
              <ToDo
                todo={todo}
                handleToggle={handleToggle}
                removeTask={removeTask}
              />
            );
          })
        : null}
    </div>
  );
}

export default AppToDoUseFirebase;
