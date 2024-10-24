import '../../styles/style.scss'
import subscribe_woman from '../../assets/subscribe_woman.svg'

export const Subscription = () => {
  return (
    
<div className="subscribe center">
      <div className="subscribe__filter"></div>
      <div className="subscribe__quote">
        <div className="subscribe__quote__elipse-filter">
          <img src={subscribe_woman} alt="subscribe__quote__img" className="subscribe__quote__img" />
        </div>
        <p className="subscribe__quote__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span
            className="subscribe__quote__italic">a pulvinar purus condimentum</span>“</p>
      </div>

      <div className="subscribe__input">
        <h3 className="subscribe__input_heading">SUBSCRIBE</h3>
        <p className="subscribe__input__text">FOR OUR NEWLETTER AND PROMOTION</p>
        <div className="subscribe__input__form">
          <input type="email" className="subscribe__input__email" placeholder="Enter Your Email" required />
          <button type="submit" className="subscribe__input__buttom">Subscribe</button>
        </div>
      </div>
    </div>


  )
}
