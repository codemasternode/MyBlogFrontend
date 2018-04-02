import axios from 'axios';

export const register = 'register';
const RootURL = 'http://localhost:8081/api'
const AuthURL = `${RootURL}/auth`;

export default function registerUser(user, callbackOnTrue, callbackOnFalse) {
    const registerURL = `${AuthURL}/register`;

    const request = axios.post(registerURL, user).then(
        (respone) => {
            if (respone.success == false) {
                callbackOnFalse()
            } else {
                callbackOnTrue()
            }
        }
    );

    return {
        type: register,
        payload: request
    }

}
