import axios from 'axios';

export const register = 'register';
const RootURL = 'http://localhost:8081/api'
const AuthURL = `${RootURL}/auth`;

export default function registerUser(user, callbackOnTrue) {
    const registerURL = `${AuthURL}/register`;

    const request = axios.post(registerURL, user).then(
        (response) => {
            console.log('To jest odpowiedź ',response);
            console.log('To jest żądanie ',request);
            if (response.data.success == true) {
                callbackOnTrue()
            } 
        }
    );
    return { 
        type: register,
        payload: request
    }

}
