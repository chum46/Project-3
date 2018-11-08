import { FETCH_POSTS, NEW_POST, FETCH_EVENTS, FETCH_ACTIVITIES, FETCH_RESTAURANTS } from './types';
// import API from "../utils/API";
import axios from 'axios';
require('dotenv').config()

// The thunk middleware allows us to call the dispatch function directly
// so that we can make asynchronous requests
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

export const fetchAcivities = () => dispatch => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // .then(data => this.setState({posts: data}));
        .then(activities =>
            dispatch({
                type: FETCH_ACTIVITIES,
                // Whatever data is coming in with the type we can call 
                // payload or whatever we want
                payload: activities
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
        .then(res => {
            res.json()
            console.log("testing")
        })

        // Make sure we can make a post and get the data back
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
};

export const findEvents = (startDate, endDate, type, minPrice, maxPrice) => dispatch => {
    console.log('findEvents action called');
    console.log(startDate + " " + endDate);
    const ticketmasterAPI = ' ';
    return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=Chicago&apikey=${ticketmasterAPI}&startDateTime=${startDate}T05:30:00Z&endDateTime=${endDate}T04:30:00Z&size=100`)
        .then(response => dispatch({
            type: FETCH_EVENTS,
            payload: response.data._embedded.events
        }))
};

export const findFood = (startDate, endDate, cuisinesAPI, minPrice, maxPrice) => dispatch => {
    // console.log('findEvents action called');
    // console.log(startDate + " " + endDate);
    const zomatoAPI = '';
    return axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&cuisines=${cuisinesAPI}`, {
        headers: {
            "user-key": zomatoAPI
        }
    }).then(response => dispatch({
        // const zomatoArray = response.data.restaurants;
        type: FETCH_RESTAURANTS,
        payload: response.data.restaurants
    }))
};
// export const loadEvents = (ticketmasterArray) => dispatch => {
//     return 

// }
