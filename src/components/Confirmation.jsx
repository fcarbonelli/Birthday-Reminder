import React from 'react';

export default function Confirmation() {
  
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Email Confirmation  <span class="text-teal-500">Sent.</span>
                </h2>

                <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                Thank you for registering!
                </p>
                <p class="max-w-4xl mt-1 text-center text-gray-500 dark:text-gray-300">
                We have sent an email to your registered account. <br /> 
                Please check your inbox and confirm your account to complete the registration process. 
                </p>
                <p class="max-w-4xl mt-1 text-center text-gray-500 dark:text-gray-300">
                If you don't see the email in your inbox, please check your spam folder as well.
                </p>

                <div class="inline-flex w-full mt-6 sm:w-auto">
                    <a href="/login" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-300 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Log In
                    </a>
                </div>
            </div>
        </section>
    )

}