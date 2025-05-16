import Botoes from '../../components/Botoes'
import Contato from '../../components/Contato'
import { Subtitulo } from '../../styles'
import { Conteudo, Dados } from './styles'

const ListaDeContatos = () => {
  return (
    <Conteudo>
      <Dados>
        <Subtitulo>Nome</Subtitulo>
        <Subtitulo>Telefone</Subtitulo>
        <Subtitulo>Email</Subtitulo>
      </Dados>
      <ul>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
      </ul>
      <Botoes />
    </Conteudo>
  )
}

export default ListaDeContatos
