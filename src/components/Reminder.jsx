import React, { useEffect, useState, useContext } from 'react';
import FriendList from "./FriendList"
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';

export default function Reminder() {
    const { isAuthenticated, accessToken, email } = useContext(AuthContext);
    const [link, setLink] = useState(null);
    const [uniqueId, setUniqueId] = useState(null);
    const [friends, setFriends] = useState([]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const getUserByEmail = async () => {
          try {
            const response = await fetch("https://6kkx92zz75.execute-api.us-east-1.amazonaws.com/user/email/"+email);
    
            if (response.ok) {
              const data = await response.json();
              const currentUrl = window.location.href;
              const baseUrl = currentUrl.slice(0, currentUrl.lastIndexOf('/'));
              setLink(baseUrl +"/invite/"+data.link);
              setUniqueId(data.link)
              setFriends(data.friends)
            } else {
              console.error('Error fetching user by email:', response.status);
            }
          } catch (error) {
            console.error('Error fetching user by email:', error);
          }
        };
    
        if (isAuthenticated) {
          getUserByEmail();
        }
      }, [isAuthenticated, accessToken, email]);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    const handleCopyLink = () => {
      navigator.clipboard.writeText(link)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false); // Hide the message after 3 seconds
          }, 2000);
        })
        .catch((error) => {
          console.error('Failed to copy link:', error);
        });
    };

    return (
        
        
        <section id="grad"class="flex relative items-center justify-center " >
            <div class="relative items-center w-full px-5 py-5 mx-auto lg:px-16 lg:py-10 max-w-7xl md:px-12">
                <div>
                    <div class="text-center">
                    <span class="w-auto"><span class="font-semibold text-[#0096D0] text-sm uppercase">DASHBOARD</span></span>
                    <p class="mt-5 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
                        Share the Link with Friends and Stay Connected
                    </p>
                    <p class="max-w-[700px] mx-auto mt-4 text-base lg:text-xl text-slate-500">
                    Simply share the unique link provided below with your friends, 
                    and we'll make sure you receive timely notifications for their upcoming birthdays. 
                    </p>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full pt-12 mx-auto md:pt-10">
                    <form>
                        <div class="w-full p-2 rounded-xl md:rounded-full bg-teal-500/10 sm:flex sm:items-center sm:relative">            
                            <div class="min-w-0 shrink w-60">
                                <input aria-label="Share this link" value={link} style={{  color: "#22A699" }} readOnly class="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-blue-500 focus:outline-none focus:ring-blue-500 placeholder:text-gray-400 sm:text-sm" placeholder="Share this link!" required="" type="text"></input>
                            </div>
                            <button onClick={handleCopyLink} class="relative inline-flex justify-center flex-none w-full px-5 py-3 mt-2 md:mt-0 overflow-hidden text-sm font-medium text-white transition-colors bg-teal-500 rounded-xl md:rounded-full active:before:bg-transparent active:bg-blue-600 active:text-white/80 before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 md:w-auto outline-2 outline-offset-2" type="button">
                                <span class="inline">Copy Link!</span>
                            </button>
                        </div>
                        {copied && <p className="mt-3 text-slate-500 flex items-center justify-center">Link copied!</p>}
                    </form>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <FriendList friends={friends} link={uniqueId} />
            </div>
            <div class="circle-3 rounded-full flex justify-center items-end pb-10"></div>
            <div class="circle-4 rounded-full flex justify-center items-end pb-10"></div>

        </section>
    
    
    )
}