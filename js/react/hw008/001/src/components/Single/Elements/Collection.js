const Collection = () => {
	return (
		<section className="container-low">
        <section className="collection">
            <h4 className="collection__head">WOMEN COLLECTION</h4>
            <div className="collection__lines">
                <div className="collection__line1"></div>
                <div className="collection__line2"></div>
                <div className="collection__line1"></div>
            </div>
            <h2 className="collection__name">Moschino Cheap And Chic</h2>
            <p className="collection__text-p">Compellingly actualize fully researched processes before proactive
                outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
                Completely visualize parallel core competencies rather than exceptional portals.</p>
            <div className="collection__info">
                <h3 className="collection__text-h3">MATERIAL: <span className="collection__text">COTTON</span></h3>
                <h3 className="collection__text-h3">DESIGNER: <span className="collection__text">BINBURHAN </span></h3>
            </div>
            <h2 className="collection__price">$561</h2>
            <div className="collection__down-line"></div>
            <form>
                <div className="collection__block-det">
                    <div className="collection__det">
                        <h3 className="collection__text">CHOOSE COLOR</h3>

                        <div className="collection-box__sort-by">
                            <details className="collection-box__sort-det">
                                <summary className="collection-box__sort-det__summary">
                                    <div className="collection-box__summary-box">
                                        <div className="clr-block1"></div>
                                        <h4 className="collection-box__sort__text-h4">Red</h4>
                                    </div>
                                    <svg className="angle-down arrow_margin" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512" width="12px" height="12px">
                                        <path
                                            d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                    </svg>
                                </summary>
                                <ul className="collection-box__sort-det__ul">
                                    <li className="collection-box__sort-det__li">
                                        <div className="clr-block1"></div>
                                        Red
                                    </li>
                                    <li className="collection-box__sort-det__li">
                                        <div className="clr-block2"></div>
                                        Orange
                                    </li>
                                    <li className="collection-box__sort-det__li">
                                        <div className="clr-block3"></div>
                                        Grey
                                    </li>
                                    <li className="collection-box__sort-det__li">
                                        <div className="clr-block4"></div>
                                        Black
                                    </li>
                                    <li className="collection-box__sort-det__li">
                                        <div className="clr-block5"></div>
                                        Blue
                                    </li>
                                </ul>
                            </details>
                        </div>

                    </div>
                    <div className="collection__det">
                        <h3 className="collection__text">CHOOSE SIZE</h3>

                        <div className="collection-box__sort-by">
                            <details className="collection-box__sort-det">
                                <summary className="collection-box__sort-det__summary">XXL
                                    <svg className="angle-down arrow_margin" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512" width="12px" height="12px">
                                        <path
                                            d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                    </svg>
                                </summary>
                                <ul className="collection-box__sort-det__ul">
                                    <li className="collection-box__sort-det__li">XXL</li>
                                    <li className="collection-box__sort-det__li">XL</li>
                                    <li className="collection-box__sort-det__li">L</li>
                                    <li className="collection-box__sort-det__li">S</li>
                                    <li className="collection-box__sort-det__li">M</li>
                                </ul>
                            </details>
                        </div>

                    </div>
                    <div className="collection__det">
                        <h3 className="collection__text">QUANTITY</h3>
                        <input className="collection__input" type="number" min="1" placeholder="2"/>
                    </div>
                </div>
                <button className="collection-btn">
                    <svg className="collection-btn__svg" xmlns="http://www.w3.org/2000/svg"
                        width="23px" height="22px" viewBox="0 0 36 32"
                        fill="#fff">
                        <path 
                            d="M3.1835938,4.3639603 C3.1835938,4.3639603 6.57666,4.3639603 6.57666,4.3639603 C6.57666,4.3639603 11.409912,21.81926 11.409912,21.81926 C11.547852,22.331264 12.021362,22.685959 12.553955,22.685959 C12.553955,22.685959 27.40857,22.685959 27.40857,22.685959 C27.881958,22.685959 28.296265,22.410057 28.49353,21.976841 C28.49353,21.976841 33.89868,9.564976 33.89868,9.564976 C34.05652,9.190784 34.01709,8.777065 33.80017,8.442135 C33.583008,8.107204 33.208252,7.910095 32.81372,7.910095 C32.81372,7.910095 16.400757,7.910095 16.400757,7.910095 C15.749756,7.910095 15.217163,8.442135 15.217163,9.092228 C15.217163,9.742321 15.749756,10.274361 16.400757,10.274361 C16.400757,10.274361 30.998901,10.274361 30.998901,10.274361 C30.998901,10.274361 26.619507,20.32196 26.619507,20.32196 C26.619507,20.32196 13.44165,20.32196 13.44165,20.32196 C13.44165,20.32196 8.6085205,2.866665 8.6085205,2.866665 C8.470581,2.3543892 7.9970703,1.9996948 7.4643555,1.9996948 C7.4643555,1.9996948 3.1835938,1.9996948 3.1835938,1.9996948 C2.5325928,1.9996948 2.0,2.5317345 2.0,3.1818275 C2.0,3.8319206 2.5325928,4.3639603 3.1835938,4.3639603 ZM11.429443,30.999886 C12.909058,30.999886 14.112427,29.798256 14.112427,28.320457 C14.112427,26.842926 12.909058,25.641293 11.429443,25.641293 C9.949951,25.641293 8.746582,26.842926 8.746582,28.320457 C8.746582,29.797989 9.949951,30.999886 11.429443,30.999886 ZM28.197632,30.999886 C28.256836,30.999886 28.335815,30.999886 28.39502,30.999886 C29.105103,30.940865 29.756104,30.625694 30.229614,30.07389 C30.703003,29.542122 30.920044,28.852493 30.880493,28.123611 C30.781982,26.66558 29.499756,25.542736 28.020142,25.641293 C26.540527,25.739582 25.435791,27.040031 25.534546,28.497803 C25.633179,29.896545 26.796997,30.999886 28.197632,30.999886 Z" />
                    </svg>
                    <p className="collection-btn__txt">Add to Cart</p>

                </button>
            </form>
        </section>
    </section>
	)
}

export default Collection;