import { useSelector } from "react-redux";
import ProductInBasketHeader from "./ProductInBasketHeader";
import { useEffect, useState } from "react";

const Header = () => {
    const products = useSelector((state) => state.product.products)

    const [sub , setSub] = useState(0);

    useEffect(()=> {
        setSub(products.reduce((sum, product) => 
        sum + product.price, 0));
    } 
    , [products])
    
    return (
        <header className="container">
            <section className="header">
                <div className="header__logo_search">
                    <a className="brend-logo__link" href="/">
                        <div className="brend-logo__logo">
                            <img className="brend-logo__logo-img" src="./img/header/main_logo.png" alt="logo" />
                            <h3 className="brend-logo__text-h3">
                                BRAN
                                <span className="brend-logo__text-color">D</span>
                            </h3>
                        </div>
                    </a>
                    <div className="header__search">
                        <div className="mini__menu">
                            <details className="mini__search">
                                <summary className="mini__search__btn">Browse
                                    <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                    </svg>
                                </summary>
                                <div className="mini__box">
                                    <div className="mini__item">
                                        <h3 className="mini__title">Women</h3>
                                        <div className="mini__line"></div>
                                        <a href="" className="mini__link">Dresses</a>
                                        <a href="" className="mini__link">Tops</a>
                                        <a href="" className="mini__link">Sweaters/Knits</a>
                                        <a href="" className="mini__link">Jackets/Coats</a>
                                        <a href="" className="mini__link">Blazers</a>
                                        <a href="" className="mini__link">Denim</a>
                                        <a href="" className="mini__link">Leggings/Pants</a>
                                        <a href="" className="mini__link">Skirts/Shorts</a>
                                        <a href="" className="mini__link">Accessories</a>
                                    </div>
                                    <div className="mini__item">
                                        <h3 className="mini__title">Man</h3>
                                        <div className="mini__line"></div>
                                        <a href="" className="mini__link">Dresses</a>
                                        <a href="" className="mini__link">Tops</a>
                                        <a href="" className="mini__link">Sweaters/Knits</a>
                                        <a href="" className="mini__link">Jackets/Coats</a>
                                        <a href="" className="mini__link">Blazers</a>
                                        <a href="" className="mini__link">Denim</a>
                                        <a href="" className="mini__link">Leggings/Pants</a>
                                        <a href="" className="mini__link">Skirts/Shorts</a>
                                        <a href="" className="mini__link">Accessories</a>
                                    </div>
                                </div>
                            </details>
                        </div>
                        {/* <!-- ----------------Выпадающее мини-меню------------------------- --> */}
                        <form className="header__search__form" action="">
                            <input className="header__search__input" type="text" placeholder="Search for Item..." />
                            <button className="header__search__btn2">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="header__basketbutton">
                    <div className="header__basket">
                        <svg className="header__basketbutton_basket" xmlns="http://www.w3.org/2000/svg" fill="#222">
                            <path
                                d="M3.184 4.364h3.393l4.833 17.455c.138.512.611.867 1.144.867h14.855c.473 0 .887-.276 1.085-.71l5.405-12.411a1.195 1.195 0 0 0-.099-1.123 1.176 1.176 0 0 0-.986-.532H16.4c-.651 0-1.184.532-1.184 1.182 0 .65.533 1.182 1.184 1.182h14.598l-4.38 10.048H13.443L8.609 2.867A1.183 1.183 0 0 0 7.464 2h-4.28C2.533 2 2 2.532 2 3.182c0 .65.533 1.182 1.184 1.182ZM11.429 31a2.684 2.684 0 0 0 2.683-2.68 2.684 2.684 0 0 0-5.365 0A2.684 2.684 0 0 0 11.429 31Zm16.769 0h.197a2.678 2.678 0 0 0 1.835-.926c.473-.532.69-1.222.65-1.95-.098-1.458-1.38-2.581-2.86-2.483-1.48.099-2.584 1.399-2.485 2.857.098 1.399 1.262 2.502 2.663 2.502Z" />
                        </svg>
                        <div className="basketbutton-box">
                            <div className="basketbutton-scroll" 

                            style={products.length < 3 ? null 
                            : { height: "300px", overflowY: "scroll", scrollbarColor: "#f16d7f #fbfbfb", scrollbarWidth: "thin"}}>

                                {products.length !== 0 ?
                                    products.map(product =>
                                        <ProductInBasketHeader key={product.id}
                                            id={product.id}
                                            cardLink={product.cardLink}
                                            img={product.img}
                                            title={product.title}
                                            price={product.price}
                                        />
                                    )
                                    : <>
                                        <h4 className="box__product__name"> ! Your cart is Empty!</h4>
                                        <br/>
                                        <div className="box__line"></div>
                                     </>                       
                                }
                                    </div>
                                <div className="box__total">
                                    <h2 className="box__text-h2">TOTAL</h2>
                                    <h2 className="box__text-h2 sum">$ {sub}</h2>
                                </div>
                                <a className="box__link-btn" href="./checkout">Checkout</a>
                                <a className="box__link-btn box__link-btn_clr" href="./basket">Go to
                                    cart</a>
                            </div>
                        </div>
                        <div className="box__product-cnt" style={products.length != 0 ? null : {display: "none"}} >
                            <h3 className="box__count">{products.length}</h3>
                        </div>
                        <form action="">
                            <button className="header__basketbutton__btn">My Account

                                <svg className="header__basketbutton_svg" fill="#fff" height="9px" width="9px" version="1.1"
                                    id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 386.257 386.257" >
                                    <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
                                </svg>
                            </button>
                        </form>
                    </div>
            </section>
            <section className="menu">
                <ul className="menu__box" action="">
                    <li className="menu__list"><a className="menu__box__btn" href="#">Home</a></li>
                    <li className="menu__list"><a className="menu__box__btn" href="#">Man</a>
                        <div className="mega__box">
                            <div className="mega__item">
                                <h3 className="mega__title">Women</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>

                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="./single.html" className="mega__sale">
                                    <h4 className="mega__sale__text"> SUPER SALE!</h4>
                                </a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Kids</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                        </div>
                    </li>
                    <li className="menu__list"><a className="menu__box__btn" href="#">Women</a>
                        <div className="mega__box">
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="./single.html" className="mega__sale">
                                    <h4 className="mega__sale__text"> SUPER SALE!</h4>
                                </a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                        </div>
                    </li>
                    <li className="menu__list"><a className="menu__box__btn" href="#">Kids</a>
                        <div className="mega__box">
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="./single.html" className="mega__sale">
                                    <h4 className="mega__sale__text"> SUPER SALE!</h4>
                                </a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                        </div>
                    </li>
                    <li className="menu__list"><a className="menu__box__btn" href="#">Accoseriese</a>
                        <div className="mega__box mega__last">
                            <div className="mega__item">
                                <h3 className="mega__title mega__title_last">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="./single.html" className="mega__sale">
                                    <h4 className="mega__sale__text"> SUPER SALE!</h4>
                                </a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                        </div>
                    </li>
                    <li className="menu__list"><a className="menu__box__btn" href="#">Featured</a>
                        <div className="mega__box mega__last">
                            <div className="mega__item">
                                <h3 className="mega__title mega__title_last">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title mega__title_last">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="./single.html" className="mega__sale">
                                    <h4 className="mega__sale__text"> SUPER SALE!</h4>
                                </a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title mega__title_last">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                        </div>
                    </li>
                    <li className="menu__list"><a className="menu__box__btn" href="#">Hot Deals</a>
                        <div className="mega__box mega__last">
                            <div className="mega__item">
                                <h3 className="mega__title mega__title_last">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title mega__title_last">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="./single.html" className="mega__sale">
                                    <h4 className="mega__sale__text"> SUPER SALE!</h4>
                                </a>
                            </div>
                            <div className="mega__item">
                                <h3 className="mega__title mega__title_last">Man</h3>
                                <div className="mega__line"></div>
                                <a href="" className="mega__link">Dresses</a>
                                <a href="" className="mega__link">Tops</a>
                                <a href="" className="mega__link">Sweaters/Knits</a>
                                <a href="" className="mega__link">Jackets/Coats</a>
                                <a href="" className="mega__link">Blazers</a>
                                <a href="" className="mega__link">Denim</a>
                                <a href="" className="mega__link">Leggings/Pants</a>
                                <a href="" className="mega__link">Skirts/Shorts</a>
                                <a href="" className="mega__link">Accessories</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header;