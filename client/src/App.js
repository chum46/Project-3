import React, { Component } from 'react';
import './App.css';
// Bring in the provider
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              Up To You
          </p>
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
