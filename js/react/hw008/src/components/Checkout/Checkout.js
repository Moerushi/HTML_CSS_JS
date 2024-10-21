import Arrivals from '../Arrivals';

const Checkout = () => {
	return (
        <div>
            <Arrivals />
            <section className="container-low">
                <div className="cont">
                <details open>
                <summary className="cont__title">01. Shipping Adress</summary>
                <div className="cont__box">
                    <div className="cont__check">
                        <h3 className="cont__h3">Check as a guest or register</h3>
                        <p className="cont__p">Register with us for future convenience</p>
                        <form className="cont__radio" action="">
                            <input className="cont__chk" type="radio"/> checkout as guest
                            <br/>
                            <input className="cont__chk2" type="radio"/> register
                            <h3 className="cont__h3">register and save time!</h3>
                            <p className="cont__p">Register with us for future convenience</p>
                            <div className="cont__p-box">
                                <p className="cont__p1">
                                    <img src="./img/content/arrows_right.png" alt=""/>
                                    Fast and easy checkout
                                </p>
                                <p className="cont__p1">
                                    
                                    <img src="./img/content/arrows_right.png" alt=""/>
                                    Easy access to your order history and status
                                </p>
                            </div>
                            <button className="cont__btn">Continue</button>
                        </form>
                    </div>
                    <div className="cont__already">
                        <h3 className="cont__h3">Already registed?</h3>
                        <p className="cont__p">Please log in below</p>
                        <form action="">
                            <h4 className="cont__h4">EMAIL ADDRESS<span className="cont__span">*</span></h4>
                            <input className="cont__input" type="email"/>
                            <h4 className="cont__h4">PASSWORD<span className="cont__span"> *</span></h4>
                            <input className="cont__input2" type="password"/>
                            <p className="cont__span1">* Required Fileds</p>
                            <button className="cont__btn">Log in</button>
                            <a href="" className="cont__link">Forgot Password ?</a>
                        </form>

                    </div>
                </div>
                </details>
                <div className="cont__line"></div>
                <details>
                    <summary className="cont__title">02. BILLING INFORMATION</summary>
                </details>
                <div className="cont__line"></div>
                <details>
                    <summary className="cont__title">03. SHIPPING INFORMATION</summary>
                </details>
                <div className="cont__line"></div>
                <details>
                    <summary className="cont__title">04. SHIPPING METHOD</summary>
                </details>
                <div className="cont__line"></div>
                <details>
                <summary className="cont__title">05. PAYMENT METHOD</summary>
                </details>
                <div className="cont__line"></div>
                <details>
                    <summary className="cont__title">06. ORDER REVIEW</summary>
                </details>
                <div className="cont__line"></div>
                </div>
            </section>
        </div>
		
	)
}

export default Checkout;