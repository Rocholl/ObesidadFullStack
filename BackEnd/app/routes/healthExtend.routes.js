module.exports = app => {
    const Health = require("../controllers/healthExtend.controller.js");

    var router = require("express").Router();

    // Create a new health
    router.post("/", Health.create);

    // Retrieve all healths
    router.get("/", Health.findAll);
    router.get("/avgSex",Health.healthExtendBySexAverages);
    router.get("/avg",Health.Averages);
    router.get("/centeraverage/:id",Health.CenterAverage);

    router.get("/centeraveragetiburaw/:start_date/:end_date",Health.CenterAverageTibuRaw);
    router.get("/centeraveragetibu/:start_date/:end_date",Health.CenterAverageTibu);

  // Delete a health with id


    app.use('/api/healthextend', router);
};