import React, { Component } from 'react'

class Posts extends Component {
    // Lifecycle Method
    constructor (props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    componentWillMount() {
        // This is where we want to make our fetch request
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
    }

    render() {
        const postItems = this.state.posts.map(post => (
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

export default Posts;