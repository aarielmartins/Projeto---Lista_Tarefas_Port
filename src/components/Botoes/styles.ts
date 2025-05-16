import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled.button`
  background: ${variaveis.gradiente};
  border: none;
  width: 10em;
  padding: 13px;
  border-radius: 50px;
  margin: 10px 30px;
  color: #fff;
  cursor: pointer;

  i {
    font-style: normal;
  }

  &:hover {
    filter: brightness(1.2);
    color: ${variaveis.cinza};
  }
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
