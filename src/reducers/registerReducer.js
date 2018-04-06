import * as actions from '../actions/index'

const initState = {
    success: false,
    message: "Usługa rejestrująca nie jest teraz dostępna"
}

export default function (state = initState, action) {
    switch (action.type) {
        case actions.registerSuccess:
            return {
                ...state, success: true, message: action.payload.data.message
            }
        case actions.registerFail:
            return state;
        case actions.registerEmailFail:
            return {
                ...state, success: false, message: action.payload.data.message
            }
        case actions.registerUsernameFail:
            return {
                ...state, success: false, message: action.payload.data.message
            }
        default:
            return state;
    }
}