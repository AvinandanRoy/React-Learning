import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css"
import ToDoItems from "./components/TodoItems";


export default function App() {

    let todoItems= [
      {"todoName" : "Going the University", "todoDate" : '12/17/2024'},
      {"todoName" : "Take a lunch after class", "todoDate" : '12/17/2024'},
      {"todoName" : "Sleeping in the evening", "todoDate" : '12/17/2024'},
      {"todoName" : "Woke up in the 8pm", "todoDate" : '12/17/2024'},
      {"todoName" : "Take a shower at 8pm", "todoDate" : '13/17/2024'},

    ]

  return (
    <>
      <div className="todo-container">
        <AppName />

        <AddTodo />

        <ToDoItems todoItems={todoItems} />
      </div>
    </>
  )
}