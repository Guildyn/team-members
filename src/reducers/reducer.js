import {
    USER_LOADING,
    USER_SUCCESS,
    USER_FAILED
} from '../actions/ActionTypes'; 

export const userLoading = (state = false, action) => {
    switch (action.type) {
        case USER_LOADING:
            return action.userLoad;
        default:
            return state;
    }
}

export const userData = (state = [], action) => {
    switch (action.type) {
        case USER_SUCCESS:
            return action.userData;
        default:
            return state;
    }
}

export const userFailed = (state = false, action) => {
    switch (action.type) {
        case USER_FAILED:
            return action.userFail;
        default:
            return state;
    }
}