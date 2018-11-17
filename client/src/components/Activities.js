import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Connect comes with Provider
import { connect } from 'react-redux';
import { fetchActivities } from '../actions/postActions'

class Activities extends Component {
    
    componentWillMount() {
        // calls the action
        this.props.fetchActivities();
    }  

    render() {
        console.log('activities on front end', this.props)
        const activityItems =  this.props.activities && this.props.activities.map(activity => (
            <div key={activity._id} className="post-card">
                <h3>{activity.event}</h3>
                <p>{activity.description}</p>
                <p className="read-more">
                    <a href="{activity.website}" target="_blank">More Information</a>
                </p>
            </div>
        ));


        return (
            <div>
                <h1>Free Activity Ideas</h1>
                {activityItems}
            </div>
        )
    }
}

Activities.propTypes = {
    fetchActivities: PropTypes.func.isRequired,
    activities: PropTypes.array.isRequired
}

// Have to get the new items from the state
const mapStateToProps = state => ({
    activities: state.activities.items
});

export default connect(mapStateToProps, { fetchActivities })(Activities);