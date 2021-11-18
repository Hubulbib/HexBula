import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import logo from './logoReact.png';
import mail from './mail.svg';
import marker from './marker.svg';
import gen from './gen.png'

const Footer : FC = () => {
    return(
        <div className="footer">
            <div className="discription">
                <img src={logo} alt={'Logo ReactorIT'} className="logo_footer"/>
                <p className="text_footer">Reactor IT - современные решения в веб-разработке.<br/><br/>Занимаемся разработкой веб-приложений, используя современные технологии.<br/><br/>Наш стек разработки - это React, MongoDB, NodeJS, ExpressJS.</p>
            </div>
            <div className="information">
                <div className="tables">
                    <div className="links">
                        <Link to="/home" className="link_main"><h1 className="link_text">Home</h1></Link>
                        <Link to="/tests" className="link_main"><h1 className="link_text">Tests</h1></Link>
                        <Link to="/calculator" className="link_main"><h1 className="link_text">Calculator</h1></Link>
                        <Link to="/converter" className="link_main"><h1 className="link_text">Converter</h1></Link>
                        <Link to="/contacts" className="link_main"><h1 className="link_text">Contacts</h1></Link>
                    </div>
                    <div className="adress">
                        <div className="adress_items">
                            <div className="marker_adress">
                                <img src={marker} alt={'location'} className="marker"/>
                                <h1 className="marker_text">Россия, Таганрог</h1>
                            </div>
                            <div className="mail_adress">
                                <img src={mail} alt={'mail'} className="mail"/>
                                <a target="_blank" rel="noreferrer" href="mailto:reactorit.tag.info@gmail.com" className="mail_text">ReactorIT.tag@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <h1 className="gen_text">Наш продукт</h1>
                        <a href="http://genanalysis.ru" target="_blank" rel="noreferrer"><img src={gen} alt={'genanalysis.ru'} className="gen"/></a>
                    </div>
                </div>
                <div className="reactor">
                    <h1 className="reactor_text">Reactor IT. © Все права защищены</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer