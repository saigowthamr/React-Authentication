import {combineReducers} from 'redux';
import reducer from './index';




const store = combineReducers({
    proh:reducer      //proh is global state
})



export default store;





