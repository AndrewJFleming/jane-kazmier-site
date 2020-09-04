import React, { Component } from 'react';
import './index.css';
import 'materialize-css/dist/css/materialize.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './containers/Welcome/Welcome';
import Quote from './containers/Quote/Quote';
import Portfolio from './containers/Portfolio/Portfolio';
import About from './containers/About/About';
import Footer from './components/Footer/Footer';

class App extends Component {
    state = {
      quote1: "You are an artist of people’s souls",
      quote2: "We are all on the journey"
    }

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Welcome/>
          <Quote quote={this.state.quote1}/>
          <About/>
          <Quote quote={this.state.quote2}/>
          <Portfolio/>
          {/* <Contact/> */}
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
