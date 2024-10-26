import { PageTitle } from "../PageTitle/PageTitle"

export const Registration = () => {
  return (
    <>
    <PageTitle name='REGISTRATION'/>

    <div className="registration__content center">

      <form className="registration__forms">
        <div className="registration__part">
          <label for="firstname" className="registration__forms__heading">Your name</label>

          <input className="input" type="text" name="personal" id="firstname" placeholder="First Name" required />
          <input className="input" type="text" name="personal" id="lastname" placeholder="Last Name" required />

        </div>

        <div className="registration__options">
          <input className="option-input registration_option-input" type="radio" name="sex" id="male" required /><span
            className="registration__sex">Male</span>
          <input className="option-input registration_option-input" type="radio" name="sex" id="female" required /><span
            className="registration__sex">Female</span>
          <input className="option-input registration_option-input" type="radio" name="sex" id="kiborg" required />
          <span className="registration__sex">Kiborg&nbsp; &#129302;</span>
        </div>

        <div className="registration__part">
          <label for="password" className="registration__forms__heading">Login details</label>
          <input className="input" type="email" name="details" id="email" placeholder="Email" required />
          <input className="input" type="password" name="details" id="password" placeholder="Password" required />
          <p className="registration__forms__text">
            Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters.
          </p>
        </div>
        <button className="registration__button" type="submit">JOIN NOW &#x2192;</button>
      </form>

      <div className="registration__perks">
        <h2 className="registration__heading">LOYALTY HAS ITS PERKS</h2>
        <p className="registration__text">Get in on the loyalty program where you can earn points and unlock serious
          perks. Starting with these as soon as you join:</p>
        <ul className="registration__list">
          <li className="registration__item">15% off welcome offer
          </li>
          <li className="registration__item">Free shipping, returns and exchanges on all orders

          </li>
          <li className="registration__item">$10 off a purchase on your birthday

          </li>
          <li className="registration__item">Early access to products</li>
          <li className="registration__item">Exclusive offers & rewards</li>
        </ul>
      </div>
    </div>

    </>
  )
}
