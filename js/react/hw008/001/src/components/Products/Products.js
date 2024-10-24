// import { useSelector } from 'react-redux';
import Arrivals from '../Arrivals';
import ProductCard from './ProductCard';
import { dataSecond } from '../../redux/slices/productSlice';
import { useState } from 'react';


const Products = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleCheckboxChange = (size) => {
        setSelectedSizes((prevSelected) =>
            prevSelected.includes(size) // если входит в size то
                ? prevSelected.filter((s) => s !== size) // отфильтрует те размеры которые не равны size 
                : [...prevSelected, size] // иначе добавит в массив
        );
    };

    const filteredProducts = dataSecond.filter((product) =>
        selectedSizes.length === 0 || product.sizes.some((size) => selectedSizes.includes(size))
    );

    return (
        <div className="">
            <Arrivals />
            <section className="container-low">
                <section className="product-box">
                    <div className="product-box__menu">
                        <div className="product-box__content">
                            <details open className="product-box__item">
                                <summary className="product-box__head">CATEGORY
                                    <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                    </svg>
                                    <svg className="angle-up" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                                    </svg>
                                </summary>
                                <div className="product-box__link-box">
                                    <a href="#" className="product-box__link"> Accessories</a>
                                    <a href="#" className="product-box__link"> Bags</a>
                                    <a href="#" className="product-box__link"> Denim</a>
                                    <a href="#" className="product-box__link"> Hoodies & Sweatshirts</a>
                                    <a href="#" className="product-box__link"> Jackets & Coats</a>
                                    <a href="#" className="product-box__link"> Pants</a>
                                    <a href="#" className="product-box__link"> Polos</a>
                                    <a href="#" className="product-box__link"> Shirts</a>
                                    <a href="#" className="product-box__link"> Shoes</a>
                                    <a href="#" className="product-box__link"> Shorts</a>
                                    <a href="#" className="product-box__link"> Sweaters & Knits</a>
                                    <a href="#" className="product-box__link"> T-Shirts</a>
                                    <a href="#" className="product-box__link"> Tanks</a>
                                </div>
                            </details>
                            <details className="product-box__item">
                                <summary className="product-box__head">BRAND
                                    <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                    </svg>
                                    <svg className="angle-up" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                                    </svg>
                                </summary>
                                <div className="product-box__link-box">
                                    <a href="#" className="product-box__link">Bags</a>
                                    <a href="#" className="product-box__link">Denim</a>
                                    <a href="#" className="product-box__link">Shoes</a>
                                    <a href="#" className="product-box__link">Shirts</a>
                                </div>
                            </details>
                            <details className="product-box__item">
                                <summary className="product-box__head">DESIGNER
                                    <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                    </svg>
                                    <svg className="angle-up" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                                    </svg>
                                </summary>
                                <div className="product-box__link-box">
                                    <a href="#" className="product-box__link">Bags</a>
                                    <a href="#" className="product-box__link">Denim</a>
                                    <a href="#" className="product-box__link">Shoes</a>
                                    <a href="#" className="product-box__link">Shirts</a>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="product-box__cards-box">
                        <div className="product-box__filter">
                            <div className="product-box__title">
                                <h2 className="product-box__name">Trending now</h2>
                                <div className="product-box__style-box">
                                    <div className="product-box__box">
                                        <div className="product-box__style">
                                            <h4 className="product-box__text-h4">Bohemian</h4>
                                        </div>
                                        <div className="product-box__style">
                                            <h4 className="product-box__text-h4">Floral</h4>
                                        </div>
                                        <div className="product-box__style">
                                            <h4 className="product-box__text-h4">Lace</h4>
                                        </div>
                                    </div>
                                    <div className="product-box__box">
                                        <div className="product-box__style">
                                            <h4 className="product-box__text-h4">Floral</h4>
                                        </div>
                                        <div className="product-box__style">
                                            <h4 className="product-box__text-h4">Lace</h4>
                                        </div>
                                        <div className="product-box__style">
                                            <h4 className="product-box__text-h4">Bohemian</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-box__size">
                                <h2 className="product-box__name">Size</h2>
                                <form action="" className="product-box__form">

                                    {['S', 'M', 'L', 'X', 'XL'].map((size) => (
                                        <label key={size} className="product-box__input-size">
                                            <input
                                                type="checkbox"
                                                checked={selectedSizes.includes(size)}
                                                onChange={() => handleCheckboxChange(size)}
                                            />
                                            {size}
                                        </label>
                                    ))}
                                </form>

                            </div>
                            <div className="product-box_title">
                                <h2 className="product-box__name">Price</h2>
                                <img className="product-box__price_margin" src="./img/product/Price.png" alt="" />
                                <div className="product-box__range">
                                    <h3 className="product-box__text-h3">$52</h3>
                                    <h3 className="product-box__text-h3">$400</h3>
                                </div>
                            </div>
                        </div>
                        <div className="product-box__sorting">
                            <div className="product-box__sort-by">
                                <div className="product-box__sort">
                                    <h4 className="product-box__sort-h4">Sort By</h4>
                                </div>
                                <details className="product-box__sort-det">
                                    <summary className="product-box__sort-det__summary">Name
                                        <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                            width="12px" height="12px">
                                            <path
                                                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </summary>
                                    <ul className="product-box__sort-det__ul">
                                        <li className="product-box__sort-det__li">Name</li>
                                        <li className="product-box__sort-det__li">Color</li>
                                        <li className="product-box__sort-det__li">Material</li>
                                        <li className="product-box__sort-det__li">Price</li>
                                        <li className="product-box__sort-det__li">Size</li>
                                    </ul>
                                </details>
                            </div>
                            <div className="product-box__sort-by">
                                <div className="product-box__sort">
                                    <h4 className="product-box__sort-h4">Show</h4>
                                </div>
                                <details className="product-box__sort-det">
                                    <summary className="product-box__sort-det__summary">09
                                        <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                            width="12px" height="12px">
                                            <path
                                                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </summary>
                                    <ul className="product-box__sort-det__ul ul-show_wigth">
                                        <li className="product-box__sort-det__li">25</li>
                                        <li className="product-box__sort-det__li">16</li>
                                        <li className="product-box__sort-det__li">8</li>
                                        <li className="product-box__sort-det__li">4</li>
                                        <li className="product-box__sort-det__li">1</li>
                                    </ul>
                                </details>
                            </div>
                        </div>
                        <div className="product-box__cards">
                            <section className="cards">

                                {filteredProducts.length !== 0 ?
                                    filteredProducts.map(product =>
                                        <ProductCard
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
                                            btnText={product.btnText}
                                        />
                                    )
                                    : <>
                                        <h4 className="box__product__name"> ! Storage is Empty !</h4>
                                    </>
                                }
                            </section>
                        </div>
                        <div className="product-box__bottom">
                            <div className="product-box__pages">
                                <a className="pages__link" href=""><i className="fa-solid fa-angle-left"></i></a>
                                <a className="pages__link" href="">1</a>
                                <a className="pages__link" href="">2</a>
                                <a className="pages__link" href="">3</a>
                                <a className="pages__link" href="">4</a>
                                <a className="pages__link" href="">5</a>
                                <h2 className="product-box__dots pages__link">6.....20</h2>
                                <a className="pages__link" href=""><i className="fa-solid fa-angle-right"></i></a>
                            </div>
                            <form action="#">
                                <button className="product-box__navigation-btn">
                                    View All
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    )
}
export default Products;