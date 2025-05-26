import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import EstiloGlobal, { Container, Fundo } from './styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import store from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <EstiloGlobal />
        <Fundo>
          <Container>
            <RouterProvider router={rotas} />
          </Container>
        </Fundo>
      </Provider>
    </>
  )
}

export default App
