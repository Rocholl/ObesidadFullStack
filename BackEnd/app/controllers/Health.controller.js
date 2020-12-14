const db = require("../models");

const Healths = db.healths;
const Op = db.Sequelize.Op;
const Centro = db.centros;
// Create and Save a new usuario
// req --> request (contains the body)
exports.create = (req, res) => {
    // Validate request
    /*if (!req.body.ID_whis || !req.body.Nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }*/

    // Create a usuario
    const healths = {
        idHealths: req.body.idHealths,
        masa_Grasa: req.body.masa_Grasa,
        masa_Viseral: req.body.masa_Viseral,
        idCursos: req.body.idCursos,
        idCentros: req.body.idCentros,
        masa_Muscular: req.body.masa_Muscular,
        altura: req.body.altura,
        peso: req.body.peso,
        edad: req.body.edad
    };

    // Save usuario in the database
    Healths.create(healths)
    
        .then(data => {
          
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the usuario."
            });
        });
      

       
    }


        






// Retrieve all usuarios from the database.
exports.findAll = (req, res) => {

    Healths.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving usuarios."
            });
        });
};

exports.findHealthbyCentro= (req,res)=>{
    console.log(req.params.id);
    Healths.findAll({
       
      where: { idCentros: req.params.id }
    }).then(data =>{
        res.send(data);
    }) .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving usuarios."
        });
    });

}

