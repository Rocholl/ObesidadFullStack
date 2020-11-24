const usuarios = require("./usuarios.model.js")(sequelize, Sequelize);
const curso = require("./curso.model.js")(sequelize, Sequelize);
const health = require("./health.model.js")(sequelize, Sequelize);
const usuario_Curso = require("./usuario_Curso.model.js")(sequelize, Sequelize);
const centro_Datos = require("./centro_Datos.model.js")(sequelize, Sequelize);
const centro = require("./Centro.model.js")(sequelize, Sequelize);
const municipio = require("./municipio.model.js")(sequelize, Sequelize);