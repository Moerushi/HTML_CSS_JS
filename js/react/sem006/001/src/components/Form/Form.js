import { useState } from 'react';
import {Button} from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slicers/todoSlice';

export const Form = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handlerChange = ({target}) => {
        setValue(target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(value)); // value попадает в payload
        setValue('');
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input onChange={handlerChange} value={value} />
            <Button>Add</Button>
        </form>

    );
}