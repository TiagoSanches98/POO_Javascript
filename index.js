import User from "./user.js";
import docente from "./docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com', '1998-06-06');
console.log(novoUser.exbirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-07-12');
console.log(novoAdmin.nome)