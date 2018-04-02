import { register } from '../actions/index'

export default function (state = {}, action) {
    switch (action.type) {
        case register:
            console.log(action)
            return state;
        default:
            return state;
    }
}