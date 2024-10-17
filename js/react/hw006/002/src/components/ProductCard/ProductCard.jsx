import { Button } from '../Button/Button'
import './ProductCard.css'
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, availabilityProductChange } from "../../redux/slicers/productsSlice";


export const ProductCard = ({ id, name, description, price, available }) => {
    const { items } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div className="productCard">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{available ? 'Available' : 'Not-Available'}</p>
            <div className='buttons'>
                <Button handlerClick={() => dispatch(deleteProduct(id))}>Delete</Button>
                <Button>Update</Button>
                <Button handlerClick={() => dispatch(availabilityProductChange(id))}>Availability</Button>
            </div>

        </div>
    )
}
