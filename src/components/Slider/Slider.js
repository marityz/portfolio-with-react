import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


class Slider extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <AwesomeSlider animation="cubeAnimation">
                <div data-src="/path/to/image-0.png" />
                <div data-src="/path/to/image-1.png" />
                <div data-src="/path/to/image-2.jpg" />
            </AwesomeSlider>
        )
    }

}

export default Slider
