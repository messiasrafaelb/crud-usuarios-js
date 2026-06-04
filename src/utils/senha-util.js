const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

async function gerarHash(senha) {
  return await bcrypt.hash(senha, SALT_ROUNDS);
}

async function compararSenha(senha, hash) {
  return await bcrypt.compare(senha, hash);
}

module.exports = {
  gerarHash,
  compararSenha
};