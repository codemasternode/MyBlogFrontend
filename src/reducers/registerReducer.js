import * as actions from '../actions/index'

const initState = {
    success: false,
    message: ""
}

export default function (state = initState, action) {
    switch (action.type) {
        case actions.registerSuccess:
            console.log('udało się')
            return {
                success: true, message: action.payload.message
            }
        case actions.registerFail:
            console.log('cos innego')
            return {
                success: false,
                message: 'Usługa rejestrująca nie jest teraz dostępna'
            };
        case actions.registerEmailFail:
            console.log('email')
            return {
                success: false, message: action.payload.message
            }
        case actions.registerUsernameFail:
            console.log('username')
            return {
                success: false, message: action.payload.message
            }
        default:
            return state;
    }
}