import { Button } from '../Button/Button'
import './ProductCard.css'
import { useDispatch } from "react-redux";
import { deleteProduct, availabilityProductChange, editProduct } from "../../redux/slicers/productsSlice";


export const ProductCard = ({ id, name, description, price, available }) => {
    const dispatch = useDispatch();

    return (
        <div style={{borderColor: available ? '#00ff2f' : '#ff6200'}} className="productCard">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{available ? 'Available' : 'Not-Available'}</p>
            <div className='buttons'>
                <Button handlerClick={() => dispatch(deleteProduct(id))}>Delete</Button>
                <Button handlerClick={() => {}}>Edit</Button>
                <Button handlerClick={() => dispatch(availabilityProductChange(id))}>Availability</Button>
            </div>
        </div>
    )
}