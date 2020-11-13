import React, {Fragment} from 'react';
import './Popup.css';
import imgClose from '../../image/close-popup.svg';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            setQuite: '',
        }
    }

    handlerClick = () => {
        this.setState({isOpen: !this.state.isOpen});
        this.props.open(false);
    };





    getQuite = () => {
        return fetch('https://api.kanye.rest', {
            method: "GET",
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

            })
            .then((res) => {
                this.setState({setQuite: res.quote})
            })
    };


    componentDidMount() {
        if(this.state.isOpen){
           this.getQuite();
        }
    }

    render() {
        if(!this.state.isOpen){
            return null
        }
        return (
            <div className="popup popup_is-opened">
                <div className="popup__content popup__content_margin">
                    <img src={imgClose} alt="кнопка закрытия"
                         className="popup__close" onClick={this.handlerClick}/>
                    <h1 className="popup__title">Kanye West quote:</h1>
                    <p>{ this.state.setQuite}</p>
                    <button className="button popup__button popup__button_valid" name="button" onClick={this.getQuite}>Another
                </button>
                </div>
            </div>
        )
    }
}

export default Popup;
