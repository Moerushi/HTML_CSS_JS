import { useDispatch } from "react-redux";
import { deleteProduct, setQuantity } from "../../redux/slices/productSlice";
import { useEffect, useState } from "react";


const ProductsInBasket = ({ id, cardLink, img, title, color, price, shipping, sizes, quantity }) => {
    const [productQuantity, setProductQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }
    
    const handleQuantity = (e, id) => {
        const value = parseInt(e.target.value);
        setProductQuantity(value);
    
        dispatch(setQuantity({id, value: value}));
    }
    return (
        <div className="shopping__product">
            <div className="shopping__card">
                <a href={cardLink}>
                    <img className="shopping__img" src={img} alt="product" />
                </a>
                <div className="card__details">
                    <h2 className="card__title">{title}</h2>
                    <h3 className="card__parametr">Color: <span className="card__span">{color}</span></h3>
                    <h3 className="card__parametr">Size: <span className="card__span">{sizes}</span></h3>
                </div>
            </div>
            <div className="shopping__card-tbl">
                <h3 className="card__parametr">$ {price}</h3>
            </div>
            <div className="shopping__card-tbl">
                <input
                    id={id}
                    className="shopping__card__quantity"

                    value={productQuantity}
                    onChange={(e) => handleQuantity(e, id)}
                    type="number"
                    min="1" />
            </div>
            <div className="shopping__card-tbl">
                <h3 className="card__parametr">{(shipping > 0) ? shipping : "FREE"}</h3>
            </div>
            <div className="shopping__card-tbl subtotal">
                <h3 className="card__parametr ">$ <span className="subtotal">{price * quantity + shipping}</span></h3>
            </div>
            <div className="shopping__card-tbl ">
                <a id={id} className="delete_btn" href="#" onClick={handleDelete}><img src="./img/shopping/shop_close.jpg" alt="close button" /></a>
            </div>
        </div>
    )
}

export default ProductsInBasket;