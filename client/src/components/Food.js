import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Connect comes with Provider
import { connect } from 'react-redux';
import { findFood } from '../actions/postActions'

class Restaurants extends Component {
    
    componentWillMount() {
        // calls the action
        this.props.findFood();
    }  

    componentWillReceiveProps(nextProps) {
        // When it recieves a new property from the state this will run
        // this.props.findFood();
        if(nextProps.restaurants) {
            this.props.restaurants.unshift(nextProps.restaurants);
        }
    }

    render() {
        console.log(this.props.restaurants);
        const foodItems = this.props.restaurants.map(restaurant => (
            <div key={restaurant.restaurant.id}>
                <h3>{restaurant.restaurant.name}</h3>
                <p>{restaurant.restaurant.url}</p>
            </div>
        ));
        return (
            <div>
                <h1>Restaurant Options</h1>
                {foodItems}
            </div>
        )
    }
}

Restaurants.propTypes = {
    findFood: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
}

// Have to get the new items from the state
const mapStateToProps = state => ({
    restaurants: state.restaurants.items
});

export default connect(mapStateToProps, { findFood })(Restaurants);