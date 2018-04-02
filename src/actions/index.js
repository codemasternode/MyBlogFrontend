import axios from 'axios';

export const register = 'register';
const RootURL = 'http://localhost:8081/api'
const AuthURL = `${RootURL}/auth`;

export default function registerUser(user, callbackOnTrue) {
    const registerURL = `${AuthURL}/register`;

    const request = axios.post(registerURL, user).then(
        (respone) => {
            console.log('To jest odpowiedź',respone);
            if (respone.success == true) {
                callbackOnTrue()
            } 
        }
    );

    return {
        type: register,
        payload: request
    }

}
