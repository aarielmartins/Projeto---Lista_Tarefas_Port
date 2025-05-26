import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Formulario = styled.form`
  color: #fff;
  padding: 4px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${variaveis.cinza};
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input,
  select {
    height: 45px;
    width: 90%;
    border: none;
    cursor: pointer;
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
export const Campos = styled.div`
  border: 1px solid ${variaveis.cinza};
  border-radius: 10px;
  margin: 18px 0;
  width: 70%;
`
