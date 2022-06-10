import TodoListItem from "./TodoListItem";

const RenderTodoList = (props) => {
  return (
    <div>
      {props.todoListItems.map((item) => {
        return <TodoListItem key={item.id} todo={item} />;
      })}
    </div>
  );
};

export default RenderTodoList;
