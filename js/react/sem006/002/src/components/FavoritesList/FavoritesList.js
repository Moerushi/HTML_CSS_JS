import { useDispatch, useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { deleteFavorite } from '../../redux/slicers/favoritesSlice';
import { Favorite } from "../Favorite/Favorite";

export const FavoritesList = ({ products }) => {
    const dispatch = useDispatch();
    const favorite = useSelector((state) => state.favorite);



    return (
        <>
            <h1>Favorites List: </h1>
            <ul>
                {products
                    .filter((prod) => favorite.favorites.includes(prod.id))
                    .map(({ id, name }) => (

                        <li key={id}><Favorite id={id} name={name}/></li>

                        // <li key={id}>
                        //     <p>{name}</p>
                        //     {/* <Button handlerClick={() => dispatch(deleteFavorite(id))}>Delete</Button> */}
                        //     <Button handlerClick={deleteFromFavorites}>Delete</Button>
                        // </li>
                    ))
                }
            </ul>
        </>
    )
}
