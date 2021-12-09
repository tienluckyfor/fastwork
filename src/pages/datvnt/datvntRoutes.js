import React from 'react'
const ListView = React.lazy(() => import('./ListView'))
const KabanView = React.lazy(() => import('./KabanView'))
const MileStone = React.lazy(() => import('./MileStone'))
// test

export const datvntRoutes = [
    { path: 'datvnt/ListView', element: <ListView />, exact: true },
    { path: 'datvnt/KabanView', element: <KabanView />, exact: true },
    { path: 'datvnt/MileStone', element: <MileStone />, exact: true },
]
