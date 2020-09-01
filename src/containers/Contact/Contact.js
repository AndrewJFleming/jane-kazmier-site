import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import './Contact.css';
import Slider from '../../components/Slider/Slider';

const Contact = (props) => {
  return (
    
      <div id="contact" class="container light-BG">
        <div class="row">
            <h4>Contact</h4>
            <div className="divider"></div>
            <div className="section">
                <div className="row">
                    <div className="col s12 m6">
                        <ul className="collection with-header">
                            <li className="collection-header">
                                <h5>Jane Fleming</h5>
                                <h6>Certification</h6>
                            </li>
                            <li className="collection-item sans-text">Phone</li>
                            <li className="collection-item sans-text">Email</li>
                            <li className="collection-item sans-text">etc.</li>
                        </ul>
                    </div>

                    <div className="col s12 m6">
                        <div className="section-wrapper">
                            <p>Purus in mollis nunc sed id.  Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                            <p>Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}


export default Contact;
