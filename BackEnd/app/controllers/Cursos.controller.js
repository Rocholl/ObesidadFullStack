const db = require("../models");
const Cursos = db.cursos;
const Op = db.Sequelize.Op;
const usuario_Curso= db.usuario_Cursos;
const Usuario = db.usuarios;
const { QueryTypes } = require('sequelize');
const { Sequelize } = require("../models");

exports.create = (req, res) => {
    // Validate request
    /*if (!req.body.ID_whis || !req.body.Nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }*/

    // Create a usuario
    const cursos = {
        idCursos: req.body.idCursos,
        Curso: req.body.Curso,
        
        
    };

    // Save usuario in the database
    Cursos.create(cursos)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the usuario."
            });
        });
};

// Retrieve all usuarios from the database.
exports.findAll = (req, res) => {

    Cursos.findAll({
        where:{}

    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving usuarios."
            });
        });
};





// Find a single usuario with an id
exports.findOne = (req, res) => {
    let id = req.params.id;
    Cursos.findByPk(id)
        .then(data => {
            console.log("estos son los datos")
            console.log(data);
            if (!data) {
                res.status(400).send({
                    message: "No usuario found with that id"
                })
            }
            res.send(data);
            return;
        })
        .catch(err => {
            console.log(err.message);
            console.log("hola");
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving usuario with id"
            });
            return;
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    let id = req.body.id;


    const cursos = {
        idCursos: req.body.idCursos,
        nombre: req.body.nombre,
        isla: req.body.isla
    };
    Cursos.update(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving usuarios."
            });
        });
};


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    let id = req.params.id;
    Cursos.delete(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving usuarios."
            });
        });
};