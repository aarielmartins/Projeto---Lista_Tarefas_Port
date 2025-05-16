import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Texto = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${variaveis.cinza};
  margin: 0 16px;
`

export const Informacoes = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    filter: brightness(0);
  }
`
