import React from 'react';
import './Banner.css'
import scroll from "../../image/arrow.png";
import Scroll from "../Scroll/Scroll";


class Banner extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <section className="banner">
                <h1 className="banner__title">A multi-talented freelance web full-stack developer</h1>
                <a className="scroll banner_scroll" href="#about">
                    <img src="image/arrow.png" alt=""/>
                </a>
                <Scroll img = {scroll} class = {'scroll banner_scroll'}/>
            </section>

        )
    }
}

export default Banner;
