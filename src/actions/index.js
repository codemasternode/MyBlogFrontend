import axios from 'axios';

export const register = 'register';
const RootURL = 'http://localhost:8081/api'
const AuthURL = `${RootURL}/auth`;
const checkUser = `${AuthURL}/checkUser`;

export default function registerUser(user, callbackOnTrue) {
    const registerURL = `${AuthURL}/register`;
    const request = axios.post(registerURL, user).then(
        (response) => {
            if (response.data.success == true) {
                callbackOnTrue()
            }
            console.log(odp)
        }
    );
    return {
        type: register,
        payload: null
    }
    
}
