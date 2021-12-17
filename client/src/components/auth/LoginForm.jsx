import {useState, useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
// import { Button } from 'bootstrap';

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });

    const {username, password} = loginForm;

    const onUsernameChange = event => console.log({...loginForm, username: event.target.value});
    const onPasswordChange = event => console.log({...loginForm, password: event.target.value});

    return (
        <div className="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input id="username" type="text" placeholder="Username" value={username} onChange={onUsernameChange} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input id="password" type="password" onChange={onPasswordChange} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>

                <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
/*
import React, {useState} from 'react';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history =useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-info')) {
            history.push("/add");
        }
    }, [])

    async function login() {
        console.warn(username, password);
        let item = {username, password};
        let result = await fetch("http://localhost:8080/api/authentication/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add");
    }

    return (
        <div>
            <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input onChange={(e) => setUsername(e.target.value)}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>

                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input onChange={(e) => setPassword(e.target.value)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>

                <div class="flex items-center justify-between">
                <button onClick={login} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                </div>

            </form>
            </div>
        </div>
    )
}

export default Login;
*/
