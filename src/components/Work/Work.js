import React from 'react';
import './Work.css';
import PopupWork from "../PopupWork/PopupWork";

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopup: false,
        }
    }


    openSlider = () => {
        this.setState({isPopup: !this.state.isPopup});
        console.log(this.state.isPopup)
    };

    togglePopup = (isArg) => {
        this.setState({isPopup: isArg});
    };

    render() {
        return (
            <>
                <div className={`work__example work${this.props.work.id}`}
                     style={{backgroundImage: `url(${this.props.work.img})`}} onClick={this.openSlider}/>
                  {this.state.isPopup && <PopupWork href = {this.props.work} open = {this.togglePopup} />}
            </>
        )

    }
}

export default Work;
