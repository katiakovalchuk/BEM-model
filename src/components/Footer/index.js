import {useState} from 'react';
import {Link} from 'react-router-dom';

import locationLogo from '../../assets/location-logo.png';
import emailLogo from '../../assets/email-logo.png';
import phoneLogo from '../../assets/phone-logo.png';
import './style.scss';
import '../Header/style.scss';


const Footer = () => {
    const [state, setstate] = useState({});

    return (
        <footer className='Footer'>
            <nav className='menu footer-menu'>
                <ul className='menu__list footer-menu__list'>
                    <li className='menu__list-item'>
                        <Link to='#' className='menu__link'>Preise</Link>
                    </li>
                    <li className='menu__list-item'>
                        <Link to='#' className='menu__link'>Referenzen</Link>
                    </li>
                    <li className='menu__list-item'>
                        <Link to='#' className='menu__link'>Kontakt</Link>
                    </li>
                </ul>
            </nav>
            <div className='contact'>
                <div className='contact-info'>
                    <div className='contact-info__outer'>
                        <div className='contact-info__inner'>
                            <div className='contact-info__item'>
                                <img className='contact-info__logo' src={locationLogo} alt='Location logo'/>
                                <div className='contact-info__text'>Poststr, 45, 44890 Hamburg</div>
                            </div>
                            <div className='contact-info__item'>
                                <img className='contact-info__logo' src={emailLogo} alt='Location logo'/>
                                <div className='contact-info__text'>HELLO@TRATATA.DE</div>
                            </div>
                            <div className='contact-info__item'>
                                <img className='contact-info__logo' src={phoneLogo} alt='Location logo'/>
                                <div className='contact-info__text'>040 380-33- 44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className='contact-form' onSubmit={e => {
                    e.preventDefault();
                    alert(`Firma: ${state.firma}, Email: ${state.email}, Telephone: ${state.tel}, Text: ${state.text}`);
                }}>
                    <div className='contact-form__inner'>
                        <h2 className='contact-form__header'>Schreiben Sie uns!</h2>
                        <input
                            className='contact-form__item'
                            placeholder='firma / organisation'
                            type='text'
                            required
                            onChange={e => setstate(prev => ({...prev, firma: e.target.value}))}
                        />
                        <input
                            className='contact-form__item contact-form__item--half-size'
                            placeholder='E-mail'
                            type='email'
                            required
                            onChange={e => setstate(prev => ({...prev, email: e.target.value}))}
                        />
                        <input
                            className='contact-form__item contact-form__item--half-size'
                            placeholder='Telefon'
                            type='tel'
                            required
                            onChange={e => setstate(prev => ({...prev, tel: e.target.value}))}
                        />
                        <textarea
                            className='contact-form__item contact-form__text-area'
                            placeholder='Was ist ihr anliegen?'
                            required
                            onChange={e => setstate(prev => ({...prev, text: e.target.value}))}
                        />
                        <button className='contact-form__btn' type='submit'>senden</button>
                    </div>
                </form>
            </div>
            <div className='Footer__text'>© 2019 Genius Web Agentur. Alle Rechte vorbehalten</div>
        </footer>
    )
}
export default Footer;
