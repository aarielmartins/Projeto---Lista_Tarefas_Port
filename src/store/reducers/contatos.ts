import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/TipoContato'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Ariel Martins',
      telefone: '21999551100',
      email: 'amartins@gmail.com',
      tag: enums.TipoContato.TRABALHO,
      id: 1
    },
    {
      nome: 'Augusto Lameira',
      telefone: '21999882334',
      email: 'augusto.lameira@hotmail.com',
      tag: enums.TipoContato.AMIGO,
      id: 2
    },
    {
      nome: 'Irai Cunha',
      telefone: '21988889999',
      email: 'cunhairai@gmail.com',
      tag: enums.TipoContato.FAMILIA,
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    //STATE: ESTADO ATUAL DA SLICE (INICIAL STATE)
    //PAYLOADACTION É O DADO ENVIADO COM A AÇÃO (NO CASO UM NUMBER)
    remover: (state, action: PayloadAction<number>) => {
      //O FILTER PERCORRE CASA ITEM DA LISTA EM STATE
      //PARA CADA UTEM DA LISTA (CONTATO) ELE MANTÉM APENAS OS QUE FOREM
      //DIFERENTES DO ID DA AÇÃO
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      //PROCURA O ID QUE SEJA IGUAL O DA TAREFA RECEBIDA
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      //SE O ID NÃO É ENCONTRADO SE RETORNA "-1", OU SEJA QUANDO É
      //ENCONTRADO É MAIOR QUE 0.NESSE CASO, ATUALIZA PARA A NOVA VERSÃO
      //DOS CAMPOS ALTERADOR
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const jaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )

      if (jaExiste) {
        alert('Já existe um contato com este nome!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, cadastrar, editar } = contatosSlice.actions
export default contatosSlice.reducer
