import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findFood } from '../actions/postActions';

class Foodsearch extends Component {

    state = {
        category: "Restaurant Search",
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

        const foodParams = {
            category: this.state.category,
            type: this.state.type,
            minprice: this.state.minprice,
            maxprice: this.state.maxprice,
            startdate: this.state.startdate,
            enddate: this.state.enddate
        };

        console.log(foodParams);
        this.props.findFood(foodParams.startdate, foodParams.enddate, foodParams.type, foodParams.minprice, foodParams.maxprice);
    }

    render() {
        return (
            <div>
                <h1>Search Restaurants</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Search Category: </label><br />
                        <select type="text" name="category" onChange={this.onChange} value={this.state.type}>
                            <option value="event">Restaurant Search</option>
                        </select>
                    </div>
                    <div>
                        <label>Cuisine Type: </label><br />
                        <select type="text" name="type" onChange={this.onChange} value={this.state.type}>
                            <option value="event">chinese</option>
                            <option value="event">indian</option>
                            <option value="event">thai</option>
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

Foodsearch.propTypes = {
    findFood: PropTypes.func.isRequired
}

export default connect(null, { findFood })(Foodsearch);