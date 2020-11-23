module.exports = app => {
    const Usuario = require("../controllers/Usuarios.controller.js");
    const Auth = require("../controllers/Auth.controller");
    var router = require("express").Router();

    // Create a new Usuario
    router.post("/", Usuario.create);

    // Retrieve all Usuarios
    router.get("/", Usuario.findAll);

    // Retrieve a single Usuario with id
    router.get("/:id", Usuario.findOne);

    // Update a Usuario with id
    router.put("/:id", Usuario.update);

    // Delete a Usuario with id
    router.delete("/:id", Usuario.delete);


    router.post('/signin/',Auth.signIn);

    app.use('/api/usuario', router);
};