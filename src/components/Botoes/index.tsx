import { Botao, Button } from './styles'

const Botoes = () => {
  return (
    <>
      <Button>
        <Botao type="button">
          <i className="bi bi-plus-circle-dotted">
            {' '}
            <b>Adicionar</b>{' '}
          </i>
        </Botao>
        {/* <Botao type="button">
          <i className="bi bi-pen">
            {' '}
            <b>Editar</b>{' '}
          </i>
        </Botao>
        <Botao type="button">
          <i className="bi bi-trash2-fill">
            {' '}
            <b>Excluir</b>
          </i>
        </Botao> */}
      </Button>
    </>
  )
}

export default Botoes
