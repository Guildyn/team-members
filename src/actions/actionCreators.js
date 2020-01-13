import {
  USER_LOADING,
  USER_SUCCESS,
  USER_FAILED
} from './ActionTypes'; 

export const userLoading = bool => ({
    type: USER_LOADING,
    userLoad: bool
  });
  
  export const userData = userData => ({
    type: USER_SUCCESS,
    userData
  });
  
  export const userFailed = bool => ({
    type: USER_FAILED,
    userFail: bool
  });

export const userDataFetch = (url) => {
    return dispatch => {
      dispatch(userLoading(true));
      fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(userLoading(false));
            return response;
        })
        .then(response => response.json())
        .then(data => {dispatch(userData(data))})
        .catch(() => dispatch(userFailed(true)));
    };
  }