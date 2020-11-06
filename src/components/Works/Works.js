import React from 'react';
import './Works.css'


class Works extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="work" id="work">
                <h3 className="work__title">WORK</h3>
                <div className="work__container">
                    <a className="work__example work1" href=""/>
                    <a className="work__example work2" href=""/>
                    <a className="work__example work3" href=""/>
                    <a className="work__example work4" href=""/>
                </div>
            </section>
        )
    }
}

export default Works;
