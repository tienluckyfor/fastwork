import React from 'react'

const SideBarLeft = () => {
    return (
        <div className="bg-white px-5 border border-red-700">
            <ul className="mt-6">
                <li className="flex justify-center text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-reply text-black text-3xl transform"></i>
                    </div>
                </li>
                <div className="border-b-2 border-fuchsia-600"></div>
                <li className="flex justify-center text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6"></li>
                <li className="flex justify-center text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-microchip text-black text-3xl"></i>
                    </div>
                </li>
                <li className="flex justify-center text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-tasks text-black text-3xl"></i>
                    </div>
                </li>
                <li className="flex justify-center text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-tag text-black text-3xl"></i>
                    </div>
                </li>
                <li className="flex justify-center text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-users text-black text-3xl"></i>
                    </div>
                </li>
                <li className="flex justify-center text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-wrench text-black text-3xl"></i>
                    </div>
                </li>
                <li className="flex justify-center text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-share text-black text-3xl"></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideBarLeft
