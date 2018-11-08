// Combine all the reducers
import { combineReducers } from 'redux';
import postReducer from './postReducer';
import eventReducer from './eventReducer';
import foodReducer from './foodReducer';
import activityReducer from './activityReducer';

// Combine reducers and then pass in an object
export default combineReducers({
    // Calling post reducers posts
    posts: postReducer,
    events: eventReducer,
    restaurants: foodReducer,
    activities: activityReducer
});
