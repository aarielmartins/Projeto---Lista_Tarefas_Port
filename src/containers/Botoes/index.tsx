import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Botao, Button } from '../../styles/index'
import { limpaIdentificacao } from '../../store/reducers/identificacao'
import { remover } from '../../store/reducers/contatos'

const Botoes = () => {
  const identificacao = useSelector((state: RootReducer) => state.identificacao)
  const dispatch = useDispatch()

  const excluirContato = () => {
    if (identificacao !== null) {
      console.log('ID selecionado:', identificacao)
      dispatch(remover(identificacao))
    }
  }

  return (
    <Button>
      {identificacao === null ? (
        <Botao to="/novo">
          <i className="bi bi-plus-circle-dotted">
            <b> Adicionar </b>
          </i>
        </Botao>
      ) : (
        <>
          <Botao to="/" onClick={() => dispatch(limpaIdentificacao())}>
            <i className="bi bi-backspace">
              <b> Voltar </b>
            </i>
          </Botao>
          <Botao to="/novo">
            <i className="bi bi-pen">
              <b> Editar </b>
            </i>
          </Botao>
          <Botao to="/" onClick={excluirContato}>
            <i className="bi bi-trash2-fill">
              <b> Remover </b>
            </i>
          </Botao>
        </>
      )}
    </Button>
  )
}

export default Botoes
