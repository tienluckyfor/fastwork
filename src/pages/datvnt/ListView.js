import { ArrowDownOutlined } from '@ant-design/icons'
import { Button, Pagination } from 'antd'
import LayoutPage from 'layouts/LayoutPage'
import React from 'react'
import { List, Avatar, Space } from 'antd';

const ListView = () => {
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

    const dataList = [
        {
            name: "Kiểm tra hệ thống định kỳ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        },
        {
            name: "Kiểm tra hệ thống ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        },
        {
            name: "Kiểm tra ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        },
        {
            name: "Kiểm hệ thống định kỳ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        },
        {
            name: "Kiểm định kỳ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        }
        ,
        {
            name: "Kiểm định kỳ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        }
        ,
        {
            name: "Kiểm định kỳ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        }
        ,
        {
            name: "Kiểm định kỳ",
            status: "Not Started",
            startDay: "2021-10-18",
            dueDay: "2021-10-18",
            assignTo: {
                name: "Alex Shatov",
                avatar: "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            },
            tags: "",
            priority: "Medium "

        }
    ]

    return (
        <>
            {/* <section style={{ background: "#f3dbe4" }} className="antialiased bg-gray-100 text-gray-600 px-4 pt-10"> */}
            <section>
                {/* <div className="px-16">
                    <div className="flex justify-between py-4">
                        <div>
                            <button style={{ background: "#c14f79" }} class="hover:bg-blue-700 text-white font-bold py-3 px-4">
                                Đang Làm
                            </button>
                        </div>
                        <div>
                            <button style={{ background: "#c14f79" }} class="hover:bg-blue-700 text-white font-bold py-3 px-4">
                                New Task
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div className="w-full mx bg-white shadow-lg rounded-sm border border-gray-200">
                            <div class="grid grid-cols-10 gap-1 py-1">
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="text-white text-center py-2 text-xl">Task</div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                                <div style={{ background: "#c14f79" }} className="py-2"></div>
                            </div>
                            <div className="p-3">
                                <div>
                                    Task Summary
                                </div>
                                <div className="container mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                        {dataSummary.map((item, index) => {
                                            return (
                                                <div key={index} className="border-r-2 border-gray-2 ">
                                                    <div>
                                                        <h1 className="text-3xl"> {item.task} </h1>
                                                    </div>
                                                    <div> <p style={{ color: item.color }} className="text-lg font-bold" >{item.type}</p> </div>
                                                    <div> {item.text} </div>
                                                    <div> {item.count} </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="px-16 ">
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
                                {
                                    dataList.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">
                                                        <input type="checkbox" />
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500"> {index + 1} </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left"> {item.name} </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left py-2 px-2 bg-yellow-100">
                                                        <p className="text-yellow-500 font-bold"> {item.status} <span className="text-blue-200">...</span>  </p>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {item.startDay}
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {item.dueDay}
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={item.assignTo.avatar} width={40} height={40} alt="Alex Shatov" /></div>
                                                        <div className="font-medium text-gray-800"> {item.assignTo.name} </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left py-2 px-2">
                                                        <p className="text-yellow-500 font-bold">  </p>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left py-2 px-2 ">
                                                        <p className="text-blue-300 font-bold"> {item.priority} ...</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                            {/* <tbody className="text-sm divide-y divide-gray-100">
                                <List
                                    pagination={{
                                        pageSize: 5,
                                    }}
                                    dataSource={dataList}
                                    renderItem={item => (
                                        <List.Item>
                                            <tr key={item}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">
                                                        <input type="checkbox" />
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500"> 1 </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left"> {item.name} </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left py-2 px-2 bg-yellow-100">
                                                        <p className="text-yellow-500 font-bold"> {item.status} <span className="text-blue-200">...</span>  </p>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {item.startDay}
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {item.dueDay}
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={item.assignTo.avatar} width={40} height={40} alt="Alex Shatov" /></div>
                                                        <div className="font-medium text-gray-800"> {item.assignTo.name} </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left py-2 px-2">
                                                        <p className="text-yellow-500 font-bold">  </p>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left py-2 px-2 ">
                                                        <p className="text-blue-300 font-bold"> {item.priority} ...</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </List.Item>
                                    )}
                                />
                            </tbody> */}
                        </table>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ListView
