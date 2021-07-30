import React from 'react'
import { RouteComponentProps, StaticContext } from 'react-router'
const Home = React.lazy(() => import('./Views/Home/Home'))
const Dashboard = React.lazy(() => import('./Views/Dashboard/Dashboard'))
type TRoutes =
    {
        path: string,
        exact: boolean,
        page: React.LazyExoticComponent<React.FC<RouteComponentProps<{}, StaticContext, unknown>>>
    }[]
const Routes: TRoutes = [{
    path: '/',
    exact: true,
    page: Home
},
{
    path: '/dashboard',
    exact: true,
    page: Dashboard
}]
export default Routes;