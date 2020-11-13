import React  from 'react';
import "./PopupWork.css"
import imgClose from "../../image/close-popup.svg";



class PopupWork extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        }


    }

    handlerClick = () => {
        this.setState({isOpen: false});
        this.props.open(false);
    };



    render() {
        if(!this.state.isOpen){
            return ""
        }
        return(
            <div className="popup popup_is-opened">
                <div className="popup__content popup_work" style={{backgroundImage: `url(${this.props.href.img})`}} >
                    <img src={imgClose} alt="кнопка закрытия"
                         className="popup__close" onClick={this.handlerClick}/>
                </div>
            </div>
        )
    }
}


export default PopupWork;
