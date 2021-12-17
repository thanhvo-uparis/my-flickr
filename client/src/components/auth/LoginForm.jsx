import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    
    async function login() {
        const response = await fetch('http://localhost:8080/api/authentication/login', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({username, password})
        });

        const {data} = await response.json();
        setToken(data.token);
        console.log(data);
        navigate("/home");

    };

    return (
        <div className="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input id="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                
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
    )
}

export default LoginForm;