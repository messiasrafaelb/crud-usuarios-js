const pool = require("../config/db");

async function create(usuario) {
  const query = `
    INSERT INTO USUARIO (NOME, EMAIL, SENHA, DATA_NASCIMENTO)
    VALUES ($1, $2, $3, $4) RETURNING *
    `;

  const values = [
    usuario.nome,
    usuario.email,
    usuario.senha,
    usuario.dataNascimento,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

async function findById(id) {
  const query = `SELECT * FROM USUARIO WHERE ID = $1`;

  const result = await pool.query(query, [id]);

  return result.rows[0];
}

module.exports = {
  create,
  findById
};
