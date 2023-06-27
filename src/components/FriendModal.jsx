import React, { useState } from 'react';

export default function FriendModal({ onClose, link }) {
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');

    const [showNameErrorMessage, setShowNameErrorMessage] = useState(false);
    const [showDateErrorMessage, setShowDateErrorMessage] = useState(false);

    const handleConfirm = async () => {
    
        if (name === '' || day === "" || month === "") {
            setShowNameErrorMessage(true);
            setShowDateErrorMessage(true);
            if(name)setShowNameErrorMessage(false);
            if(day && month)setShowDateErrorMessage(false);
        } else {
            setShowNameErrorMessage(false);
            setShowDateErrorMessage(false);
            

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
                handleCancel();
                window.location.reload();
              } else {
                // Handle error response
                console.error('Post request failed');
              }
            } catch (error) {
              console.error('Error sending post request', error);
            }
          }
    };

    const handleCancel = () => {
        onClose(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDayChange = (event) => {
        setDay(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

  return (
    <div class="relative flex justify-center">
        <div class="fixed inset-0 z-10 overflow-y-auto"  aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
                <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                    <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                        <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                            Add friend's birthday
                        </h3>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            You will receive an email to remember this birthday!
                        </p>

                        <form class="mt-4" action="#">
                            <div>
                                <label for="name" class="block text-sm text-gray-700 dark:text-gray-200">Name</label>
                                <input 
                                value={name}
                                onChange={handleNameChange}
                                type="text" name="name" id="name" placeholder="Enter name" class="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                            </div>

                            <div className="items-center justify-between w-full mt-5 gap-x-2">
                                <label htmlFor="day" className="block text-sm text-gray-500 dark:text-gray-300">
                                    Select your friend's birthdate:
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
                                {showDateErrorMessage && ( <p className="text-red-500">Your birthday cannot be empty!</p>)}
                                {showNameErrorMessage && (<p className="text-red-500">Your name cannot be empty!</p>)}


                            </div>

                            <div class="mt-4 flex justify-end">
                                <button onClick={handleCancel} type="button" class="px-4 py-2 text-sm font-medium text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                                </button>

                                <button onClick={handleConfirm} type="button" class="ml-3 px-4 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Add Friend
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
};

