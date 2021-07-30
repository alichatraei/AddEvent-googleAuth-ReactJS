import React from 'react'
const Home = React.lazy(() => import('./Views/Home/Home'))
type TRoutes =
    {
        path: string,
        exact: boolean,
        page: React.LazyExoticComponent<() => JSX.Element>
    }[]
const Routes: TRoutes = [{
    path: '/',
    exact: true,
    page: Home
}]
export default Routes;