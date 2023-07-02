import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
    const navigate = useNavigate();

    return (
        
      <div  class="relative flex justify-center">
        <div class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                    <div>
                        <div class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div>
    
                        <div class="mt-2 text-center">
                            <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">Thank you!</h3>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Your friend will receive an email when your birthday arrives.
                            </p>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Want to try it yourself? Sign Up. Its free!
                            </p>
                        </div>
                    </div>
    
                    <div class="mt-5 sm:flex sm:items-center sm:justify-between">
                        <a href="/" class="text-sm text-blue-500 hover:underline">Learn more</a>
    
                        <div class="sm:flex sm:items-center ">
                            <button onClick={() => navigate('/signup')} class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#14B8A6] rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Sign Up!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}