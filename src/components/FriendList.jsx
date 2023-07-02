import React, { useState } from 'react';
import FriendModal from './FriendModal';
import EditModal from './EditModal';

export default function FriendList({friends, link}) {

        const [modalVisible, setModalVisible] = useState(false);
        const [editModalVisible, setEditModalVisible] = useState(false);
        const [selectedFriend, setSelectedFriend] = useState({});

        const handleRowClick = (id) => {
            setEditModalVisible(true);
            setSelectedFriend(friends[id])
        };

        const handleAddFriend = () => {
            setModalVisible(true);
        };
        const handleModalClose = (value) => {
            setModalVisible(value);
        };
        const handleEditModalClose = (value) => {
            setEditModalVisible(value);
        };
        function calculateDaysLeft(day, month) {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; 
        const currentDay = currentDate.getDate();
        const currentYear = currentDate.getFullYear();
        
        const targetMonth = monthToNumber(month);
        const targetYear = currentMonth > targetMonth || (currentMonth === targetMonth && currentDay > day)
            ? currentYear + 1
            : currentYear;
        
        const targetDate = new Date(targetYear, targetMonth - 1, day); 
        
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
        
        return daysLeft;
        }
        
        function monthToNumber(month) {
        const monthMap = {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        };
        
        return monthMap[month];
    }
      
    return (
        <section class="flex justify-center py-1 bg-blueGray-50" >
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 md:px-4 mx-auto mt-12 ">
                <div class="block w-full mt-2 md:bg-slate-200 lg:mt-0 rounded-3xl">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-0 shadow-lg rounded-2x1  ">
                        <div class="rounded-t mb-0 px-4 py-3 border-0 ">
                            <div class="flex flex-wrap items-center ">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-blueGray-700">Friend's List</h3>
                                </div>
                                <div  class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button onClick={handleAddFriend} type="button" class="text-white bg-[#00A9BE] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Friend</button>
                                </div>
                                {modalVisible && <FriendModal onClose={handleModalClose} link={link} />}
                            </div>
                        </div>
                        
                        <div class="block w-full overflow-x-auto rounded-2xl">
                            <table class="items-center w-full border-collapse ">
                                <thead >
                                    <tr>
                                        <th class="px-4 md:px-6 lg:px-8 xl:px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Friend name </th>
                                        <th class="px-2 md:px-6 lg:px-8 xl:px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Birthdate </th>
                                        <th class="px-2 md:px-6 lg:px-8 xl:px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Days left </th>
                                        <th class="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                {friends.map((friend, index) => (
                                    
                                    <tr key={index}>
                                    <td className="border-t-0 px-4 md:px-6 lg:px-8 xl:px-10 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left text-blueGray-700">
                                        {friend.name}
                                    </td>
                                    <td className="border-t-0 px-2 md:px-6 lg:px-8 xl:px-10 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                                        {friend.month}, {friend.day} 
                                    </td>
                                    <td className="border-t-0 px-2 md:px-6 lg:px-8 xl:px-10 align-center border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                                        {/* Calculate and display the number of days left */}
                                        {calculateDaysLeft(friend.day, friend.month)}
                                    </td>
                                    {editModalVisible && <EditModal onClose={handleEditModalClose} link={link} friend={selectedFriend} />}

                                    <td className="">
                                        <button onClick={() => handleRowClick(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}