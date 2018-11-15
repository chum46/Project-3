import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findFood } from '../actions/postActions';

class Foodsearch extends Component {

    state = {
        category: "Restaurant Search",
        type: '0',
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
                <form onSubmit={this.onSubmit} className="food-form">
                    <div className="food-form-card">
                        <label>Cuisine Type: </label><br />
                        <select type="text" name="type" onChange={this.onChange} value={this.state.type}>
                            <option value="0">select</option>
                            <option value="25">chinese</option>
                            <option value="148">indian</option>
                            <option value="95">thai</option>
                        </select><br />
                        <label>Minimum Price: </label><br />
                            <input type="number" className="restaurantsInput" name="minprice" onChange={this.onChange} value={this.state.minprice} /><br />
                        <label>Maximum Price: </label><br />
                            <input type="number" className="restaurantsInput" name="maxprice" onChange={this.onChange} value={this.state.maxprice} />
                        <br />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

Foodsearch.propTypes = {
    findFood: PropTypes.func.isRequired
}

export default connect(null, { findFood })(Foodsearch);