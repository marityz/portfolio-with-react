import React from 'react';
import './Scroll.css';
import {Link} from "react-scroll";

class Scroll extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Link
                className = {this.props.class}
                to={this.props.href}
                spy={true}
                smooth={true}
                duration={500}
                href={this.props.href}
            >
                <img src={this.props.img} alt=""/>
            </Link>
        )
    }

}

export default Scroll;
