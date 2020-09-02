import React, { Component } from 'react';
import './index.css';
import 'materialize-css/dist/css/materialize.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './containers/Welcome/Welcome';
import Quote from './containers/Quote/Quote';
import Labyrinth from './containers/Labyrinth/Labyrinth';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
    state = {
    }

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Welcome/>
          <Quote/>
          <About/>
          <Quote/>
          <Labyrinth/>
          {/* <Contact/> */}
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
