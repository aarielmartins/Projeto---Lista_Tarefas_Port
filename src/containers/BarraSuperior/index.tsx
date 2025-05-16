import Campo from '../../components/Campo'
import { Titulo } from '../../styles'
import { Cabecalho, ParagrafoBranco } from './styles'

const BarraSuperior = () => {
  return (
    <Cabecalho>
      <Titulo>Stay in touch</Titulo>
      <ParagrafoBranco> your phone list</ParagrafoBranco>
      <Campo />
    </Cabecalho>
  )
}

export default BarraSuperior
