import React from 'react'
const ListView = React.lazy(() => import('./ListView'))
const KabanView = React.lazy(() => import('./KabanView'))
const MileStone = React.lazy(() => import('./MileStone'))
const MenuHeader = React.lazy(() => import('../../layouts/MenuHeader'))
const Dashboard = React.lazy(() => import('../vulq/Dashboard'))
// test

export const datvntRoutes = [
    { path: 'datvnt/ListView', element: <ListView />, exact: true },
    { path: 'datvnt/KabanView', element: <KabanView />, exact: true },
    { path: 'datvnt/MileStone', element: <MileStone />, exact: true },
    { path: 'datvnt/MenuHeader', element: <MenuHeader />, exact: true },
    { path: 'datvnt/Dashboard', element: <Dashboard />, exact: true },
]
