export default interface Avaliacao {
  id: number
  produtoId: number
  usuarioId: number
  nota: number
  comentario: string
  data: string
  usuario: { nome: string }
}
