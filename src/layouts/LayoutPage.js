import SideBarLeft from 'common/SideBarLeft'
import SideBarRight from 'common/SideBarRight'
import React from 'react'

const LayoutPage = ({ children }) => {
    return (
        <div className="flex">
            <SideBarLeft />
            <div className="w-screen w-4/5 px-1 py-1">
                {children}
            </div>
            <SideBarRight />
        </div >
    )
}

export default LayoutPage
