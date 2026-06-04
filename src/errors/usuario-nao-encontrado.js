class UsuarioNaoEncontradoError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "UsuarioNaoEncontradoError";
  }
}

module.exports = UsuarioNaoEncontradoError;