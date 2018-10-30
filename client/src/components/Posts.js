import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Connect comes with Provider
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
    // Lifecycle Method
    // Don't need the below because the post is going to come from redux
    // the application state
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }
    
    componentWillMount() {
        // calls the action
        this.props.fetchPosts();
    }  

    componentWillReceiveProps(nextProps) {
        // When it recieves a new property from the state this will run
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Date Ideas</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

// Have to get the new items from the state
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);