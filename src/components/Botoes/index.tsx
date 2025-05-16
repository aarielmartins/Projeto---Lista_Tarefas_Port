import { Botao, Button } from './styles'

const Botoes = () => {
  return (
    <>
      <Button>
        <Botao type="button">
          <i className="bi bi-pen"> Editar</i>
        </Botao>
        <Botao type="button">
          <i className="bi bi-trash2-fill"> Excluir</i>
        </Botao>
      </Button>
    </>
  )
}

export default Botoes
