const express = require("express");
const usuarioController = require("../controllers/usuario-controller");
const { route } = require("./test-route");

const router = express.Router();
const API_URI = "/usuarios";

router.post(API_URI, usuarioController.registrarUsuario);
router.get(API_URI + "/:id", usuarioController.buscarPorId);

module.exports = router;
