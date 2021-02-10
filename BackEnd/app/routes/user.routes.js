module.exports = app => {
    const Usuario = require("../controllers/usuarios.controller.js");
    const Auth = require("../controllers/auth.controller");
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
    router.get("/getUserAndClass/:id", Usuario.getClass);

    // Add a Centro to a user
    // Add a Curso to a user
    router.post('/signin/',Auth.signIn);
    router.get('/checkLogin/',Auth.isAuthenticated);
    app.use('/api/usuario', router);
};