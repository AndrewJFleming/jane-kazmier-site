import React, { Component } from 'react';
import M from "materialize-css";

class Slider extends Component {
    
    componentDidMount() {
        let elements = document.querySelectorAll(".slider");
        M.Slider.init(elements);
    }

    render() {
        return (
                <div className="slider">
                    <ul className="slides">
                        <li>
                            <img src="assets/marrowstone-lab.jpeg" alt="slide 1"/>
                            <div className="caption center-align">
                                <h3 className="light grey-text text-lighten-3">Title 1</h3>
                                <h5 className="light grey-text text-lighten-3">
                                Slogan 1 
                                </h5>
                            </div>
                        </li>
                        <li>
                            <img src="assets/construction.jpg" alt="slide 2"/>
                            <div className="caption center-align">
                                <h3 className="light grey-text text-lighten-3">Title 2</h3>
                                <h5 className="light grey-text text-lighten-3">
                                Slogan 2 
                                </h5>
                            </div>
                        </li>
                        <li>
                            <img src="assets/finished-lab.jpg" alt="slide 3"/>
                            <div className="caption center-align">
                                <h3 className="light grey-text text-lighten-3">Title 3</h3>
                                <h5 className="light grey-text text-lighten-3">
                                Slogan 3 
                                </h5>
                            </div>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default Slider;