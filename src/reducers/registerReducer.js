import * as actions from '../actions/index'

const initState = {
    success: true,
    message: ""
}

export default function (state = initState, action) {
    switch (action.type) {
        case actions.registerSuccess:
            return {
                success: true, message: action.payload.message
            }
        case actions.registerFail:
            return {
                success: false,
                message: 'Usługa rejestrująca nie jest teraz dostępna'
            };
        case actions.registerEmailFail:
            return {
                success: false, message: action.payload.message
            }
        case actions.registerUsernameFail:
            return {
                success: false, message: action.payload.message
            }
        default:
            return state;
    }
}