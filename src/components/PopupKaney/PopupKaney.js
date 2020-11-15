import React from 'react';
import './PopupKaney.css';


class PopupKaney extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            setQuite: '',
        }
    }


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

    componentDidMount = () => {
        if (this.state.isOpen) {
            this.getQuite();
        }
    };


    render() {
        return (
            <>
                <h1 className="popup__title">Kanye West quote:</h1>
                <p>{this.state.setQuite}</p>
                <button className="button popup__button popup__button_valid" name="button"
                        onClick={this.getQuite}>Another
                </button>
            </>
        )
    }


}

export default PopupKaney;
