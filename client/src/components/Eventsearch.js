import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findEvents } from '../actions/postActions';

class Eventsearch extends Component {

    state = {
        category: "Ticketed Event",
        type: '',
        minprice: '',
        maxprice: '',
        startdate: 'mm/dd/yyyy',
        enddate: 'mm/dd/yyyy'
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const eventParams = {
            category: this.state.category,
            type: this.state.type,
            minprice: this.state.minprice,
            maxprice: this.state.maxprice,
            startdate: this.state.startdate,
            enddate: this.state.enddate
        };

        console.log(eventParams);
        this.props.findEvents(eventParams.startdate, eventParams.enddate, eventParams.type, eventParams.minprice, eventParams.maxprice);
    }

    render() {
        return (
            <div>
                <h1>Search Events</h1>
                <form onSubmit={this.onSubmit} class="event-form">
                    <div>
                        <label>Search Category: </label><br />
                        <select type="text" name="category" onChange={this.onChange} value={this.state.type}>
                            <option value="event">Ticketed Event</option>
                        </select>
                    </div>
                    <div>
                        <label>Event Type: </label><br />
                        <select type="text" name="type" onChange={this.onChange} value={this.state.type}>
                            <option value="default">Select</option>
                            <option value="music">Music</option>
                            <option value="sports">Sports</option>
                            <option value="arts">Arts/Theatre</option>
                        </select>
                    </div>
                    <div>
                        <label>Start Date: </label><br />
                        <input type="date" name="startdate" onChange={this.onChange} value={this.state.startdate} />
                    </div>
                    <div>
                        <label>End Date: </label><br />
                        <input type="date" name="enddate" onChange={this.onChange} value={this.state.enddate} />

                        <label><br />Minimum Price: </label><br />
                        <input type="number" name="minprice" onChange={this.onChange} value={this.state.minprice} />

                        <label><br />Maximum Price: </label><br />
                        <input type="number" name="maxprice" onChange={this.onChange} value={this.state.maxprice} />
                    </div>

                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Eventsearch.propTypes = {
    findEvents: PropTypes.func.isRequired
}

export default connect(null, { findEvents })(Eventsearch);