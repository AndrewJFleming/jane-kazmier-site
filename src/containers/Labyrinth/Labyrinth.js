import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import './Labyrinth.css';
import Slider from '../../components/Slider/Slider';

const Labyrinth = (props) => {
  return (
    
      <div id="labyrinth" className="container light-BG">
        <div className="row">
          <h4 className="text-center">Labyrinth</h4>
          <div className="divider"></div>
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                  <h5>Artist/Maker</h5>
                  <p>Two processes tend to show up for me. . .</p>
                  <h5>Labyrinth</h5>
                  <p>An ancient tool used for meditation, reflection, prayer or discernment, the labyrinth promotes the intentional process of letting go, centering and renewal. I have had the privilege of creating labyrinths, utilizing materials available on site.</p>
                  <h5>Green Weaving</h5>
                  <p>Weaving as a metaphor for relationship suggests that life isn’t really a linear process. As life invites flow, adjustment, transformation and growth, so do the living weavings I create. I often weave with deciduous plants, with the warp created by the vertical material.</p>
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