import React from 'react';
import './Banner.css'
import scrollimg from "../../image/arrow.png";
import Scroll from "../Scroll/Scroll";



class Banner extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <section className="banner">
                <div className= "banner__content">
                <h1 className="banner__title">A multi-talented web full-stack developer</h1>

                <Scroll img = {scrollimg} class = {'scroll banner_scroll'} href = {'about'}/>
                </div>
            </section>

        )
    }
}

export default Banner;
