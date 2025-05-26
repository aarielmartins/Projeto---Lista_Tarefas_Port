import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Informacoes, Tag, Texto } from './styles'
import { identifica } from '../../store/reducers/identificacao'

const Contato = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)
  const identificacao = useSelector((state: RootReducer) => state.identificacao)
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()

  const filtraTarefas = () => {
    return contatos.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <>
      <Informacoes>
        {filtraTarefas().map((cont) => (
          <div key={cont.id} onClick={() => dispatch(identifica(cont.id))}>
            <Texto $selecionado={identificacao === cont.id}>
              <b>{cont.nome}</b>
              <Tag>{cont.tag}</Tag>
            </Texto>
            <Texto $selecionado={identificacao === cont.id}>
              {cont.telefone}
            </Texto>
            <Texto $selecionado={identificacao === cont.id}>{cont.email}</Texto>
          </div>
        ))}
      </Informacoes>
    </>
  )
}

export default Contato
