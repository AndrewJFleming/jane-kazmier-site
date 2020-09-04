import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import M from "materialize-css";
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer dark-text">
                <div  id="contact" className="container">
                <div className="row">
            <h4 className="text-center">Contact</h4>
            <div className="divider"></div>
            <div className="section">
                <div className="row">
                    <div className="col s12 m8 l7 xl5">
                        <div className="card horizontal contact-card">
                            <div className="card-image bird">
                                <img src="https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/bird-watercolor-red-contrast-small.jpg"/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h5>Jane Fleming</h5>
                                    <h6>Spiritual Companion/Director</h6>
                                    <h6><a className="link-color" href="mailto:janefleming@seanet.com">janefleming@seanet.com</a><br/>
                                    <a className="link-color" href="tel:206.930.0460">206.930.0460</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4 l5 xl7">
                        <div className="section-wrapper">
                            <ul className="bulleted-list">
                                <li>
                                    <p>I am available for individual spiritual direction and would love to talk with you about this possibility.</p>
                                </li>
                                <li>
                                    <p>I am an experienced retreat facilitator and have also facilitated small group spiritual direction.</p>
                                </li>
                                <li>
                                    <p>I am a seasoned grief and loss counselor, and I have worked extensively with parents who have experienced the death of a child.</p>
                                </li>
                                <li>
                                    <p>I lead a weekly Centering Prayer group – contact me for time and place.</p>
                                </li>
                            </ul>
                            <p><span className="italic">“I went to see Jane once a month and she was immensely helpful, mostly by giving me confidence in my own spiritual perceptions”.</span></p>
                            <p>Please call or email me.<br/>
                            I offer an initial visit with no charge to see if journeying together feels like a fit. I base my fee on a sliding scale – please contact me to discuss this.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
                </div>
                <div className="footer-text footer-copyright">
                    <div className="container">
                        <a className="footer-text" href="#!">© 2020 Jane Fleming</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;

              

            // <footer class="page-footer">
            //     <div class="container">
            //         <div class="row">
            //             <div class="col l6 s12">
            //                 <h5 class="white-text">Footer Content</h5>
            //                 <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            //             </div>
            //             <div class="col l4 offset-l2 s12">
            //                 <h5 class="white-text">Links</h5>
            //                 <ul>
            //                     <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
            //                     <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
            //                     <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
            //                     <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            //                 </ul>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="footer-copyright">
            //         <div class="container">
            //             © 2014 Copyright Text
            //             <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            //         </div>
            //     </div>
            // </footer>