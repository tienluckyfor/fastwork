import SideBarLeft from 'common/SideBarLeft'
import SideBarRight from 'common/SideBarRight'
import React from 'react'
import MenuHeader from './MenuHeader'

const LayoutPage = () => {
    // const LayoutPage = ({ children }) => {
    return (
        <div style={{ background: "#f3dbe4" }} className="antialiased bg-gray-100 text-gray-600 px-4 pt-10">
            <div className="flex">
                <SideBarLeft />
                <div className="w-screen w-4/5 px-1 py-1">
                    <MenuHeader />
                </div>
                <SideBarRight />
            </div >
        </div>
    )
}

export default LayoutPage
