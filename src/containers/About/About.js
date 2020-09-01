import React from 'react';
import './About.css';

const About = (props) => {
  return (
    
      <div id="about" class="container light-BG">
          <h4>About</h4>
          <div className="divider"></div>
            <div className="section">
              <div className="row">
                <div className="col s12 m4">
                  <div className="card">
                      <div className="card-image">
                          <img src="https://ajf-general-images.s3-us-west-2.amazonaws.com/portrait.jpg" alt="portrait"/>
                          {/* <span class="card-title">Card Title</span> */}
                      </div>
                  </div>
                </div>

                <div className="col s12 m8">
                  <div className="card">
                    <div className="card-content">
                      <span className="card-title">Jane Fleming</span>
                      <p>In iaculis nunc sed augue. Varius duis at consectetur lorem. Purus in mollis nunc sed id.  Varius duis at consectetur lorem. Purus in mollis nunc sed id.  Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                      <p>Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
  );
}

export default About;
