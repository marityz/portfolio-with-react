import React from 'react';
import './Footer.css';
import Social from "../Social/Social";
import scroll from "../../image/drop.png";
import Scroll from "../Scroll/Scroll";



class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className='footer__container'>
                <Scroll img = {scroll}  class ={"scroll footer__top"} href = {'home'}/>
                <Social/>
                <p className="footer__copyright">&copy; 2020. Avinkina M.V.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;
