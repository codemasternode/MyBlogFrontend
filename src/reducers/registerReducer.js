import { register } from '../actions/index'

export default function (state = {
    
}, action) {
    switch (action.type) {
        case register:
            const newstate = action.status;
            console.log('Stan  ',newstate)
            return newstate;
        default:
            return state;
    }
}