import axios from 'axios';

export const registerSuccess = 'registerSuccess';
export const registerEmailFail = 'registerEmailFail'
export const registerUsernameFail = 'registerUsernameFail'
export const registerFail = 'registerFail';
const RootURL = 'http://localhost:8081/api'
const AuthURL = `${RootURL}/auth`;
const checkUser = `${AuthURL}/checkUser`;

export function registerSuc(res) {
    return {
        type: registerSuccess,
        payload: res
    }
}

export function registerEmailFailed(res) {
    return {
        type: registerEmailFail,
        payload: res
    }
}

export function registerUsernameFailed(res) {
    return {
        type: registerUsernameFail,
        payload: res
    }
}

export function registerFailed(res) {
    return {
        type: registerFail,
        payload: res
    }
}



export default function registerUser(user, callbackOnTrue) {
    const registerURL = `${AuthURL}/register`;
    return (dispatch) => {
        axios.post(registerURL, user)
            .then((response) => {
                console.log(response.response.data.message)
                dispatch(registerSuc(response));
            })
            .catch((response) => {
                console.log(response.response.data.message)
                if (response.data.message.includes("Email")) {
                    dispatch(registerEmailFailed(response))
                } else if (response.data.message.includes("Username")) {
                    dispatch(registerUsernameFailed(response))
                } else {
                    dispatch(registerFailed(response))
                }
            })
    }
}

