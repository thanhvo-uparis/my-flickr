import {createContext, useReducer} from 'react';
import { authReducer } from '../reducers/authReducer';
import {LOCAL_STORAGE_TOKEN_NAME} from './constants';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [authState, dispath] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    });

    const loginUser = async userForm => {
        try {
            const response = await axios.post('http://localhost:8080/api/authentication/login', userForm);
            console.log(response.data)
            if(response.data.success)
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);

            return response.data

        } catch (error) {
            if(error.response.data) return error.response.data
            else return {success: false, message: error.message}
        }
    }

    const authContextData = {loginUser};

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;