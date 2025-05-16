import { Pesquisa } from './styles'

const Campo = () => {
  return (
    <Pesquisa>
      <label htmlFor="pesquisar">
        <i className="bi bi-search"></i>
      </label>
      <input id="pesquisar" type="text" placeholder="Pesquisar" />
    </Pesquisa>
  )
}

export default Campo
