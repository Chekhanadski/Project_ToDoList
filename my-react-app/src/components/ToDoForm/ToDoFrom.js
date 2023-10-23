import { useState } from "react";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}        
        placeholder="Enter Task..."
      />
      <button>SAVE</button>
    </form>
  );
}

export default ToDoForm;
