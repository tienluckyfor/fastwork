import { ArrowDownOutlined } from '@ant-design/icons'
import LayoutPage from 'layouts/LayoutPage'
import React from 'react'
import DragList from './DragList'

const MileStone = () => {
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
                <div className="px-16 ">
                    <div className="overflow-x-auto bg-white mt-3">
                        <DragList />
                    </div>
                </div>
            </section>
        </>

    )
}

export default MileStone
