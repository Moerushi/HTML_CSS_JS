import { useDispatch } from "react-redux"
import { Button } from "../Button/Button"
import { addFavorite } from '../../redux/slicers/favoritesSlice';


export const Product = ({ id, name, description, price }) => {
    const dispatch = useDispatch();

    const addToFavorites = () => {
        dispatch(addFavorite(id));
    }

    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <Button handlerClick={addToFavorites}>To Favorites</Button>
        </>
    )
}
