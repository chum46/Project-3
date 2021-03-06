// Evaluates any actions that are committed such as 
// fetching events 

import { FETCH_ACTIVITIES } from '../actions/types';

// Initial state is an object 
const initialState = {
    // items array that represents the activities that come in from our action
    items: [],
}

// Function that evaluates what type we're dealing with. Takes in two
// things: the state which is equal to our initial state and the action
// which includes a type (what we are evaluating). Switch is a common way
export default function(state = initialState, action) {
    // action is an object with a type (NEW_POST or Fetch.. etc)
    // can add other stuff as well but has to have a type
    switch(action.type) {
        case FETCH_ACTIVITIES:
            console.log('reducer', action.payload);
            return {
                // spread operator "..." sends current state
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}