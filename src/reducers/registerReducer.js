import { register } from '../actions/index'

export default function (state = {}, action) {
    switch (action.type) {
        case register:
            console.log('Rejestruje ', action.payload)
            state = action.payload;
            return state;
        default:
            return state;
    }
}