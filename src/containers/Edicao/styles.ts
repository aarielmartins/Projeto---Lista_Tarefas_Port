import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Formulario = styled.form`
  color: #fff;
  padding: 4px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${variaveis.cinza};

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

    @media (max-width: 600px) {
      width: 80%;
    }
  }

  .bi {
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const Preencher = styled.div`
  height: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    height: 350px;
  }
`

export const Campos = styled.div`
  border: 1px solid ${variaveis.cinza};
  border-radius: 10px;
  margin: 18px 0;
  width: 70%;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }
`
