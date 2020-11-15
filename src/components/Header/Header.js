import React from 'react';
import './Header.css'
import pig from '../../image/pig.svg'
import Popup from "../Popup/Popup";
import {Link} from "react-scroll";
import PopupKaney from "../PopupKaney/PopupKaney";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };

    }

    handleClick = () => {
        this.setState({isActive: !this.state.isActive});
    };

    togglePopup = (isArg) => {
        this.setState({isActive: isArg});
    };


    render() {
        return (
            <div className="header_background">
                <div className="header" id="home">
                    <div className="logo logo_margin">
                        <img src={pig} className="logo__img"/>
                    </div>

                    <ul className="header__links">
                        <li><Link
                            to='home'
                            spy={true}
                            smooth={true}
                            duration={500}
                            href="#"
                            className="header__link header__link_active"
                        >HOME
                        </Link>
                        </li>
                        <li>
                            <Link
                                to='about'
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#about"
                                className="header__link "
                            >ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='work'
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#about"
                                className="header__link "
                            >
                                WORK
                            </Link>
                        </li>
                        <input className="button header_button" type='button' onClick={this.handleClick}
                               value="GET QUOTE"/>

                    </ul>
                    {this.state.isActive && <Popup open={this.togglePopup} content={
                        <PopupKaney/>} style = {'popup__content popup__content_margin'}/>}
                </div>
            </div>
        );

    }

}

export default Header
