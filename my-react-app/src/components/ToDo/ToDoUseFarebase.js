function ToDo({ todo, removeTask, handleToggle }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.isComplete ? "item-text strike" : "item-text"}
        onClick={() => handleToggle(todo)}
      >
        <todo.task />
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        x
      </div>
    </div>
  )
}