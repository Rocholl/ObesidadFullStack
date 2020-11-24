const usuarios = require("./usuarios.model.js");
const curso = require("./curso.model.js");
const health = require("./health.model.js");
const usuario_Curso = require("./usuario_Curso.model.js");
const centro_Datos = require("./centro_Datos.model.js");
const centro = require("./Centro.model.js");
const municipio = require("./municipio.model.js");

// One to many 
centro.hasMany(usuarios,{as:"usuarios"});
usuarios.belongsTo(centro);
// N to M 