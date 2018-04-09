import axios from 'axios';
import { RootURL } from './index';

export const homeFetchTutorialsSuccess = 'homeFetchTutorialsSuccess'
export const homeFetchBlogPostsSuccess = 'homeFetchBlogPostsSuccess'
export const homeFetchFail = 'homeFetchFail'



export function fetchSuccessTutorials(tutorials) {
    return {
        type: homeFetchTutorialsSuccess,
        tutorials
    }
}

export function fetchSuccessBlog(blogPosts) {
    return {
        type: homeFetchBlogPostsSuccess,
        blogPosts
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

export function fetchHomeBlogPosts() {
    return (dispatch) => {
        axios.get(`${RootURL}/blogPosts/getSixFirst`)
            .then((response) => {
                dispatch(fetchSuccessBlog(response));
            })
            .catch((response) => {
                dispatch(fetchFailed(response))
            })
    }
}