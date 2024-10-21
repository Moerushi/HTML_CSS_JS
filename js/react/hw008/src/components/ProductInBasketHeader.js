import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productSlice";

const ProductInBasketHeader = ({id, cardLink, img, title, price}) => {

    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }

    
	return (
        <div className="container" key={id}>
            <a className="box__link" href={cardLink}>
            <div className="box__product">
                <img className="box__img" src={img} alt="product"/>
                <div className="box__mini">
                     <h4 className="box__product__name">${title}</h4>
                     <img src="./img/header/header_box_stars.jpg" alt=""/>
                     <h4 className="box__name__quantity">1 x ${price}</h4>
                </div>
                <form>
                    <button id={id} className="box__delete_btn" onClick={handleDelete}>
                        <img className="box__img2" src="./img/header/header_box_close.png" alt="close"/>
                    </button>
                </form>
            </div>
        </a>
        <div className="box__line"></div>
        </div>
	)
}
export default ProductInBasketHeader;