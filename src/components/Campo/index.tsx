import { useDispatch, useSelector } from 'react-redux'
import { Pesquisa } from './styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

const Campo = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()

  return (
    <Pesquisa>
      <label htmlFor="pesquisar">
        <i className="bi bi-search"></i>
      </label>
      <input
        id="pesquisar"
        type="text"
        placeholder="Pesquisar"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
      />
    </Pesquisa>
  )
}

export default Campo
