import * as React from "react";
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [logged, setLogged] = useState(false);
    const { isAuthenticated, handleSignOut } = useContext(AuthContext);

    const toggleMenu = () => {
      setOpen(!open);
    };
    const logout = () => {
      setLogged(false);
      setOpen(false);
      handleSignOut();
      navigate('/');
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      }, [isAuthenticated, navigate]);

    return (
        
      <div className="w-full mx-auto bg-[#f1f1f1] border-b 2xl:max-w-12xl z-50" >
        <div className="relative flex flex-col w-full p-3 mx-auto bg-[#f1f1f1] md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 z-50">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a className="px-2 py-2 inline-flex items-center text-3xl font-semibold tracking-tighter text-black ml-10 md:ml-0 z-20" href="/">
              Birthday Reminder
            </a>
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden z-50">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={open ? 'hidden' : 'inline-flex'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className={open ? 'inline-flex' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {open && (
            <div className="flex flex-col items-center mt-4 z-50">
              {logged ? (
                <>
                  <button
                    onClick={() => {toggleMenu(); navigate('/birthday');}}
                    className="inline-flex z-20 items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#00C5A1] rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black mt-2"
                  >
                    Birtdates!
                  </button>
                  <button
                    onClick={() => {logout();}}
                    className="block px-4 py-2 mt-2 text-m text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline z-20"
                  >         
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {toggleMenu(); navigate('/login');}}
                    className="block px-4 py-2 mt-2 text-m text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline z-20"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => {toggleMenu(); navigate('/signup');}}
                    className="inline-flex z-20 items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#00C5A1] rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black mt-2"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          )}

          <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row z-20">  
            <div className="inline-flex items-center gap-2 list-none lg:ml-auto mr-20">
            {logged ? (
              <> 
                <button onClick={() => navigate('/birthday')} className="hidden md:block inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#14B8A6] rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[#00C5A1] active:bg-gray-800 active:text-white focus-visible:outline-black">
                  Birthdates!
                </button>
                <button onClick={() => {navigate('/'); logout();}} className="hidden md:block px-4 py-2 mt-2 text-m text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                  Log out
                </button>   
              </>
            ) : (
              <>
                <button onClick={() => navigate('/login')} className="hidden md:block px-4 py-2 mt-2 text-m text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                  Sign in
                </button>
                <button onClick={() => navigate('/signup')} className="hidden md:block inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#14B8A6] rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[#00C5A1] active:bg-gray-800 active:text-white focus-visible:outline-black">
                  Sign up
                </button>
              </>
            )}
            </div>
          </nav>
        </div>
      </div>
  );
}