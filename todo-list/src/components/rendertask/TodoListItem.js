import TodoListDate from "./TodoListDate";

const COMPLETED = "Completada";
const NOT_COMPLETED = "Pendiente";

const TodoListItem = (props) => {
  return (
    <div>
      <TodoListDate date={props.todo.deadLine} />
      <h3>{props.todo.title}</h3>
      <h3>{props.todo.description}</h3>
      <h3>{props.todo.isCompleted ? COMPLETED : NOT_COMPLETED}</h3>
    </div>
  );
};

export default TodoListItem;
