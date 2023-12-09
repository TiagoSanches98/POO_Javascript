import User from "./user.js";

export default class Admin extends User {
    constructor (nome, email, nasc, role = 'admin', ativo = true){
        super(nome, email, nasc, role, ativo)
    }
    criarCurso(nomeCurso, vagas){
        return `Curso de ${nomeCurso} criado com ${vagas}`
    }
}
