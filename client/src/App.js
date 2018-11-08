import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Bring in the provider
import { Provider } from 'react-redux';
// import Posts from './components/Posts';
// import Postform from './components/Postform';
// import Events from './components/Events';
// import Eventsearch from './components/Eventsearch';
// import Events from "./pages/Events";
// import NavTabs from "./components/NavTabs";
import Navbar from "./components/NavBar/NavBar";
import Homepage from "./pages/home/Home";
import Memopage from "./pages/memo/Memopage";
import Eventpage from "./pages/event/Eventpage";
import Foodpage from "./pages/food/Foodpage";
import Activitypage from "./pages/activity/Activitypage";
// import NoMatch from "./pages/NoMatch";

import store from './store';
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <p>
                Up To You
              </p>
            </header>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/memos" component={Memopage} />
              <Route exact path="/eventsearch" component={Eventpage} />
              <Route exact path="/food" component={Foodpage} />
              <Route exact path="/activities" component={Activitypage} />
            </Switch>
          </div>
          
        </Router>
      </Provider>
    );
  }
}

export default App;
