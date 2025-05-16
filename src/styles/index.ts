import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

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
  width: 600px;
  height: 700px;
  border-radius: 5%;
  box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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
`

export default EstiloGlobal
