import * as React from "react";

export default function Hero() {

    const handleFormSubmit = (event) => {
      event.preventDefault();
    
      const email = document.getElementById('email').value;
    
      localStorage.setItem('email', email);
    
      window.location.href = "/signup";
    };

    return (    
      <section class="dark:bg-gray-900">
        <div class="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
                  <div class="relative flex-col items-start m-auto align-middle">
                    <div class="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                      <div class="relative items-center gap-12 m-auto lg:inline-flex">
                        <div class="max-w-xl text-center lg:text-left">
                          <div>
                            <div class="py-6"></div>
                            <span class="w-auto px-4 py-2 mt-10 rounded-full bg-teal-500/10"><span class="text-xs text-teal-500">Never Forget a Birthday Again</span></span>
                            <p class="mt-8 text-4xl font-bold tracking-tighter lg:text-6xl text-slate-900">
                              Stay Connected. Celebrate with friends.
                            </p>
                            <p class="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
                            Easily remember and celebrate your friends' birthdays. 
                            Set reminders, customize messages, and stay connected with those who matter.
                            </p>
                          </div>
                          <div class="flex items-center justify-center w-full pt-8 mx-auto lg:justify-start md:pt-6">
                            <form>
                              <div class="w-full p-2 rounded-xl md:rounded-full bg-teal-500/10 sm:flex sm:items-center sm:relative">
                                <div class="min-w-0 shrink w-60">
                                  <input id="email" aria-label="Email address" autocomplete="email" class="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-blue-500 focus:outline-none focus:ring-blue-500 placeholder:text-gray-400 sm:text-sm" placeholder="Email address" required="" type="email"></input>
                                </div>
                                <button onClick={handleFormSubmit} class="relative inline-flex justify-center flex-none w-full px-6 py-3 ml-1 overflow-hidden text-sm font-medium text-white transition-colors bg-teal-500 rounded-xl md:rounded-full active:before:bg-transparent active:bg-blue-600 active:text-white/80 before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 md:w-auto outline-2 outline-offset-2" type="submit">
                                  <span class="inline">Get Started</span>
                                </button>
                              </div>
                              <p class="mt-3 text-slate-500">Get notified when we launch!</p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
                        <img alt="hero" class="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl" src="https://img.freepik.com/foto-gratis/representacion-3d-avatares-personas-llamada-zoom_23-2149576736.jpg?w=1380&t=st=1687835099~exp=1687835699~hmac=0c2d9ff545a834c1cf2d70864656f7bf4ad64933aeacf1ab1c5d391ef832c2aa"></img>
                      </div>
                    </div>
                  </div>
                </div>
    </section>
    
    
    )
}