import React from 'react';
import './Works.css'
import Work from "../Work/Work";



class Works extends React.Component{
    constructor(props) {
        super(props);
    }

   componentDidMount() {

    }


    render() {
        return(
            <section className="work" id="work">
                <h3 className="works__title">WORK</h3>
                <div className="work__container">
                    {this.props.works.map((work)=>{
                        return  <Work work = {work} key = {work.id}/>
                    })}
                </div>

            </section>
        )
    }
}

export default Works;
