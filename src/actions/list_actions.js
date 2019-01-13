import firebase from 'firebase';
import {
    GET_LIST_START,
    GET_LIST_FAIL,
    GET_LIST_SUCCESS
} from './types';

export const getListStart = () => {
    // send GET_LIST_START to reducer to set global state
    // indicating that the retrieval is starting
    return {
        type: GET_LIST_START
    };
};

export const getList = () => async dispatch => {
    // call getListStart()
    getListStart();

    const ref = firebase.database()
        .ref('02-real-time-search-redux-firebase/movies')
        .orderByChild('rank')

    try {
        ref.once('value', snapshot => {
            return dispatch({
                type: GET_LIST_SUCCESS,
                payload: snapshot.val()
            });
        })        
    } catch (err) {
        console.log(`Error: ${err}`);
        return dispatch({
            type: GET_LIST_FAIL
        });
    }
};
