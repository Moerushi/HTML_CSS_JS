import { useDispatch } from "react-redux"
import { Button } from "../Button/Button"
import { deleteFavorite } from '../../redux/slicers/favoritesSlice';

export const Favorite = ({ id, name }) => {
    const dispatch = useDispatch();

    const deleteFromFavorites = () => {
        dispatch(deleteFavorite(id));
    }

    return (
        <>
            <p>{name}</p>
            <Button handlerClick={deleteFromFavorites}>Delete</Button>
        </>
    )
}