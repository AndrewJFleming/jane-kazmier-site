import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import M from "materialize-css";
import './Navbar.css';

class Navbar extends Component {

    componentDidMount() {
        let elements = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elements);
    }

    render() {
        return (
            <React.Fragment>
                <nav>
                    <div className="nav-wrapper">
                        {/* <Link smooth to="#section1"> */}
                        <img className=".brand-logo.left link-color logo" src="https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/bird-icon-simplify-trans-border.png" style={{maxWidth: "70px"}}/>
                            {/* <a className="brand-logo link-color">Jane Kazmier</a> */}
                        {/* </Link> */}
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons link-color">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                                {/* <li>
                                    <Link smooth to="#welcome">
                                        <a className="link-color">Welcome</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link smooth to="#about">
                                        <a className="link-color">About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="#labyrinth">
                                        <a className="link-color">Labyrinth</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="#contact">
                                        <a className="link-color">Contact</a>
                                    </Link>
                                </li>
                        </ul>
                    </div>
                </nav>
        
                <ul className="sidenav" id="mobile-demo" style={{backgroundColor: "#97DDE1"}}>
                    <Link smooth to="#welcome">
                        <li><a>Welcome</a></li>
                    </Link>
                    <Link smooth to="#about">
                        <li><a>About</a></li>
                    </Link>
                    <Link smooth to="#labyrinth">
                        <li><a>Labyrinth</a></li>
                    </Link>
                    <Link smooth to="#contact">
                        <li><a>Contact</a></li>
                    </Link>
                </ul>
            </React.Fragment>
        )
    }
}

export default Navbar;