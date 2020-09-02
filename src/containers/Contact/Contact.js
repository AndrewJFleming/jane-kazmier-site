import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import './Contact.css';
import Slider from '../../components/Slider/Slider';

const Contact = (props) => {
  return (
    
      <div id="contact" class="container light-BG">
        <div class="row">
            <h4 className="text-center">Contact</h4>
            <div className="divider"></div>
            <div className="section">
                <div className="row">
                    <div className="col s12 m8">
                        <div className="card horizontal light-BG2">
                            <div className="card-image">
                                <img src="https://lorempixel.com/200/330/nature/6"/>
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
  );
}


export default Contact;
