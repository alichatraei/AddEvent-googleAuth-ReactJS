import React from 'react'
import { RouteComponentProps, StaticContext } from 'react-router'
const Home = React.lazy(() => import('./Views/Home/Home'))
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
}]
export default Routes;