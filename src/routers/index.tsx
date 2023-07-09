import App from '../App'
import { createBrowserRouter } from 'react-router-dom'
import { AddPlansPage, AddUnitPage, HomePage, ListPlansPage, ListUnitsPage } from '../pages'
import { Login } from '../pages/Login'

export const router = createBrowserRouter([

    {
        path: '/login',
        element: <Login />,


    },

    {

        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/listagem-planos',
                element: <ListPlansPage />
            },
            {
                path: '/adicionar-plano',
                element: <AddPlansPage />
            },
            {
                path: '/listagem-unidades',
                element: <ListUnitsPage />
            },
            {
                path: '/adicionar-unidade',
                element: <AddUnitPage />
            }
        ]

    },



    {
        path: '*',
        element: <h1 style={{
            textAlign: 'center'
        }}>Error 404</h1>
    }


])
