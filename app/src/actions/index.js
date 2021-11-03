import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getCat = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://thatcopy.pw/catapi/rest/')
        .then(res => {
            dispatch(fetchSuccess(res.data.url));
        })
        .catch(err=>{
            dispatch(fetchFail(err));
        });
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (url) => {
    return({type: FETCH_SUCCESS, payload: url});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}