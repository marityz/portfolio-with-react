import React from 'react';
import './Social.css';
import '../../vendor/font-awesome-4.7.0/css/font-awesome.css'

class Social extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="social">
                <li><a className="social__icon social__icon_gmail  fa-2x fa fa-envelope-o"
                       href="mailto:marityz@gmail.com" target="_blank"/>
                </li>
                <li><a className="social__icon social__icon_skype fa fa-2x fa-skype" href="skype:marityz"
                       target="_blank"/>
                </li>
                <li><a className="social__icon social__icon_vk fa-2x fa fa-github" href="https://github.com/marityz"
                       target="_blank"/></li>
            </ul>
        )
    }
}


export default Social;
