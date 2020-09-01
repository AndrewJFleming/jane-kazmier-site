import React, { Component } from 'react';
import M from "materialize-css";
import "./Parallax.css";

class Parallax extends Component {

    componentDidMount() {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    }
    
    render(){
        return (
            <div className="parallax-container">
                <div className="parallax">
                    <img src="assets/espalier.jpg" alt="parallax_1" style={{opacity: 0.5}}/>
                    <h2 className="centered">Welcome</h2>
                </div>
            </div>
        )
    }
};

export default Parallax;