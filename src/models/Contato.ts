import * as enums from '../utils/enums/TipoContato'

class Contato {
  nome: string
  telefone: string
  email: string
  tag: enums.TipoContato
  id: number

  //O CONSTRUCTOR É USADO PARA QUE AO FAZER UM "NEW CONTATO"
  //OS VALORES JÁ SÃO AUTOMATICAMENTE ATRIBUÍDOS
  constructor(
    nome: string,
    telefone: string,
    email: string,
    tag: enums.TipoContato,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.tag = tag
    this.id = id
  }
}

export default Contato
