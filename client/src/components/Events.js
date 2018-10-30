import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Connect comes with Provider
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/postActions'

class Events extends Component {
    
    componentWillMount() {
        // calls the action
        this.props.fetchEvents();
    }  

    render() {
        const eventItems = this.props.posts.map(event => (
            <div key={event.id}>
                <h3>{event.title}</h3>
                <p>{event.body}</p>
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
    fetchEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
}

// Have to get the new items from the state
const mapStateToProps = state => ({
    events: state.events.items
});

export default connect(mapStateToProps, { fetchEvents })(Events);