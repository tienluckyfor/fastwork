import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import ListView from 'pages/datvnt/ListView';
import LayoutPage from './LayoutPage';
import SideBarLeft from 'common/SideBarLeft';
import SideBarRight from 'common/SideBarRight';
import KabanView from 'pages/datvnt/KabanView';
import MileStone from 'pages/datvnt/MileStone';
import OverviewPage from 'pages/overviewPage/OverviewPage'
import Dashboard from 'pages/vulq/Dashboard';
import Files from 'pages/vulq/Files';
import Support from 'pages/vulq/Support';
const MenuHeader = () => {
    const { TabPane } = Tabs;
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
    const [page, setPage] = useState("ListView")
    const linkPage = page

    const Page = () => {
        if (linkPage === "KabanView") {
            return <KabanView />;
        }
        if (linkPage === "MileStone") {
            return <MileStone />;
        }
        if (linkPage === "ListView") {
            return <ListView />
        }
        if (linkPage === "OverviewPage") {
            return <OverviewPage />
        }
        if (linkPage === "Dashboard") {
            return <Dashboard />
        }
        if (linkPage === "Files") {
            return <Files />
        }
        if (linkPage === "Support") {
            return <Support />
        }
        
    }
    return (
        <div style={{ background: "#f3dbe4" }} className="antialiased bg-gray-100 text-gray-600 px-4 pt-10">
            <div className="flex">
                <SideBarLeft />
                <div className="w-screen w-4/5 px-1 py-1">
                    <div className="px-16">
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
                            {/* <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200"> */}
                            <div className="w-full mx bg-white shadow-lg rounded-sm border border-gray-200">
                                <div class="grid grid-cols-10 gap-1 py-1">

                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"
                                        onClick={() => setPage("ListView")}
                                    >Task</div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"
                                        onClick={() => setPage("KabanView")}>Kaban</div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"
                                        onClick={() => setPage("MileStone")}>Mile</div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"
                                        onClick={() => setPage("OverviewPage")}
                                    >
                                        Overview
                                    </div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"
                                        onClick={() => setPage("Dashboard")}
                                    >
                                        Dashboard
                                    </div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"
                                        onClick={() => setPage("Files")}
                                    >
                                        Files
                                    </div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"
                                        onClick={() => setPage("Support")}
                                    >
                                        Support
                                    </div>
                                    
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"></div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"></div>
                                    <div style={{ background: "#c14f79" }} className="cursor-pointer text-white text-center py-2 text-xl"></div>

                                </div>
                                {
                                    page === "OverviewPage" || page === "MileStone" || page === "Dashboard" || page === "Files" || page === "Support" ? null : <>
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
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    {Page()}
                </div>
                <SideBarRight />
            </div >
        </div>
    )
}

export default MenuHeader
