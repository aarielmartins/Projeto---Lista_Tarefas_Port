import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Conteudo = styled.div`
  max-height: 530px;
  overflow-y: scroll;
  margin: 4px 32px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${variaveis.laranja};
    border-radius: 4px;
  }
`
export const Dados = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 18px 0;
`
