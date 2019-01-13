import _ from 'lodash';
import {
    GET_LIST_START,
    GET_LIST_FAIL,
    GET_LIST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    movieList: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LIST_START:
            return {
                loading: true,
                error: ''
            };
        case GET_LIST_FAIL:
            return {
                loading: false,
                error: 'Unable to load movies!'
            }
        case GET_LIST_SUCCESS:
            return {
                loading: false,
                error: '',
                movieList: action.payload
            }
        default:
            return state;
    }
};
