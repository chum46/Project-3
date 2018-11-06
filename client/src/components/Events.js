import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Connect comes with Provider
import { connect } from 'react-redux';
import { findEvents } from '../actions/postActions'

class Events extends Component {
    
    componentWillMount() {
        // calls the action
        this.props.findEvents();
    }  

    componentWillReceiveProps(nextProps) {
        // When it recieves a new property from the state this will run
        // this.props.findEvents();
        if(nextProps.events) {
            this.props.events.unshift(nextProps.events);
        }
    }

    render() {
        console.log(this.props.events);
        const eventItems = this.props.events.map(event => (
            <div key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.url}</p>
            </div>
        ));
        return (
            <div>
                <h1>Event Options</h1>
                {eventItems}
            </div>
        )
    }
}

Events.propTypes = {
    findEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
}

// Have to get the new items from the state
const mapStateToProps = state => ({
    events: state.events.items
});

export default connect(mapStateToProps, { findEvents })(Events);