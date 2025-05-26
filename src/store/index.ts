import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import identificacaoReducer from './reducers/identificacao'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    identificacao: identificacaoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
