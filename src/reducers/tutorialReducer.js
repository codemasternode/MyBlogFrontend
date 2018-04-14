import * as tutorials from '../actions/tutorials';

const initState = {
    error: false
}


export default function (state = initState, action) {
    switch (action.type) {
        case tutorials.fetchSuccessTutorial:
            return {
                error: false, data: action.payload.data
            }
        case tutorials.fetchSuccessTutorial:
            return {
                ...state, false: true
            }
        default:
            return state;
    }

}