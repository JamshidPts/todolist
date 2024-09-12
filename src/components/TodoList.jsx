import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const searchTerm = useSelector((state) => state.todos.searchTerm);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Pusto = "Не нашли заметку";
  const AddTodo = "Добавьте заметки";

  return (
    <>
      <div className="mt-[40px] rounded-[5px] px-[10px] py-[5px] bg-[black]">
        {filteredTodos.length === 0 ? (
          <p className="text-[white] pl-[250px] font-[sans-serif] text-[20px]">
            {todos.length === 0 ? AddTodo : Pusto}
          </p>
        ) : (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </>
  );
};

export default TodoList;
