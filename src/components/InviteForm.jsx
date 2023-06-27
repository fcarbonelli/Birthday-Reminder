import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ThankYou from "./ThankYou"

export default function InviteForm() {

    const { link } = useParams();
    const [username, setUsername] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://6kkx92zz75.execute-api.us-east-1.amazonaws.com/user/link/${link}`);
          if (response.ok) {
            const responseData = await response.json();
            setUsername(responseData.name);
          } else {
            console.error('Error fetching data');
          }
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
  
      fetchData();
    }, [link]);

    const [isOpen, setIsOpen] = useState(true);
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [showNameErrorMessage, setShowNameErrorMessage] = useState(false);
    const [showDateErrorMessage, setShowDateErrorMessage] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };


    const handleConfirm = async () => {
    
        if (name === '' || day === "" || month === "") {
            setShowNameErrorMessage(true);
            setShowDateErrorMessage(true);
            if(name)setShowNameErrorMessage(false);
            if(day && month)setShowDateErrorMessage(false);
        } else {
            setShowNameErrorMessage(false);
            setShowDateErrorMessage(false);
            closeModal();

            try {
              const requestBody = {
                name: name,
                day: day,
                month: month
              };
        
              const response = await fetch(`https://6kkx92zz75.execute-api.us-east-1.amazonaws.com/friend/${link}`, {
                method: 'POST',
                body: JSON.stringify(requestBody)
              });
        
              if (response.ok) {
                // Handle successful response
                console.log('Post request successful');
              } else {
                // Handle error response
                console.error('Post request failed');
              }
            } catch (error) {
              console.error('Error sending post request', error);
            }
          }
      };



    const handleDayChange = (event) => {
        setDay(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <div className="relative flex justify-center">
            {!isOpen && (<ThankYou/>)}
        {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-0 flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
              <div className="flex items-center justify-center mx-auto">
                <img
                  className="h-full rounded-lg"
                  src="https://img.freepik.com/free-psd/3d-birthday-icon-with-cake_23-2149664012.jpg?w=826&t=st=1686955767~exp=1686956367~hmac=a279bd9d69ef1a72ddeaae7b2419fa5490740b0444e5ae841294cf61bddcc258"
                  alt=""
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white" id="modal-title">
                  {username} sent you an invite!
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Share your birthdate with your friend and let him know when to say hi!
                </p>
              </div>

            
            <div class="pt-5">
                <label for="name" class="block text-sm text-gray-500 dark:text-gray-300">Insert your name!</label>
                <input 
                    type="text" 
                    placeholder="Your name" 
                    value={name}
                    onChange={handleName}
                    class="block  mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </div>
            {showNameErrorMessage && (
                <p className="text-red-500">Your name cannot be empty!</p>
            )}

            <div className="items-center justify-between w-full mt-5 gap-x-2">
                    <label htmlFor="day" className="block text-sm text-gray-500 dark:text-gray-300">
                        Select your birthdate:
                    </label>
                <div className="flex gap-x-2">
                    <select
                    id="day"
                    value={day}
                    onChange={handleDayChange}
                    className="block mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    >
                    <option value="">Select Day</option>
                    {Array.from({ length: 31 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                    </select>

                    <select
                        id="month"
                        value={month}
                        onChange={handleMonthChange}
                        className="block mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    >
                    <option value="">Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                    </select>
                </div>
            <div/>
            {showDateErrorMessage && (
                <p className="text-red-500">Your birthday cannot be empty!</p>
            )}
        
            


              <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                <button
                    onClick={handleConfirm}
                    className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#14B8A6] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    
    </div>
    
    )
}