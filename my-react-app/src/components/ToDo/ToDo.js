function ToDo({ todo, handleToggle, removeTask }) {
  
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.isComplete ? "item-text strike" : "item-text"}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  );
}

export default ToDo;
