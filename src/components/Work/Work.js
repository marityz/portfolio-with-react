import React from 'react';
import './Work.css';
import PopupWork from "../PopupWork/PopupWork";
import Popup from "../Popup/Popup";

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopup: false,
        }
    }


    openSlider = () => {
        this.setState({isPopup: !this.state.isPopup});
    };

    togglePopup = (isArg) => {
        this.setState({isPopup: isArg});
    };

    render() {
        return (
            <>
                <div className={`work__example work${this.props.work.id}`}
                     style={{backgroundImage: `url(${this.props.work.img})`}} onClick={this.openSlider}/>
                {this.state.isPopup && <Popup open={this.togglePopup} content={<PopupWork href={this.props.work}
                />} style={'work__popup popup__content'}/>}
            </>
        )

    }
}

export default Work;
