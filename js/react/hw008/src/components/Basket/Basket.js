import { useSelector } from 'react-redux';
import Arrivals from '../Arrivals';
import ProductsInBasket from './ProductsInBasket';
import { useEffect, useState } from 'react';


const Basket = () => {
    const products = useSelector((state) => state.product.products);
    const [sub , setSub] = useState(0);
    const [total, setTotal] = useState(0);


    useEffect(()=> {
        setSub(products.reduce((sum, product) => 
        sum + (product.quantity * product.price), 0));

        setTotal(products.reduce((sum, product) => 
       sum + (product.quantity * product.price + product.shipping), 0))
    } 
    , [products])
    

    return (
        <div>
            <Arrivals />
            <section className="container-low">
                <section className="shopping">
                    <div className="shopping__head">
                        <h2 className="shopping__title shopping__title__det">Product details</h2>
                        <h2 className="shopping__title">Unite price</h2>
                        <h2 className="shopping__title">Quantity</h2>
                        <h2 className="shopping__title">Shipping</h2>
                        <h2 className="shopping__title">Subtotal</h2>
                        <h2 className="shopping__title">Action</h2>
                    </div>

                    {products.length !== 0 ?
                        products.map(product =>
                            <ProductsInBasket
                                key={product.id}
                                id={product.id}
                                cardLink={product.cardLink}
                                img={product.img}
                                title={product.title}
                                price={product.price}
                                quantity={product.quantity}
                                color={product.color}
                                shipping={product.shipping}
                                sizes={product.sizes.join(', ')}
                            />
                        )
                        : <>
                            <h4 className="box__product-basket"> ! Your cart is Empty, Buy Something Already!</h4>
                        </>
                    }
                </section>
                <section className="action-btns">
                    <form action="">
                        <button className="action-btn">Clear shopping cart</button>
                    </form>
                    <form action="./product.html">
                        <button className="action-btn">Continue shopping</button>
                    </form>
                </section>

                <section className="filling-form">
                    <form className="filling-form__adress">
                        <h2 className="filling-form__text-h2">Shipping Adress</h2>
                        <details className="filling-form__sum">
                            <summary className="filling-form__summary">Bangladesh
                                <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                    viewBox="0 0 320 512">
                                    <path
                                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                </svg>
                            </summary>
                            <ul className="filling-form__ul">
                                <li className="filling-form__li">Moskow</li>
                                <li className="filling-form__li">New York</li>
                                <li className="filling-form__li">London</li>
                                <li className="filling-form__li">Los Angeles</li>
                            </ul>
                        </details>
                        <input className="filling-form__box" type="text" name="" placeholder="State" />
                        <input className="filling-form__box" type="text" name="" placeholder="Postcode / Zip" />
                        <button className="filling-form__btn action-btn">get a quote</button>
                    </form>
                    <form className="filling-form__discount">
                        <h2 className="filling-form__text-h2">Coupon discount</h2>
                        <p className="filling-form__text-p">Enter your coupon code if you have one</p>
                        <input className="filling-form__box" type="text" name="" placeholder="State" />
                        <button className="filling-form__btn action-btn">Apply coupon</button>
                    </form>
                    <div className="filling-form__total">
                        <p className="filling-form__text-p1">Sub total {'\u00A0'} <span className="sub-total"> ${sub}</span></p>
                        <h2 className="filling-form__text-h3">GRAND TOTAL {'\u00A0'} <span className="filling-form__span"> ${total}</span></h2>
                        <div className="filling-form__line"></div>
                        <form action="./checkout.html">
                            <button className="filling-form__btn1" >proceed to checkout</button>
                        </form>
                    </div>
                </section>
            </section>
        </div>


    )
}
export default Basket;