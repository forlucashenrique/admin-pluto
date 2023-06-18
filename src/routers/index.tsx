import App from '../App'
import { createBrowserRouter } from 'react-router-dom'
import { AddPlansPage, AddUnitPage, HomePage, ListPlansPage, ListUnitsPage } from '../pages'

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/pagina-inicial',
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
