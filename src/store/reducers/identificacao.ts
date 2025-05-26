import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const identificacaoSlice = createSlice({
  name: 'identificacao',
  initialState: null as number | null,
  reducers: {
    identifica: (state, action: PayloadAction<number>) => action.payload,
    limpaIdentificacao: () => null
  }
})

export const { identifica, limpaIdentificacao } = identificacaoSlice.actions
export default identificacaoSlice.reducer
