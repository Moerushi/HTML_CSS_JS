const Subscribe = () => {
	return (
		<section className="container bg-image">
        <section className="container-low">
            <div className="footer">
                <aside className="footer__subscribe">
                    <img className="footer__img" src="img/footer/girl_face.png" alt=""/>
                    <section className="footer__girl">
                        <h3 className="footer__text-h3">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </h3>
                        <div className="footer__block">
                            <h4 className="block__text-h4">Bin Burhan</h4>
                            <h5 className="block__text-h5">Dhaka, Bd</h5>
                            <section className="block__lines">
                                <div className="block__line1"></div>
                                <div className="block__line2"></div>
                                <div className="block__line1"></div>
                            </section>
                        </div>
                    </section>
                    <section className="subscribe">
                        <div className="subscribe__block">
                            <h3 className="subscribe__text-h3">SUBSCRIBE </h3>
                            <h4 className="subscribe__text-h4">FOR OUR NEWLETTER AND PROMOTION</h4>
                        </div>
                        <form className="subscribe__form" action="">
                            <input className="subscribe__input" placeholder="Enter Your Email" type="email"/>
                            <button className="subscribe__btn">Subscribe</button>
                        </form>
                    </section>
                </aside>
            </div>
        </section>
    </section>
	)
}
export default Subscribe;