import React from 'react';
import './About.css';
import Scroll from "../Scroll/Scroll";
import scroll from "../../image/down.png";


class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="about" id="about">
                <div className="about__container">
                    <h2 className="about__title">ABOUT</h2>
                    {console.log(this.props.text)}
                    <div className="about__content">
                    <p className="about__text">{this.props.text.text.abz0}</p>
                    <p className="about__text">{this.props.text.text.abz1}</p>
                    <p className="about__text">{this.props.text.text.abz2}</p>
                    </div>
                    <Scroll img={scroll} class={'scroll about_scroll'} href={'work'}/>
                </div>
            </section>
        )
    }

}

export default About;
