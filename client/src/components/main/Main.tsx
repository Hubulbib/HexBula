import React, { FC, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './main.css';

const Main : FC = () => {

    const [opac, setOpac] = useState('0.0')
    const [opac1, setOpac1] = useState('0.0')

    setTimeout(() => {
        setOpac('1.0')
    }, 250)

    setTimeout(() => {
        setOpac1('1.0')
    }, 750)

    return(
        <div className="Main">
            <div className="main_div">
                <div className="text_div">
                    <div className="name_app_div">
                        <h1 className="name_app" style={{opacity: opac, transition: 'all 1.5s'}}><span className="H">H</span><span className="E">e</span><span className="X">x</span><span className="B">b</span><span className="U">u</span><span className="L">l</span><span className="A">a</span></h1>
                    </div>
                    <div className="discrpit_div">
                        <p className="discript" style={{opacity: opac1, transition: 'all 1.5s'}}>converter and calculator<br/>for numeral systems</p>
                    </div>
                </div>
                <Nav/>
            </div>
            <Footer/>
        </div>
    )
}

export default Main