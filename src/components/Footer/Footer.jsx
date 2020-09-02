import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import M from "materialize-css";
import './Footer.css';

class Footer extends Component {

    // componentDidMount() {
    //     let elements = document.querySelectorAll(".sidenav");
    //     M.Sidenav.init(elements);
    // }

    render() {
        return (
            <footer className="page-footer dark-text">
                <div  id="contact" className="container">
                <div className="row">
            <h4 className="text-center">Contact</h4>
            <div className="divider"></div>
            <div className="section">
                <div className="row">
                    <div className="col s12 m8">
                        <div className="card horizontal light-BG2">
                            <div className="card-image" style={{height: "100%"}}>
                                <img src="https://lorempixel.com/200/430/nature/6"/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h5>JANE FLEMING|MPM</h5>
                                    <h6>Grief Support Counselor|Providence Hospice of Seattle<br/>
                                    2811 South 102nd Street|Suite 220<br/>
                                    Tukwila WA 98168<br/>
                                    jane.fleming@providence.org<br/>
                                    T: 206.749.7704<br/>
                                    C: 206.310.2463<br/>
                                    www.providence.org/hospiceofseattle</h6><br/>
                                    <h6>I am in the office Monday through Thursday and every other Friday, 8:00-4:30</h6>
                                    <h6>Transforming the care of all people facing serious illness, death and grief</h6>
                                </div>
                            </div>
                        </div>
                        {/* <card>
                            <h5>JANE FLEMING|MPM</h5>
                            <h6>Grief Support Counselor|Providence Hospice of Seattle<br/>
                            2811 South 102nd Street|Suite 220<br/>
                            Tukwila WA 98168<br/>
                            jane.fleming@providence.org<br/>
                            T: 206.749.7704<br/>
                            C: 206.310.2463<br/>
                            www.providence.org/hospiceofseattle<br/><br/>
                            I am in the office Monday through Thursday and every other Friday, 8:00-4:30<br/>
                            Transforming the care of all people facing serious illness, death and grief</h6>
                        </card> */}
                        {/* <ul className="collection with-header light-BG2">
                            <li className="collection-header">
                                <h5>Jane Fleming</h5>
                                <h6>Certification</h6>
                            </li>
                            <li className="collection-item sans-text">Phone</li>
                            <li className="collection-item sans-text">Email</li>
                            <li className="collection-item sans-text">etc.</li>
                        </ul> */}
                    </div>

                    <div className="col s12 m4">
                        <div className="section-wrapper">
                            <p>Purus in mollis nunc sed id.  Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                            <p>Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
                </div>
                <div className="footer-text footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                        <a className="footer-text right" href="#!">More Links</a>
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