import React from 'react';
import './Scroll.css';


class Scroll extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <a className={this.props.class} href="">
            <img src={this.props.img} alt=""/>
        </a>
    )
    }

}

export default Scroll;
