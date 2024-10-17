import { Product } from "../Product/Product"

export const ProductsList = ({products}) => {
    return (
        <>
        <h1>Products List: </h1>
                <ul>
            {products.map((product) => <li key={product.id}><Product {...product}/></li>)}
        </ul>
        </>

    )
}