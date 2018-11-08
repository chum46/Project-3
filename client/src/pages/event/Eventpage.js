import React, { Component } from 'react'
// import Posts from '../../components/Posts';
import Eventsearch from '../../components/Eventsearch';
import Events from '../../components/Events';

class Eventpage extends Component {
    render() {
        return (
            <div>
              <Eventsearch />
              <hr />
              <Events />
            </div>
        );
      }
    }

export default Eventpage;