import { useState, useEffect, useContext } from "react";
import React from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const navigate = useNavigate();

    const { isAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        if (isAuthenticated) {
          navigate('/birthday');
        }
      }, [isAuthenticated, navigate]);

    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                const accessToken = data.getAccessToken().getJwtToken();
                const idToken = data.getIdToken().getJwtToken();
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem("idToken", idToken);
                console.log("onSuccess: ", data);

                window.location.reload();
            },
            onFailure: (err) => {
                console.error("onFailure: ", err);
                setErrorMessage(err.message);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            },
        })
    };

    return (
        <div className="flex items-center justify-center mt-20">
            <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div class="hidden bg-cover bg-center lg:block lg:w-1/2" 
                    style={{ backgroundImage: "url('https://i.imgur.com/UJMZNop.jpg')" }}></div>


                    <form onSubmit={onSubmit} class="w-full px-6 py-5 md:px-8 lg:w-1/2">

                        <p class="mt-2 mb-8 text-xl text-center text-gray-600 dark:text-gray-200">
                            Log In Form!
                        </p>
                        <div class="flex items-center justify-between mt-4">
                            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                            <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">Log In
                                with your email</a>

                            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                        </div>

                        {errorMessage && 
                        <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="flex items-center justify-center w-12 bg-red-500">
                                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                                </svg>
                            </div>

                            <div class="px-4 py-2 -mx-3">
                                <div class="mx-3">
                                    <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                                    <p class="text-sm text-gray-600 dark:text-gray-200">
                                        {errorMessage}
                                    </p>
                                </div>
                            </div>
                        </div>}
                        
                        <div class="mt-4">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                            <input id="LoggingEmailAddress" value={email} placeholder="Your email" 
                            onChange={(event) => setEmail(event.target.value)}
                            class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                        </div>

                        <div class="mt-4">
                            <div class="flex justify-between">
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                            </div>

                            <input id="loggingPassword" value={password} placeholder="Password" 
                            onChange={(event) => setPassword(event.target.value)}
                            class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                        </div>

                        <div class="mt-10">
                            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00C5A1] rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="submit">
                                Log In
                            </button>
                        </div>

                        <div class="flex items-center justify-between mt-6 mb-2">
                            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                            <a href="#" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline" onClick={() => navigate('/signup')}>or Register Now!</a>

                            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>
                    </form>
            </div>
        </div>
    )
}