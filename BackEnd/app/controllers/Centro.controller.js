const db = require("../models");
const Centro = db.centro;
const Op = db.Sequelize.Op;

// Create and Save a new Centro
// req --> request (contains the body)
exports.create = (req, res) => {
    // Validate request
    /*if (!req.body.ID_whis || !req.body.Nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }*/

    // Create a Centro
    const centro = {
        idCentro: req.body.Id_Centro,
        Nombre: req.body.Nombre,
        Coordenadas:req.body.Coordenadas,
        idMunicipio: req.body.idMunicipio,
        Codigo_Postal:  parseInt(req.body.Codigo_Postal) 
      
    };

    // Save Centro in the database
    Centro.create(centro)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Centro."
            });
        });
};

// Retrieve all Centros from the database.
exports.findAll = (req, res) => {

    Centro.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Centros."
            });
        });
};

// Find a single Centro with an id
exports.findOne = (req, res) => {
    let id = req.params.id;
    Centro.findByPk(id)
        .then(data => {
            console.log("estos son los datos")
            console.log(data);
            if (!data) {
                res.status(400).send({
                    message: "No Centro found with that id"
                })
            }
            res.send(data);
            return;
        })
        .catch(err => {
            console.log(err.message);
            console.log("hola");
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Centro with id"
            });
            return;
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    let id = req.body.id;


    const centro = {
        idCentro: req.body.Id_Centro,
        Nombre: req.body.Nombre,
        Coordenadas:req.body.Coordenadas,
        idMunicipio: req.body.idMunicipio,
        Codigo_Postal:  parseInt(req.body.Codigo_Postal) 
      
    };
    Centro.update(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Centros."
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    let id = req.params.id;
    Centro.delete(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Centros."
            });
        });
};