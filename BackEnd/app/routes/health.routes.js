module.exports = app => {
    const Health = require("../controllers/health.controller.js");

    var router = require("express").Router();

    // Create a new health
    router.post("/", Health.create);

    // Retrieve all healths
    router.get("/", Health.findAll);

  // Delete a health with id
  router.get("/centro/:id", Health.findHealthbyCentro);
  router.get("/municipio/:id", Health.findHealthbyMunicipio);
    app.use('/api/health', router);
};