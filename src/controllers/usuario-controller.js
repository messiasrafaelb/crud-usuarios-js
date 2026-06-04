const usuarioService = require("../services/usuario-service");
const UsuarioNaoEncontrado = require("../errors/usuario-nao-encontrado");

async function registrarUsuario(req, res) {
  const request = req.body;

  try {
    const usuarioResponse = await usuarioService.registrarUsuario(request);
    return res.status(201).json(usuarioResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mensagem: "Erro interno do servidor",
    });
  }
}

async function buscarPorId(req, res) {
  const { id } = req.params;

  try {
    const usuarioResponse = await usuarioService.buscarPorId(id);
    return res.status(200).json(usuarioResponse);
  } catch (error) {
    if (error instanceof UsuarioNaoEncontrado) {
      return res.status(404).json({
        mensagem: error.message,
      });
    }

    return res.status(500).json({
      mensagem: "Erro interno do servidor",
    });
  }
}

module.exports = {
  registrarUsuario,
  buscarPorId,
};
