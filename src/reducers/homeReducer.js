import * as home from '../actions/home';

const initState = {
    success: false,
    errorCode: null,
    tutorials: []
}


export default function (state = initState, action) {
    switch (action.type) {
        case home.homeFetchTutorialsSuccess:
            console.log(action.tutorials)
            return {
                ...state,
                success: true,
                tutorials: action.tutorials
            }
        case home.homeFetchFail:
            return {
                ...state,
                errorCode: action.error
            }
        default:
            return state;
    }
}