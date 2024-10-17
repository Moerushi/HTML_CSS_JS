import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
    const todo = useSelector((state) => state.todo); // берем из файла store
    return (
        <ul>
            {todo.items.map((item) => <li key={item.id}><TodoItem {...item}/></li>)}
        </ul>
    )
}
