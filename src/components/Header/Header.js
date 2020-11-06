import React from 'react';
import './Header.css'
import pig from '../../image/pig.svg'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "header">
                <div className="logo logo_margin">
                    <img src={pig} className="logo__img"/>
                </div>

                <ul className="header__links">
                    <li><a href="" className="header__link header__link_active " id="home">HOME</a></li>
                    <li><a href="" className="header__link ">ABOUT</a></li>
                    <li><a href="" className="header__link">WORK</a></li>
                    <input className="button header_button" value="REQUEST FOR QUOTE"/>
                </ul>

               </div>
        );

    }

}

export default Header
