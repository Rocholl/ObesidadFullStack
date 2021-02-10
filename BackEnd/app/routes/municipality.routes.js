module.exports = app => {
    const Municipio = require("../controllers/municipio.controller.js");

    var router = require("express").Router();

    // Create a new Usuario
    router.post("/", Municipio.create);

    // Retrieve all Usuarios
    router.get("/", Municipio.findAll);

    // Retrieve a single Usuario with id
    router.get("/:id", Municipio.findOne);

    // Update a Usuario with id
    router.put("/:id", Municipio.update);

    // Delete a Usuario with id
    router.delete("/:id", Municipio.delete);

    router.get(":id",Municipio.findHealthbyMunicipio);

    app.use('/api/municipio', router);
};