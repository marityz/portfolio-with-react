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



    }

    handlerClick = () => {
        this.setState({isOpen: false});
        this.props.open(false);

    };


    render() {
        const style = {
            popupImg: {
                backgroundImage: `url(${this.props.href.img})`,
                backgroundSize: 'contain',
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


            <AwesomeSlider fillParent = "true" mobileTouch = "true">
                <div className="popup__content" style={style.popupImg}/>
                <div className="work-slide" style={style.popupLink}>
                    <h3 className='work__title'>{this.props.href.title}</h3>
                    <p className='work__text'>{this.props.href.text}</p>
                    <div className='work-container__link'>
                    <a href={this.props.href.linkGit} target="_blank" className='work__link fa fa-2x fa-github' aria-hidden="true"> </a>
                        {this.props.href.linkSite ?
                            <a href={this.props.href.linkSite} target="_blank" className='work__link'>{this.props.href.linktext}</a>:
                            ''
                        }

                    </div>
                </div>
            </AwesomeSlider>

        )
    }
}


export default PopupWork;
