import React from 'react'
import { useRoutes } from 'react-router'
// import RoutePage from './Components/RoutePage'
import Game_1 from './Routers/Game_1'

const AppRouter = () => {
    let element = useRoutes([
        {
            path :"/*", 
            // eslint-disable-next-line react/jsx-pascal-case
            element : <Game_1/>
        }, 
        // {
        //     path:"/game_1/*", 
        //     // eslint-disable-next-line react/jsx-pascal-case
        //     element : <Game_1 />

        // }
    ])
    return element
}

export default AppRouter