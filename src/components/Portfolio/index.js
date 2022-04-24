import noodleSoup from '../../assets/noodle-soup.png';
import emeraldMarigold from '../../assets/emerald-marigold.png';
import ownSpace from '../../assets/own-space.png';
import spring from '../../assets/spring.png';
import chatLogo from '../../assets/chat-logo.png';

import './style.scss';

const Portfolio = () => {
    return (
        <main className='Portfolio'>
            <div className='Portfolio__header'>
                <h1 className='Portfolio__title'>Referenzen</h1>
                <p className='Portfolio__description'>Von unseren Designern gestaltet, von unseren Entwicklern
                    programmiert, von unserem Team realisiert — in enger Abstimmung mit dem Kunden. Zum Festpreis.</p>
            </div>
            <div className='Portfolio__items'>
                <div className='Portfolio-item'>
                    <div className='Portfolio-item__inner'>
                        <img
                            className='Portfolio-item__image'
                            src={noodleSoup}
                            alt='Portfolio image'
                        />
                        <p className='Portfolio-item__text'>Webdesign Agentur</p>
                    </div>
                    <div className='Portfolio-item__description-block Portfolio-item__description-block--left-align'>
                        <h2 className='Portfolio-item__title'>Webdesign Agentur</h2>
                        <p className='Portfolio-item__description'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle
                            Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren
                            wir.
                        </p>
                    </div>
                </div>
                <div className='Portfolio-item'>
                    <div className='Portfolio-item__inner Portfolio-item__inner--right-align'>
                        <img
                            className='Portfolio-item__image'
                            src={emeraldMarigold}
                            alt='Portfolio image'
                        />
                        <p className='Portfolio-item__text'>Webdesign Agentur</p>
                    </div>
                    <div className='Portfolio-item__description-block Portfolio-item__description-block--right-align'>
                        <h2 className='Portfolio-item__title'>Webdesign Agentur</h2>
                        <p className='Portfolio-item__description'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle
                            Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren
                            wir.
                        </p>
                    </div>
                </div>
                <div className='Portfolio-item'>
                    <div className='Portfolio-item__inner'>
                        <img
                            className='Portfolio-item__image'
                            src={ownSpace}
                            alt='Portfolio image'
                        />
                        <p className='Portfolio-item__text'>Webdesign Agentur</p>
                    </div>
                    <div className='Portfolio-item__description-block Portfolio-item__description-block--left-align'>
                        <h2 className='Portfolio-item__title'>Webdesign Agentur</h2>
                        <p className='Portfolio-item__description'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle
                            Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren
                            wir.
                        </p>
                    </div>
                </div>
                <div className='Portfolio-item'>
                    <div className='Portfolio-item__inner Portfolio-item__inner--right-align'>
                        <img
                            className='Portfolio-item__image'
                            src={spring}
                            alt='Portfolio image'
                        />
                        <p className='Portfolio-item__text'>Webdesign Agentur</p>
                    </div>
                    <div className='Portfolio-item__description-block Portfolio-item__description-block--right-align'>
                        <h2 className='Portfolio-item__title'>Webdesign Agentur</h2>
                        <p className='Portfolio-item__description'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle
                            Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren
                            wir.
                        </p>
                    </div>
                </div>
            </div>
            <div className='chat'>
                <img className='chat__logo' src={chatLogo} alt='Chat logo'/>
            </div>
        </main>
    )
}

export default Portfolio;
