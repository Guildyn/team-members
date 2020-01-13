import { combineReducers } from 'redux';
import { 
    userLoading,
    userData,
    userFailed
} from './Reducer';

export default combineReducers({
    userLoading,
    userData,
    userFailed
});