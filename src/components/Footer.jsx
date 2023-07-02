import * as React from "react";

export default function Footer() {


    return (    
        <footer class="bg-white dark:bg-gray-900">
            <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <a href="/" className="px-2  inline-flex items-center text-3xl font-semibold tracking-tighter text-black ml-10 md:ml-0 z-20">
                Birthday Reminder
                </a>

                <p class="text-sm text-gray-600 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>

                
            </div>
        </footer>
    
    )
}