import React, { useState, useEffect } from 'react';

export default function EditModal({ onClose, link, friend }) {

    const [status, setStatus] = useState(true);
    const [uniqueLink, setUniqueLink] = useState("");
    const [deleteModal, setDeleteModal] = useState(false);


    useEffect(() => {
        setStatus(friend.send);
        setUniqueLink(link)
      }, [friend, link]);

    const handleConfirm = async () => {
        if (status === friend.send) { return; }

        const requestBody = {
            uniqueLink: uniqueLink,
            status: status,
            friendId: friend.friendId
        };

        try {
            const response = await fetch('https://6kkx92zz75.execute-api.us-east-1.amazonaws.com/friend/status', {
            method: 'POST',
            body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                handleCancel()
            } else {
            console.error('Request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCancel = () => {
        onClose(false);
    };

    const handleDeleteModal = () => {
        setDeleteModal(!deleteModal)
    };

    const handleDelete = () => {
        const endpoint = `https://6kkx92zz75.execute-api.us-east-1.amazonaws.com/friend/${link}/id/${friend.friendId}`;

        fetch(endpoint, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then(response => {
            if (response.ok) {
                handleCancel()
                window.location.reload();
            } else {
                console.error('Failed to delete friend');
            }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

  return (
    <div class="relative flex justify-center">
        <div class="fixed inset-0 z-10 overflow-y-auto"  aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-900 bg-opacity-20 transition-opacity" aria-hidden="true"></div>
                <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                    <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                        <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                            Edit {friend.name} Status
                        </h3>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Update the permissions
                        </p>

                        <form class="mt-4" action="#">

                            <div className="items-center justify-between w-full mt-5 gap-x-2">
                                <label htmlFor="day" className="block text-sm text-gray-500 dark:text-gray-300">
                                    Select if you want to receieve an email for this friend:
                                </label>
                                <div className="flex gap-x-2">                                  

                                    <select
                                        id="status"
                                        value={status}
                                        onChange={handleStatusChange}
                                        className=" mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    >
                                    <option value={true}>Enable</option>
                                    <option value={false}>Disable</option>

                                    </select>
                                </div>


                            </div>

                            <div class="mt-4 flex justify-end">
                                <button onClick={handleDeleteModal} type="button" class="ml-3 px-4 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Delete
                                </button>

                                <button onClick={handleCancel} type="button" class="ml-3 px-4 py-2 text-sm font-medium text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                                </button>

                                <button onClick={handleConfirm} type="button" class="ml-3 px-4 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Save
                                </button>
                            </div>
                            {deleteModal && (
                            <>
                                <div className="mt-4 flex justify-center">
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"> Are you sure you want to delete this friend?</p>
                                </div>
                                
                                <div className="mt-4 flex justify-center">
                                <button
                                    onClick={handleDeleteModal}
                                    type="button"
                                    className="ml-3 px-4 py-2 text-sm font-medium text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                >
                                    No
                                </button>
                                <button
                                    onClick={handleDelete}
                                    type="button"
                                    className="ml-3 px-4 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                >
                                    Yes, delete
                                </button>
                                </div>
                            </>
                            )}
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
};

