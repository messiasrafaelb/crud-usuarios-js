class Usuario {
    constructor({id, nome, email, senha, dataNascimento, criadoEm}) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.criadoEm = criadoEm;
    }
}

module.exports = Usuario;