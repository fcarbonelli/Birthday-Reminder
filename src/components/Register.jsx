import React, { useState, useEffect } from "react";
import UserPool from "../UserPool";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if(err) {
                console.error(err);
            }
            console.log(data);
        });
    };

    return (
        
        <section class="relative flex justify-center items-center h-screen bg-gradient-to-b from-white to-transparent">
            <div class="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center">
                <div class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                <div class="flex flex-col">
                    <div>
                    <h2 class="text-4xl text-black">Let's get started!</h2>
                    <p class="mt-2 text-sm text-gray-500">
                        Complete the details below so I can process your request and then schedule a time to discuss your goals.
                    </p>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <input autocomplete="false" name="hidden" style={{ display: "none" }} />
                    <input name="_redirect" type="hidden" value="#" />
                    <div class="mt-4 space-y-6">
                    <div>
                        <label class="block mb-3 text-sm font-medium text-gray-600" for="name">
                        Your name
                        </label>
                        <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Your name" id="name" 
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        ></input>
                    </div>
                    <div class="col-span-full">
                        <label class="block mb-3 text-sm font-medium text-gray-600" for="email">
                        Email
                        </label>
                        <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="email@example.com" autocomplete="off" type="email" id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        ></input>
                    </div>
                    <div class="col-span-full">
                        <label class="block mb-3 text-sm font-medium text-gray-600" for="password">
                        Password
                        </label>
                        <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Password" type="password" id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        ></input>
                    </div>
                    <div class="col-span-full">
                        <button class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                        Register
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </section>
    
    
    )
}