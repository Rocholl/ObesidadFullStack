module.exports = app => {
    const Class = require("../controllers/Cursos.controller.js");
  
    var router = require("express").Router();

    // Create a new Class
    router.get("/:id",Class.findOne);

    // Retrieve all Classs
   




    app.use('/api/class', router);
};