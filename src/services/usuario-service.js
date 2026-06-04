const usuarioRepository = require("../repositories/usuario-repository");
const UsuarioNaoEncontrado = require("../errors/usuario-nao-encontrado");
const senhaUtils = require("../utils/senha-util");

const MSG_USUARIO_NAO_ENCONTRADO = "Usuário não encontrado.";

async function registrarUsuario(usuarioRequest) {
  const senhaHash = await senhaUtils.gerarHash(usuarioRequest.senha);
  usuarioRequest.senha = senhaHash;

  return await usuarioRepository.create(usuarioRequest);
}

async function buscarPorId(id) {
  const usuario = await usuarioRepository.findById(id);

  if (!usuario) {
    throw new UsuarioNaoEncontrado(MSG_USUARIO_NAO_ENCONTRADO);
  }

  return usuario;
}

module.exports = {
  registrarUsuario,
  buscarPorId,
};
