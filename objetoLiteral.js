const user = {
    nome: 'Tiago',
    email: 't@s.com',
    role: 'admin',
    ativo: true,
    exbirInf: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    role: 'admin',
    criarCurso(){
        console.log('curso criado');
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
user.exbirInf();
// user.exbirInf()


// const exbir = function(){
//     console.log(this.nome);
// }

// const exibirNome = exbir.bind(user)
// exibirNome()
// exbir()