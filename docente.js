import User from "./user.js";

export default class docente extends User{
    constructor (nome, email, nasc, role = 'admin', ativo = true){
        super(nome, email, nasc, role, ativo)
    }
    aprovaEstudante(estuddante, curso){
    return `Estudante ${estuddante}, aprovado no curso de ${curso}`;
    }
}

