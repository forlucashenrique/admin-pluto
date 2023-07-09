
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { useAuth } from './contexts/AuthContext'

function App() {

  const navigate = useNavigate()

  const { authenticated } = useAuth()

  if (!authenticated) {
    navigate('/login', {
      replace: true
    })
  } else {
    return (
      <Layout>
        <Outlet />
      </Layout>
    )
  }


}

export default App
