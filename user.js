export default class User {
    #nome
    #email
    #nasc
    #role
    #ativo
    constructor(nome, email, nasc, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nasc = nasc
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nasc(){
        return this.#nasc
    }

    set nome(novoNome){
        this.#nome = novoNome
    }


    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            ativo: this.#ativo,
            role: this.#role,
            nasc: this.#nasc
        })
    }
    exbirInfos(){
        const objUser = this.#montaObjUser();
        return `${this.#nome} ${this.#email} ${this.#nasc}${this.#role} ${this.#ativo}`;
    }
}