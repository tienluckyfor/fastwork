import React from 'react'
const GanttChart = React.lazy(() => import('./GanttChart'))

export const ganttChartRouter = [
    { path: '/ganttChart', element: <GanttChart/> },
]