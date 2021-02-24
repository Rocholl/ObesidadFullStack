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
    router.get("/maparray/",Health.CentersAverage);
    router.get("/maparray2/",Health.SequelizeOnlyAverage);
    router.get("/pipebysex/:sex",Health.healthExtendBySexAverages);
    router.get("/pipebyage/:age",Health.healthExtendByAgeAverages);
    router.get("/pipebyphisicalactivity/:ph",Health.healthExtendByPhisicalAverages);



    


  // Delete a health with id


    app.use('/api/healthextend', router);
};