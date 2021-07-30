import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { CardsContainer } from '../../Components'
const Home: React.FC<RouteComponentProps> = (props) => {
    return (
        <main>
            <CardsContainer />
        </main>
    )
}

export default Home
