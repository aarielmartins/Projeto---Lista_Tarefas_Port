import EstiloGlobal, { Container, Fundo } from './styles'
import BarraSuperior from './containers/BarraSuperior'
import ListaDeContatos from './containers/ListaDeContatos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Fundo>
        <Container>
          <BarraSuperior />
          <ListaDeContatos />
        </Container>
      </Fundo>
    </>
  )
}

export default App
