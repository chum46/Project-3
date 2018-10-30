// Evaluates any actions that are committed such as 
// fetching posts or creating new posts

import { FETCH_POSTS, NEW_POST } from '../actions/types';

// Initial state is an object 
const initialState = {
    // items array that represents the posts that come in from our action
    items: [],
    // item object to represent the single posts that we add when we get
    // the response back
    item: {}
}

// Function that evaluates what type we're dealing with. Takes in two
// things: the state which is equal to our initial state and the action
// which includes a type (what we are evaluating). Switch is a common way
export default function(state = initialState, action) {
    // action is an object with a type (NEW_POST or Fetch.. etc)
    // can add other stuff as well but has to have a type
    switch(action.type) {
        case FETCH_POSTS:
            // console.log('reducer');
            return {
                // spread operator "..." sends current state
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state, 
                item: action.payload
            }
        default:
            return state;
    }
}