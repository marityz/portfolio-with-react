import React, {Fragment} from 'react';
import './Header.css'
import pig from '../../image/pig.svg'
import Popup from "../Popup/Popup";

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
            <div className="header">
                <div className="logo logo_margin">
                    <img src={pig} className="logo__img"/>
                </div>

                <ul className="header__links">
                    <li><a href="" className="header__link header__link_active " id="home">HOME</a></li>
                    <li><a href="" className="header__link ">ABOUT</a></li>
                    <li><a href="" className="header__link">WORK</a></li>
                    <input className="button header_button" type='button' onClick={this.handleClick}
                           value="GET A QUITE"/>

                </ul>
                    {this.state.isActive && <Popup open = {this.togglePopup}/>}
            </div>
        );

    }

}

export default Header
