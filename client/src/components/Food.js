import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Connect comes with Provider
import { connect } from 'react-redux';
import _ from 'lodash';
import { findFood } from '../actions/postActions'

class Restaurants extends Component {

    componentWillMount() {
        // calls the action
        // this.props.findFood();
    }

    componentWillReceiveProps(nextProps) {
        // When it recieves a new property from the state this will run
        // this.props.findFood();
        if (nextProps.restaurants) {
            this.props.restaurants.unshift(nextProps.restaurants);
        }
    }

    render() {
        console.log(this.props.restaurants);
        const foodItems = this.props.restaurants.map(restaurant => (
            <div key={restaurant.restaurant.id} className="card">
                <div className="restaurantTop">
                    <div className="restaurantImage">
                        <span><img src={_.get(restaurant, ['restaurant', 'featured_image'], 'No image.')} alt=' ' height='100px' width='162px'></img></span>
                    </div>
                    {/* <span><img src={restaurant.restaurant.photos_url} alt=' ' height='100px' width='162px'></img></span> */}
                    <div className="restaurantRating">
                        <p>{restaurant.restaurant.user_rating.aggregate_rating}</p>
                        <p>{restaurant.restaurant.user_rating.votes} votes</p>
                    </div>
                </div>
                <div className="restaurantInfo">
                    <h3>{restaurant.restaurant.name}</h3>
                    <h4>{restaurant.restaurant.location.locality}</h4>
                    <p>{_.get(restaurant, ['restaurant', 'location', 'address'], 'No address.')}</p>
                    <hr />
                    <p>CUISINES: {restaurant.restaurant.cuisines}</p>
                    <p>COST FOR TWO: ${restaurant.restaurant.average_cost_for_two}</p>
                    <hr />
                    <a href={restaurant.restaurant.menu_url} className="button">VIEW MENU</a>
                </div>
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