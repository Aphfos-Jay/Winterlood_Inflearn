import "./List.css";
import ToDoItem from "./ToDoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const [search, setSearch] = useState("");
  const todos = useContext(TodoStateContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    } else {
      return todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  const filteredData = getFilteredDate();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>To Do List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todo_Wrapper">
        {filteredData.map((todo) => {
          return <ToDoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
