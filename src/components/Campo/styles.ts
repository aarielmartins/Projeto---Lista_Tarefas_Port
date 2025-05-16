import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Pesquisa = styled.form`
  background-color: rgb(255, 255, 255, 0.5);
  color: #fff;
  padding: 4px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  input {
    height: 30px;
    width: 250px;
    border: none;
    background-color: rgb(255, 255, 255, 0);
    color: ${variaveis.cinza};

    &:focus {
      outline: none;
    }
  }

  .bi {
    margin-left: 10px;
    margin-right: 10px;
  }
`
