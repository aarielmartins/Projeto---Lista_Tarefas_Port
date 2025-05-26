import Contato from '../../components/Contato'
import { Subtitulo } from '../../styles'
import { Conteudo, Dados, UmContato } from './styles'

const ListaDeContatos = () => {
  return (
    <>
      <Conteudo>
        <Dados>
          <Subtitulo>Nome</Subtitulo>
          <Subtitulo>Telefone</Subtitulo>
          <Subtitulo>Email</Subtitulo>
        </Dados>
        <ul>
          <UmContato>
            <Contato />
          </UmContato>
        </ul>
      </Conteudo>
    </>
  )
}

export default ListaDeContatos
