// function User(nome, email){
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`;
//     }
// }

// function Admin(role){
//     User.call(this, 'Juliana', 'j@j.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin.apply('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    exibirInfos: function(nome){
        return nome
    }
}

const novoUser = Object.create(user)
console.log(novoUser.exibirInfos('Tiago'))
console.log(user.isPrototypeOf(novoUser))