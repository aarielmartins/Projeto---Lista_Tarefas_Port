import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Texto = styled.h3<{ $selecionado: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ $selecionado }) =>
    $selecionado ? variaveis.roxo : variaveis.cinza};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 0;

  b {
    min-width: 120px;
  }
`

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  cursor: pointer;

  div {
    display: flex;

    &:hover {
      filter: brightness(0);
    }
  }
`

export const Tag = styled.p`
  background-color: rgb(0, 0, 0, 0.1);
  width: 80px;
  border-radius: 10px;
  margin-top: 4px;
  text-transform: capitalize;

  &:hover {
    color: #fff;
  }
`
