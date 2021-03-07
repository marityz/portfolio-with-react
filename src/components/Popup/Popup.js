import React from 'react';
import './Popup.css';
import imgClose from '../../image/close-popup.svg';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isOpen: true,
            setQuite: '',
        }
    }

    handlerClick = () => {
        this.setState({isOpen: !this.state.isOpen});
        this.props.open(false);


    };

    componentDidMount = () => {
        if (this.state.isOpen) {
            document.addEventListener('click', this.handleClickOutside, true);
            document.addEventListener('keydown', this.handlerKayEsc, true);

        }
    };


    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleClickOutside, true);
    };


    handleClickOutside = (e) => {
        if (!this.myRef.current.contains(e.target)) {
            this.handlerClick();
        }

    };

    handlerKayEsc = (e) => {
        if (e.keyCode === 27) {
            this.handlerClick();
        }
    };


    render() {
        if (!this.state.isOpen) {
            return ""
        }
        return (
            <div className="popup popup_is-opened">
                <div ref={this.myRef} className={this.props.style}>
                    <img src={imgClose} alt="кнопка закрытия"
                         className="popup__close" onClick={this.handlerClick}/>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Popup;
