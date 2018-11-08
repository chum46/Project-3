import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Connect comes with Provider
import { connect } from 'react-redux';
import _ from 'lodash';
import { findEvents } from '../actions/postActions'

class Events extends Component {

    componentWillMount() {
        // calls the action
        this.props.findEvents();
    }

    componentWillReceiveProps(nextProps) {
        // When it recieves a new property from the state this will run
        // this.props.findEvents();
        if (nextProps.events) {
            this.props.events.unshift(nextProps.events);
        }
    }

    render() {
        console.log(this.props.events);
        const eventItems = this.props.events.map(event => (
            <div key={event.id}>
                <span><img src={_.get(event, ['images', 0, 'url'], 'No image.')} alt=' ' height='100px' width='162px'></img><h3>{event.name}</h3></span>
                <h3>{event.name}</h3>
                <p>{event.url}</p>
                <p>{_.get(event, ['promoter', 'description'], 'No description.')}</p>
                <hr />
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