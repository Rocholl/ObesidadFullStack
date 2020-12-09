module.exports = app => {
    const Centro = require("../controllers/Centro.controller.js");

    var router = require("express").Router();

    // Create a new Centro
    router.post("/", Centro.create);

    // Retrieve all Centros
    router.get("/", Centro.findAll);

    // Retrieve a single Centro with id
    router.get("/:id", Centro.findOne);

    // Update a Centro with id
    router.put("/:id", Centro.update);

    // Delete a Centro with id
    router.delete("/:id", Centro.delete);



    app.use('/api/centro', router);
};