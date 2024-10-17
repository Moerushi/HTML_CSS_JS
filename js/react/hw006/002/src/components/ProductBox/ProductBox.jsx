import { useSelector } from "react-redux";
import { ProductCard } from "../ProductCard/ProductCard";
import './ProductBox.css'

export const ProductBox = () => {

    const products = useSelector((state) => state.products);

    return (
        <div className="productBox">
            {products.items.map((prod) => <ProductCard key={prod.id} {...prod} />)}
        </div>
    )
}