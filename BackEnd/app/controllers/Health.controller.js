const db = require("../models");
const Healths = db.health;
const Op = db.Sequelize.Op;
const Centro = db.centros;
const { QueryTypes } = require('sequelize');


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
    console.log(req.body)
    const healths = {
        idHealths: req.body.idHealths,
        edad: req.body.edad,
        sexo: req.body.sexo,

        num_lista: req.body.num_lista,

        idCentro: req.body.idCentro,
        idCurso: req.body.idCurso


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



exports.findAll = (req,res) =>{
    Healths.findAll().then(data => {

        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the usuario."
        });
    });
}



exports.findHealthbyCurso = (req, res) => {
    let idCurso1 = req.body.idCurso;
    let idCentro1 = req.body.idCentro;
   Healths.findAll({where:{
       idCurso : idCurso1,idCentro:idCentro1
   }}).then(data => {

    res.send(data);
}).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Healths."
        });
     });
}