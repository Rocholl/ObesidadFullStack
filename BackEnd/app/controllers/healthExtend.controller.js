const db = require("../models");
const sequelize = require("../models/index");
const HealthsExtend = db.healthExtend;
const Op = db.Sequelize.Op;
const Centro = db.centros;
const { QueryTypes } = require('sequelize');
const { Sequelize } = require("../models");

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
        idHealth: req.body.idHealths,
        fecha: Date.now(),
        peso: req.body.peso,
        percent_Grasa: req.body.percent_Grasa,
        percent_Hidratacion: req.body.percent_Hidratacion,
        peso_Muscular: req.body.peso_Muscular,
        masa_Muscular: req.body.masa_Muscular,
        peso_Oseo: req.body.peso_Oseo,
        edad: req.body.edad,
        kilocalorias: req.body.kilocalorias,
        altura: req.body.altura,
        edad_Metabolica: req.body.edad_Metabolica,



        masa_Viseral: req.body.masa_Viseral,

        perimetro_Abdominal: req.body.perimetro_Abdominal,
        actividad_Fisica: req.body.actividad_Fisica,




    };

    // Save usuario in the database
    HealthsExtend.create(healths)

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

    HealthsExtend.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving usuarios."
            });
        });
};
exports.findHealthbyMunicipio = (req, res) => {
    db.sequelize.query(`SELECT * from healthsExtend INNER JOIN centros   
    ON healths.idCentros = centros.idCentro 
 HAVING centros.idMunicipios =` + req.params.id).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Healths."
        });
    });

}

exports.healthExtendBySexAverages = async (id) => {

    let sex = req.body.sex;

    db.sequelize.query(`SELECT AVG(peso),AVG(percent_Grasa) ,AVG(percent_Hidratacion) ,AVG(peso_Muscular) 
    ,AVG(masa_Muscular) ,AVG(peso_Oseo) ,AVG(kilocalorias),
    AVG(edad_Metabolica) ,AVG(altura) ,AVG(masa_Viseral) ,AVG(perimetro_Abdominal) ,AVG(actividad_Fisica) 
      from healthextends where idHealth in(SELECT idHealths FROM health  WHERE sexo = ` + sex + `)`).then(data => {

        if (!data) {
            res.status(400).send({
                message: "No Centro found with that id"
            })
        }

        return data;
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })

}

exports.CenterAverage = async (req, res) => {
    let id = req.param.id;
    db.sequelize.query(`SELECT AVG(peso),AVG(percent_Grasa) ,AVG(percent_Hidratacion) ,AVG(peso_Muscular) 
   ,AVG(masa_Muscular) ,AVG(peso_Oseo) ,AVG(kilocalorias),
   AVG(edad_Metabolica) ,AVG(altura) ,AVG(masa_Viseral) ,AVG(perimetro_Abdominal) ,AVG(actividad_Fisica)  FROM healthextends WHERE idHealth IN (SELECT idHealth FROM health WHERE idCentro = ?)`, {
        replacements: [id],
        type: QueryTypes.Select
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })
}
exports.Averages = async (req, res) => {


    db.sequelize.query(`SELECT AVG(peso),AVG(percent_Grasa) ,AVG(percent_Hidratacion) ,AVG(peso_Muscular) 
    ,AVG(masa_Muscular) ,AVG(peso_Oseo) ,AVG(kilocalorias),
    AVG(edad_Metabolica) ,AVG(altura) ,AVG(masa_Viseral) ,AVG(perimetro_Abdominal) ,AVG(actividad_Fisica) 
      from healthextends where idHealth in (SELECT idHealths FROM health ) `).then(data => {



        return data;
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })



}

