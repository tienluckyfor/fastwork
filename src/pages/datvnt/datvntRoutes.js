import React from 'react'
const ListView = React.lazy(() => import('./ListView'))
const KabanView = React.lazy(() => import('./KabanView'))

export const datvntRoutes = [
    { path: 'datvnt/ListView', element: <ListView />, exact: true },
    { path: 'datvnt/KabanView', element: <KabanView />, exact: true },
]
