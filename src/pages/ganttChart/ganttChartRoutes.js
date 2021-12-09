import React from 'react'
const GanttChart = React.lazy(() => import('./GanttChart'))
const OverViewPage = React.lazy(() => import('../overviewPage/OverviewPage'))

export const ganttChartRouter = [
    { path: '/ganttChart', element: <GanttChart/> },
    { path: '/overview', element: <OverViewPage/> },
]