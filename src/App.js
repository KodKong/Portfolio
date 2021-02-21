import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import AboutMe from "../src/Components/AboutMe/AboutMe";
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';




function App() {
  return (
    <div >
      <Route exact path="/Home" render={() => <Home/>} /> 
      <Route exact path="/Portfolio" render={() => <Portfolio />} /> 
      <Route exact path="/About" render={() => <AboutMe />} /> 
      <Redirect from="/" to="/Home" />
    </div>
  );
}

export default App;
