import TodoCard from "../components/TodoCard";
import "../pages/styles/TodosPage.css";
import { useState } from "react";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      TodosPage
      <TodoCard />
    </div>
  );
};

export default TodosPage;
