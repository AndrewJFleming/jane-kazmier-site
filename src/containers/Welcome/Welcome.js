import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import './Welcome.css';

const Welcome = (props) => {
  return (
    <React.Fragment>
      <div id="welcome" className="container my-2em">
          <div className="section-wrapper">
            <Parallax/>
          </div>
          <div className="section-wrapper light-BG">
            <h3>Spiritual Companioning/Direction</h3>
            <p>Being. Belonging. Relationship. Transformation. Consciousness. Knowing. Love.</p>
            <p>As human beings we are continually growing and changing, giving and receiving, acquiring and letting go. The longer we live, the richer the compost of our lives. We experience times of abundance or emptiness, or find ourselves somewhere on the continuum. We are relational beings and we each have a story to be known. Through the art of listening, the spiritual companion can be a witness to the story.</p>          
          </div>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
