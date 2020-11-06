import React from 'react';
import './About.css';
import Scroll from "../Scroll/Scroll";
import scroll from "../../image/down.png";



class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="about" id="about">
            <div className="about__container">
                <h2 className="about__title">ABOUT</h2>
                <p className="about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                    has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled.</p>
                <p className="about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                    has been the industry's
                    standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived
                    not
                    only five centuries</p>
                <p className="about__text">It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem
                    Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.</p>
                <Scroll img = {scroll} class={'scroll about_scroll'}/>
            </div>
            </section>
        )
    }

}

export default About;
