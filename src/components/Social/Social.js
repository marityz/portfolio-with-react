import React from 'react';
import './Social.css';
import '../../vendor/font-awesome-4.7.0/css/font-awesome.css'

class Social extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="social">
                <li><a className="social__icon social__icon_gmail fa fa-2x fa-google" href=""/>
                </li>
                <li><a className="social__icon social__icon_skype fa fa-2x fa-skype" href=""/>
                </li>
                <li><a className="social__icon social__icon_vk fa fa-2x fa-vk" href=""/></li>
            </ul>
        )
    }
}


export default Social;
