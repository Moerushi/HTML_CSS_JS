import ProductCards from "./ProductCards";
import { data } from "../../../redux/slices/productSlice";

const ContentMiddle = () => {

    return (
        <section className="container-low">
            <div className="title">
                <h2 className="title__text-h2">Featured Items</h2>
                <p className="title__text-p">Shop for items based on what we featured in this week</p>
            </div>
            <section className="cards">
                {data.map(product => 
                    <ProductCards
                    key={product.id}
                    id={product.id}
                    cardLink={product.cardLink}
                    img={product.img}
                    addLink={product.addLink}
                    title={product.title}
                    price={product.price}
                    btnText={product.btnText}
                    sizes={product.sizes.join(', ')} />
                )}

            </section>
            <div className="middle">
                <form className="middle__form" action="./product">
                    <button className="middle__btn">Browse All Product <i className="fa-solid fa-right-long"></i></button>
                </form>
                <section className="middle__offer">
                    <div className="middle__img">
                        <div className="middle__sale">
                            <h2 className="middle__sale-h2">30% <span className="middle__sale-h2_clr">OFFER</span></h2>
                            <h3 className="middle__sale-h3">FOR WOMEN</h3>
                        </div>
                    </div>
                    <div className="middle__box">
                        <div className="middle__discription">
                            <div className="middle__img-block_size">
                                <img className="middle__discription__img1" src="./img/middle/truck.svg" alt="" />
                            </div>
                            <div className="middle__text">
                                <div className="middle__text-h2">
                                    Free Delivery
                                </div>
                                <p className="middle__text-p">
                                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                                    extensive models.
                                </p>
                            </div>
                        </div>
                        <div className="middle__discription">
                            <div className="middle__img-block_size">
                                <img className="middle__discription__img2" src="./img/middle/persent.svg" alt="" />
                            </div>
                            <div className="middle__text">
                                <div className="middle__text-h2">
                                    Sales &#38 discounts
                                </div>
                                <p className="middle__text-p">
                                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                                    extensive models.
                                </p>
                            </div>
                        </div>
                        <div className="middle__discription">
                            <div className="middle__img-block_size">
                                <img className="middle__discription__img3" src="./img/middle/crown.svg" alt="" />
                            </div>
                            <div className="middle__text">
                                <div className="middle__text-h2">
                                    Quality assurance
                                </div>
                                <p className="middle__text-p">
                                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                                    extensive models.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default ContentMiddle;