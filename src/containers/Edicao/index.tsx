import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import InputMask from 'react-input-mask'
import { Campos, Formulario, Preencher } from './styles'
import * as enums from '../../utils/enums/TipoContato'
import { cadastrar, editar } from '../../store/reducers/contatos'
import { Botao, BotaoSemLink, Button } from '../../styles'
import { limpaIdentificacao } from '../../store/reducers/identificacao'

const Edicao = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [tag, setTag] = useState(enums.TipoContato.AMIGO)

  const idSelecionado = useSelector((state: RootReducer) => state.identificacao)
  const contatoSelecionado = useSelector((state: RootReducer) =>
    state.contatos.itens.find((c) => c.id === idSelecionado)
  )

  useEffect(() => {
    if (contatoSelecionado) {
      setNome(contatoSelecionado.nome)
      setTelefone(contatoSelecionado.telefone)
      setEmail(contatoSelecionado.email)
      setTag(contatoSelecionado.tag)
    }
  }, [contatoSelecionado])

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (idSelecionado) {
      dispatch(
        editar({
          id: idSelecionado,
          nome,
          telefone,
          email,
          tag
        })
      )
    } else {
      dispatch(cadastrar({ nome, telefone, email, tag }))
    }
    navigate('/')
  }

  return (
    <Formulario onSubmit={cadastrarContato}>
      <Preencher>
        <Campos>
          <label htmlFor="Nome">
            <i className="bi bi-person-fill-up"></i>
          </label>
          <input
            required
            id="Nome"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
        </Campos>
        <Campos>
          <label htmlFor="Telefone">
            <i className="bi bi-phone"></i>
          </label>
          <InputMask
            required
            id="Telefone"
            type="tel"
            mask="(99) 99999-9999"
            placeholder="(00) 00000-0000"
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
          />
        </Campos>
        <Campos>
          <label htmlFor="Email">
            <i className="bi bi-envelope-at-fill"></i>
          </label>
          <input
            required
            id="Email"
            type="email"
            placeholder="usuario@dominio.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </Campos>
        <Campos>
          <label htmlFor="Tag">
            <i className="bi bi-tag-fill"></i>
          </label>
          <select
            required
            id="tags"
            value={tag}
            onChange={(evento) =>
              setTag(evento.target.value as enums.TipoContato)
            }
          >
            <option value={enums.TipoContato.AMIGO}>Amigo</option>
            <option value={enums.TipoContato.FAMILIA}>Família</option>
            <option value={enums.TipoContato.TRABALHO}>Trabalho</option>
            <option value={enums.TipoContato.OUTRO}>Outro</option>
          </select>
        </Campos>
      </Preencher>
      <Button>
        <Botao to="/" onClick={() => dispatch(limpaIdentificacao())}>
          <i className="bi bi-backspace">
            <b> Voltar </b>
          </i>
        </Botao>
        <BotaoSemLink type="submit">
          <i className="bi bi-plus-circle-dotted">
            <b> Cadastrar </b>
          </i>
        </BotaoSemLink>
      </Button>
    </Formulario>
  )
}

export default Edicao
