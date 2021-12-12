import React from 'react'
const LoginPage = React.lazy(() => import('./LoginPage'))
const FilesPage = React.lazy(() => import('./FilesPage'))
const DashboardPage = React.lazy(() => import('./DashboardPage'))
const SupportPage = React.lazy(() => import('./SupportPage'))

export const vulqRoutes = [
    { path: 'vulq/login', element: <LoginPage/>, exact:true },
    { path: 'vulq/files', element: <FilesPage/>, exact:true },
    { path: 'vulq/dashboard', element: <DashboardPage/>, exact:true },
    { path: 'vulq/support', element: <SupportPage/>, exact:true },
]
