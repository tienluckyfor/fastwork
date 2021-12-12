import { ArrowDownOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import LayoutPage from 'layouts/LayoutPage'
import React from 'react'
import DragList from './DragList'
const KabanView = () => {
    const dataSummary = [
        {
            task: 4,
            type: "Not Started",
            text: "Tasks assigned to me:",
            count: 2,
            color: "orange"
        },
        {
            task: 20,
            type: "In Progress",
            text: "Tasks assigned to me:",
            count: 1,
            color: "blue"
        },
        {
            task: 0,
            type: "Testing",
            text: "Tasks assigned to me:",
            count: 0,
            color: "black"
        },
        {
            task: 0,
            type: "Awiting Feedback",
            text: "Tasks assigned to me:",
            count: 0,
            color: "green"
        },
        {
            task: 2,
            type: "Complete",
            text: "Tasks assigned to me:",
            count: 1,
            color: "#bcdc94"
        },

    ]
    return (
        <>
            <section>
                {/* <div className="px-16 ">
                    <div className="overflow-x-auto bg-white mt-3">
                        <table className="table-auto w-full">
                            <thead className="text-ls font-semibold uppercase text-black-400 bg-white">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">
                                            <input type="checkbox" />
                                        </div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">#</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">Status</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">Start date</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">Due Date <ArrowDownOutlined style={{ color: "blue" }} /> </div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">Assigned to</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">Tags</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left font-bold">Priority</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                            <input type="checkbox" />
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">62</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">Kiểm tra hệ thống định kỳ</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2 bg-yellow-100">
                                            <p className="text-yellow-500 font-bold"> Not Started <span className="text-blue-200">...</span>  </p>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            2021-10-18
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            2021-10-18
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width={40} height={40} alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800">Alex Shatov</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2">
                                            <p className="text-yellow-500 font-bold">  </p>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2 ">
                                            <p className="text-blue-300 font-bold"> Medium ...</p>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                            <input type="checkbox" />
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">62</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">Kiểm tra hệ thống định kỳ</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2 bg-yellow-100">
                                            <p className="text-yellow-500 font-bold"> Not Started <span className="text-blue-200">...</span>  </p>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            2021-10-18
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            2021-10-18
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width={40} height={40} alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800">Alex Shatov</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2">
                                            <p className="text-yellow-500 font-bold">  </p>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2 ">
                                            <p className="text-blue-300 font-bold"> Medium ...</p>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                            <input type="checkbox" />
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">62</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">Kiểm tra hệ thống định kỳ</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2 bg-yellow-100">
                                            <p className="text-yellow-500 font-bold"> Not Started <span className="text-blue-200">...</span>  </p>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            2021-10-18
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            2021-10-18
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width={40} height={40} alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800">Alex Shatov</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2">
                                            <p className="text-yellow-500 font-bold">  </p>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left py-2 px-2 ">
                                            <p className="text-blue-300 font-bold"> Medium ...</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
                <div className="px-16 ">
                    <div className="overflow-x-auto bg-white mt-4">
                        <DragList />
                    </div>
                </div>
            </section>
        </>

    )
}

export default KabanView
