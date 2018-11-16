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
            <div key={restaurant.restaurant.id} className="food-card">
                <div class="meta" >
                    <div class="photo"><img src={_.get(restaurant, ['restaurant', 'featured_image'], 'No image.')} alt=' ' height='100px' width='162px'></img>
                    </div>
                    {/* <span><img src={restaurant.restaurant.photos_url} alt=' ' height='100px' width='162px'></img></span> */}
                    <ul class="details">
                        <li class="author">{restaurant.restaurant.cuisines}</li>
                    </ul>
                    {/* <div class="author" className="restaurantRating">
                        <p>{restaurant.restaurant.user_rating.aggregate_rating}</p>
                        <p>{restaurant.restaurant.user_rating.votes} votes</p>
                    </div> */}
                </div>
                <div class="description">
                    <h1>{restaurant.restaurant.name}</h1>
                    <h2>{restaurant.restaurant.location.locality}</h2>
                    <h2>{_.get(restaurant, ['restaurant', 'location', 'address'], 'No address.')}</h2>
                    <h2>COST FOR TWO: ${restaurant.restaurant.average_cost_for_two}</h2>
                    {/* <p>CUISINES: {restaurant.restaurant.cuisines}</p> */}
                    {/* <p>COST FOR TWO: ${restaurant.restaurant.average_cost_for_two}</p> */}
                    <p class="read-more">
                        <a href={restaurant.restaurant.menu_url} >View Menu</a>
                    </p>
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