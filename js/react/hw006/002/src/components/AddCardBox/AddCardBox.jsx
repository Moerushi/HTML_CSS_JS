import { useState } from 'react';
import './AddCardBox.css'
import { addProduct } from '../../redux/slicers/productsSlice';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';

export const AddCardBox = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && description.trim() && price.trim()) {
            dispatch(addProduct({ name, description, price, availability }));
            setName('');
            setDescription('');
            setPrice('');
            setAvailability(false);
        }
    }

    const handlerChangeName = ({ target }) => {
        setName(target.value);
    }

    const handlerChangeDescription = ({ target }) => {
        setDescription(target.value);
    }

    const handlerChangePrice = ({ target }) => {
        setPrice(target.value);
    }

    const handlerChangeAvailability = ({ target }) => {
        setAvailability(target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='cardBox'>
                <input onChange={handlerChangeName} type="text" placeholder='Name' value={name} />
                <input onChange={handlerChangeDescription} type="text" placeholder='Description' value={description} />
                <input onChange={handlerChangePrice} type="text" placeholder='Price' value={price} />
                <span>Availability: </span><input onChange={handlerChangeAvailability} type="checkbox" checked={availability} />
            </div>
            <Button>Add new product</Button>
        </form>

    )
}
