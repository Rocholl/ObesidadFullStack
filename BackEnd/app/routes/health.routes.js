module.exports = app => {
    const Health = require("../controllers/health.controller.js");

    var router = require("express").Router();

    // Create a new health
    router.post("/", Health.create);
    router.get("/", Health.findAll);
    router.post("/healthbyclass", Health.findHealthbyCurso);

  // Delete a health with id
 

    app.use('/api/health', router);
};