const Product = () => {
    return (
        <section className="container bgc-product">
            <section className="product">
                <div className="product__arrow-lf">

                    <svg className="product__svg-lf" fill="#fff" width="18px" height="24px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"
                    >
                        <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
	l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
	C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z" />
                    </svg>
                </div>
                <img className="product__img" src="./img/single/single_main_girl.jpg" alt="girl" />
                <div className="product__arrow-rt">
                    <svg className="product__svg-rt" fill="#fff" width="20px" height="24px" viewBox="0 0 1024 1024"
                        version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
                    </svg>
                </div>

            </section>
        </section>
    )
}
export default Product;