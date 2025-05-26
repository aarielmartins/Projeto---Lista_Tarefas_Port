import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Campos, Formulario } from './styles'
import * as enums from '../../utils/enums/TipoContato'
import { cadastrar } from '../../store/reducers/contatos'
import { BotaoSemLink, Button } from '../../styles'
import Contato from '../../models/Contato'

const Edicao = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [tag, setTag] = useState(enums.TipoContato.AMIGO)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const contatoParaAdicionar = { nome, telefone, email, tag }

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <Formulario onSubmit={cadastrarContato}>
      <Campos>
        <label htmlFor="Nome">
          <i className="bi bi-person-fill-up"></i>
        </label>
        <input
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
        <input
          id="Telefone"
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </Campos>
      <Campos>
        <label htmlFor="Email">
          <i className="bi bi-envelope-at-fill"></i>
        </label>
        <input
          id="Email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </Campos>
      <Campos>
        <label htmlFor="Tag">
          <i className="bi bi-tag-fill"></i>
        </label>
        <select
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
      <Button>
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
