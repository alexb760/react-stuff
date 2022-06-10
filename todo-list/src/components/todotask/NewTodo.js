import TodoListForm from "./TodoListForm";

const NewTodo = (props) => {
  const saveDataHandler = (dataInput) => {
    props.onSaveDataList(dataInput);
  };

  return (
    <div>
      <TodoListForm onSaveDataInput={saveDataHandler} />
    </div>
  );
};

export default NewTodo;
