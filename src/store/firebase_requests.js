export const fetchTodos = async () => {
  try {
    const response = await fetch(
      "https://todolist-a0031-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "GET",
        header: {
          "Content-Type": "aplication/json",
        },
      }
    );
    const data = await response.json();
    const todos =
      data && Object.keys(data).map((key) => ({ ...data[key], id: key }));
    return todos;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const addTodo = async (newItem) => {
  try {
    const response = await fetch (
      "https://todolist-a0031-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify(newItem),
      }
    )

    const data = await response.json();
    return { ...newItem, id: data.name }
  } catch (error) {
    console.error("Error: ", error)
  }
} 

export const removeTodo = async (id) => {
  try {
    await fetch(
      `https://todolist-a0031-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return id;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const toggleTodo = async (todo) => {
  try {
    await fetch(
      `https://todolist-a0031-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo.id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({ ...todo, isComplete: !todo.isComplete }),
      }
    );
    return todo.id;
  } catch (error) {
    console.error("Error: ", error)
  }
}