import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Bring in the provider
import { Provider } from 'react-redux';
import Navbar from "./components/NavBar/NavBar";
import Homepage from "./pages/home/Home";
import Memopage from "./pages/memo/Memopage";
import Eventpage from "./pages/event/Eventpage";
import Foodpage from "./pages/food/Foodpage";
import Activitypage from "./pages/activity/Activitypage";
import store from './store';
import NoMatch from './pages/nomatch/NoMatch';
import logo from './images/up2logo.png' // relative path to image 
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
            <img src={logo} alt={"logo"}/> 
            </header>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/memos" component={Memopage} />
              <Route exact path="/events" component={Eventpage} />
              <Route exact path="/food" component={Foodpage} />
              <Route exact path="/activities" component={Activitypage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          
        </Router>
      </Provider>
    );
  }
}

export default App;
