import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Link } from 'react-router-dom'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Fundo = styled.div`
  background: ${variaveis.gradiente};
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: #fff;
  max-height: 100%;
  width: 650px;
  height: 700px;
  border-radius: 5%;
  box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
`

export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 40px;
  color: #fff;
  text-align: center;
`

export const Subtitulo = styled.h2`
  font-size: 16px;
  font-weight: 750;
  text-transform: uppercase;
  text-align: center;
  color: ${variaveis.cinza};

  @media (max-width: 600px) {
    display: none;
  }
`
export const Botao = styled(Link)`
  background: ${variaveis.gradiente};
  border: none;
  width: 10em;
  padding: 13px;
  border-radius: 50px;
  margin: 10px 30px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  i {
    font-style: normal;
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    b {
      margin-left: 5px;
    }
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
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const BotaoSemLink = styled.button`
  background: ${variaveis.gradiente};
  border: none;
  width: 10em;
  padding: 13px;
  border-radius: 50px;
  margin: 10px 30px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  i {
    font-style: normal;
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    b {
      margin-left: 5px;
    }
  }

  &:hover {
    filter: brightness(1.2);
    color: ${variaveis.cinza};
  }
`

export default EstiloGlobal
