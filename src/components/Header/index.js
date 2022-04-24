import {Link} from 'react-router-dom';

import headerImage from '../../assets/header-bg.png';
import './style.scss';

const Header = () => {

    return (
        <header className='Header'>
            <div className='Header__top'>
                <div className='logo'>
                    <a className='logo__link' href='#'>GENIUS</a>
                </div>
                <nav className='menu'>
                    <ul className='menu__list'>
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
                <div className='Header__language'>EN</div>
            </div>
            <div className='Header-image'>
                <img src={headerImage} width='100%' alt='header-image'/>
            </div>
        </header>
    )
}

export default Header;
