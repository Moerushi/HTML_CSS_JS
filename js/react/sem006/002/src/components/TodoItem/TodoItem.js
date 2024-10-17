import { useDispatch } from "react-redux"
import { Button } from "../Button/Button"
import { deleteTodo } from '../../redux/slicers/todoSlice';


export const TodoItem = ({ id, text }) => {
    const dispatch = useDispatch();

    const deleteItem = () => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteTodo(id));
        }
    }

    return (
        <div>
            <p>{text}</p>
            <Button handlerClick={deleteItem}>Delete</Button>
        </div>
    )
}
