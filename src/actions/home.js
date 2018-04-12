import axios from 'axios';
import { RootURL } from './index';

export const homeFetchTutorialsSuccess = 'homeFetchTutorialsSuccess'
export const homeFetchFail = 'homeFetchFail'



export function fetchSuccessTutorials(tutorials) {
    return {
        type: homeFetchTutorialsSuccess,
        tutorials
    }
}


export function fetchFailed(error) {
    return {
        type: homeFetchFail,
        error
    }
}

export function fetchHomeTutorials() {
    return (dispatch) => {
        axios.get(`${RootURL}/tutorials/getSixFirst`)
            .then((response) => {
                dispatch(fetchSuccessTutorials(response))
            })
            .catch((response) => {
                dispatch(fetchFailed(response))
            })
    }
}