import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findEvents } from "../actions/postActions";

class Eventsearch extends Component {

    state = {
        price: '',
        type: '',
        date: 'mm/dd/yyyy'
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const eventParams = {
            price: this.state.price,
            type: this.state.type,
            date: this.state.date
        };

        this.props.findEvents(eventParams);
    }

    render() {
        return (
            <div>
                <h1>Search Events</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Date: </label><br />
                        <input type="date" name="date" onChange={this.onChange} value={this.state.date} />

                        <label><br />Price: </label><br />
                        <select type="text" name="price" onChange={this.onChange} value={this.state.price}>
                            <option value="low">$</option>
                            <option value="medium">$$</option>
                            <option value="high">$$$</option>
                        </select>
                    </div>
                    <div>
                        <label>Event Type: </label><br />
                        <select type="text" name="type" onChange={this.onChange} value={this.state.type}>
                            <option value="music">Music</option>
                            <option value="sports">Sports</option>
                            <option value="arts">Arts/Theatre</option>
                        </select>
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