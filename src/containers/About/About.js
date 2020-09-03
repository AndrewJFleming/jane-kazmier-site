import React from 'react';
import './About.css';

const About = (props) => {
  return (
    
      <div id="about" class="container light-BG">
          <h4 className="text-center">About</h4>
          <div className="divider"></div>
            <div className="section">
              <div className="row">
                <div className="col s12 m3">
                  <img className="portait" src="https://ajf-general-images.s3-us-west-2.amazonaws.com/portrait.jpg" alt="portrait"/>
                  <p className="flow-text serif-text"><span className="italic">Make everything in you an ear, each atom of your being, and you will hear at every moment what the Source is whispering to you.</span><br/><span style={{fontSize: "95%"}}>- Rumi</span></p>
                </div>
                <div className="col s12 m7 offset-m1">
                  <h5 className="">Jane Fleming</h5>
                  <p>Spiritual companioning (or spiritual direction), is the art of listening to and honoring the authentic  (true) self of another, with an “ear” to the movement or relationship of the Divine, the Source, God, Love or Mystery within that person—that which nourishes a person’s being. This relationship may sometimes feel empty or lacking - and that, too, is what one can bring to the spiritual companioning session - whatever is stirring (or not) in the person around their spiritual life. As a spiritual companion I do not give advice, but rather listen along for the voice/presence of the Divine in the conversation, often asking questions intended to support this listening process.</p>
                  <p>Spiritual companioning is not therapy, though the practice of discerning one’s relationship with the Divine, and having this witnessed, is therapeutic. The relationship that emerges comes from the place of deep, inner questions and yearnings, not out of a problem that needs to be fixed. </p>
                  <p>My personal spiritual perspective is open and accepting of all faith traditions, as well as journeying with those who do not identify with a practice or particular religion. I am a contemplative, embracing the mystical union entwining my life with the Divine. I express this relationship through silence/listening, the creative process, prayer and meditation, and a belief in the interconnectivity of all beings. I lean toward the Franciscan tradition.</p>
                  <p>My teachers include the contemplative mystics, the Impressionists, the Enneagram, the Bauhaus School, color theorists, minimalism, designers, explorers and other risk takers.</p>
                  <p>I am grateful to have 26 years of experience as a grief and loss counselor (MPM, Seattle University) and am certified in spiritual direction through the St Placid Benedictine Monastery in Lacey WA. I hold a Bachelor of Fine Arts degree in illustration and design.</p>
                  <p>With gratitude,<br/>Jane Fleming</p>
                </div>
              </div>
            </div>
      </div>
  );
}

export default About;


