// Combine all the reducers
import { combineReducers } from 'redux';
import postReducer from './postReducer';

// Combine reducers and then pass in an object
export default combineReducers({
    // Calling post reducers posts
    posts: postReducer
});
