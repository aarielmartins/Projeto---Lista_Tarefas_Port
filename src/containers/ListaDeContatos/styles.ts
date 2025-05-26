import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Conteudo = styled.div`
  height: 450px;
  overflow-y: scroll;
  margin: 12px 32px;

  @media (max-width: 600px) {
    height: 300px;
  }

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
export const UmContato = styled.div`
  text-decoration: none;
`
