import React from 'react';
import "./PopupWork.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


class PopupWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };


        console.log(this.props)

    }

    handlerClick = () => {
        this.setState({isOpen: false});
        this.props.open(false);

    };


    render() {
        const style = {
            popupImg: {
                backgroundImage: `url(${this.props.href.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'

            },
            popupLink: {
                backgroundColor: '#f6f6f6',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }

        };
        if (!this.state.isOpen) {
            return ""
        }
        return (


            <AwesomeSlider>
                <div className="popup__content" style={style.popupImg}/>
                <div className="" style={style.popupLink}>
                    <a href={this.props.href.link} target="_blank">Ссылка на работу</a>
                    <p>Описание работы</p>
                </div>
            </AwesomeSlider>

        )
    }
}


export default PopupWork;
