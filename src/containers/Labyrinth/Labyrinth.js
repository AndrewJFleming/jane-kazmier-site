import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import './Labyrinth.css';
import Slider from '../../components/Slider/Slider';

const Labyrinth = (props) => {
  return (
    
      <div id="labyrinth" className="container light-BG">
        <div className="row">
          <h4>Labyrinth</h4>
          <div className="divider"></div>
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>In iaculis nunc sed augue. Varius duis at consectetur lorem. Purus in mollis nunc sed id.  Varius duis at consectetur lorem. Purus in mollis nunc sed id.  Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                    <p>Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Varius duis at consectetur lorem. Purus in mollis nunc sed id.</p>
                  </div>
                </div>          
              </div>
              <div className="col s12 m8">
                <Slider/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}


export default Labyrinth;
