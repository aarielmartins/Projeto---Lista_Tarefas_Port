import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import identificacaoReducer from './reducers/identificacao'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    identificacao: identificacaoReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
