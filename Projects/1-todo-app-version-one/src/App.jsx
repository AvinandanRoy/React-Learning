import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ToDoItem from "./components/ToDoItem";
import "./App.css"


export default function App() {
  return (
    <>
      <div className="todo-container">
        <AppName />

        <AddTodo />

        <div className="todoItem">
          <ToDoItem />
          <ToDoItem />
        </div>
      </div>
    </>
  )
}