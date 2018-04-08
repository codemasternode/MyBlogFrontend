import { RootURL } from './index';
import axios from 'axios';

export const fetchSuccess = 'fetchSuccess';
export const fetchFailed = 'fetchFailed';

export function successFetching(res) {
    return {
        type: fetchSuccess,
        payload: res
    }
}

export function failFetching(res) {
    return {
        type: fetchFailed,
        payload: res
    }
}


export default function fetchTutorials() {
    const tutorialsURL = `${RootURL}/tutorials/getAll`
    return (dispatch) => {
        axios.get(tutorialsURL)
            .then((response) => {
                console.log(response);
                dispatch(successFetching(response));
            })
            .catch((response) => {
                dispatch(failFetching(response));
            });
    }
}