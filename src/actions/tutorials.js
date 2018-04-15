import { RootURL } from './index';
import axios from 'axios';

export const fetchSuccess = 'fetchSuccess';
export const fetchFailed = 'fetchFailed';
export const fetchSuccessTutorial = 'fetchSuccessTutorial';
export const fetchFailedTutorial = 'fetchFailedTutorial';


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

export function successFetchingTutorial(res) {
    return {
        type: fetchSuccessTutorial,
        payload: res
    }
}

export function failedFetchingTutorial() {
    return {
        type: fetchFailedTutorial
    }
}

export function fetchTutorial(id) {
    const tutorialURL = `${RootURL}/tutorials/${id}`
    return (dispatch) => {
        axios.get(tutorialURL)
            .then((response) => {
                dispatch(successFetchingTutorial(response))
            }).catch((response) => {
                dispatch(failedFetchingTutorial())
            })
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