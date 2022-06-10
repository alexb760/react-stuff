import { default as UUID } from "node-uuid";
import { useState } from "react";

const TodoListForm = (props) => {
  const [titleInput, setTitle] = useState("");
  const [descriptionInput, setDescription] = useState("");
  const [dateInput, setDateInput] = useState("");

  const titleHandle = (event) => {
    setTitle(event.target.value);
  };

  const descriptionHandle = (event) => {
    setDescription(event.target.value);
  };

  const dateHandle = (event) => {
    setDateInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const submitData = {
      id: UUID.v4(),
      title: titleInput,
      description: descriptionInput,
      deadLine: new Date(dateInput),
      isCompleted: false,
    };

    props.onSaveDataInput(submitData);
    setTitle("");
    setDescription("");
    setDateInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label> title: </label>
        <input type={"text"} value={titleInput} onChange={titleHandle} />
      </div>
      <div>
        <label> Description: </label>
        <input
          type={"text"}
          value={descriptionInput}
          onChange={descriptionHandle}
        />
      </div>
      <div>
        <label> title: </label>
        <input type={"date"} value={dateInput} onChange={dateHandle} />
      </div>
      <div>
        <button type="submit"> add task</button>
      </div>
    </form>
  );
};

export default TodoListForm;
