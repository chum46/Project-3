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
        // https://lodash.com/docs/#get this is how we can pull from the props.events object
        const eventItems = this.props.events.map(event => (
            <div key={event.id} className="card">
                <span><img src={_.get(event, ['images', 0, 'url'], 'No image.')} alt=' ' height='100px' width='162px'></img></span>
                <h3>{event.name}</h3>
                <p>{event._embedded.venues[0].name} - {event._embedded.venues[0].city.name}, {event._embedded.venues[0].state.name}</p>
                <p>{event.dates.start.localDate}</p>
                <p>{event.dates.start.localTime}</p>
                <hr />
                <p>{_.get(event, ['classifications', 0, 'genre', 'name'], 'No genre.')} / {_.get(event, ['classifications', 0, 'subGenre', 'name'], 'No subGenre.')}</p>
                <hr />
                <a href={event.url} className="button">SEE TICKETS</a>
                
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