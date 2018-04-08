import * as tutorials from '../actions/tutorials';

const initState = {
    error: false,
    data: []
}


export default function (state = initState, action) {
    switch (action.type) {
        case tutorials.fetchSuccess:
            console.log(action.payload.data)
            return {
                error: false, data: action.payload.data
            }
        case tutorials.fetchFailed:
            return {
                ...state, false: true
            }
        default:
            return state;
    }

}