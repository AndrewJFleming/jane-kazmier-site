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
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus eget nunc. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Curabitur gravida arcu ac tortor. Facilisis sed odio morbi quis. Viverra ipsum nunc aliquet bibendum. Nec ultrices dui sapien eget mi. Metus vulputate eu scelerisque felis imperdiet. Orci phasellus egestas tellus rutrum tellus pellentesque. Porttitor lacus luctus accumsan tortor posuere ac. Quam id leo in vitae turpis massa sed. Morbi tristique senectus et netus et malesuada fames.</p>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
