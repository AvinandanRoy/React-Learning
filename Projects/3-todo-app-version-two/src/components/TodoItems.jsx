import ToDoItem from "./ToDoItem";
import styles from './ToDoItems.module.css'

// eslint-disable-next-line react/prop-types
export default function ToDoItems( {todoItems} ) {
    return (
        <>
            <div className={styles.todoItem}>
                {
                    // eslint-disable-next-line react/prop-types
                    todoItems.map(item=>(
                        <ToDoItem todoName={item.todoName} todoDate={item.todoDate} key={item.todoName} />
                    ))
                }
            </div>
        </>
    )
}

