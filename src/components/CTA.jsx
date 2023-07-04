import * as React from "react";

export default function CTA() {


    return (    
        <section className="pb-20 lg:py-12 lg:flex lg:justify-center">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div class="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div class="lg:w-1/2">
                    <div class="h-64 bg-cover lg:h-full" style={{ backgroundImage: "url('https://i.imgur.com/CzIYCYv.jpg')",backgroundSize: "contain",
      backgroundRepeat: "no-repeat", }}
                    ></div>
                </div>

                <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Ready to start <span class="text-teal-500">Inviting?</span>
                    </h2>

                    <p class="mt-4 text-gray-500 dark:text-gray-300">
                        Sign up today and receive personalized notifications to ensure you're always prepared for the next birthday bash. <br/>
                        Don't let those important moments slip away – be a part of our <span class="font-bold">birthday reminder</span> service
                    </p>

                    <div class="inline-flex w-full mt-6 sm:w-auto">
                        <a href="/signup" class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-teal-500 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Start Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    
    )
}