import { FETCH_POSTS, NEW_POST } from './types';

// The thunk middleware allows us to call the dispatch function directly
// so that we can make a synchronous request
export const fetchPosts = () => dispatch => {
    // console.log('fetching');
    // Think of dispatch as a resolver or a promise
    // Whenever we want to send the data we call it dispatch
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // .then(data => this.setState({posts: data}));
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                // Whatever data is coming in with the type we can call 
                // payload or whatever we want
                payload: posts
            })
        );

};

export const createPost = (postData) => dispatch => {
    console.log('action called');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        // Tell it we want json data
        .then(res => res.json())
        // Make sure we can make a post and get the data back
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
};