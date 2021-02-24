const db = require("../models");
const sequelize = require("../models/index");
const HealthsExtend = db.healthExtend;
const Op = db.Sequelize.Op;
const Centro = db.centros;
const Health = db.health;
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
        idHealth: req.body.idHealth,
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

exports.healthExtendBySexAverages = async (req, res) => {

    let sex = req.params.sex;

    db.sequelize.query(`SELECT AVG(healthextends.peso) as peso,AVG(healthextends.percent_Grasa) as percent_Grasa 
    ,AVG(healthextends.percent_Hidratacion) as percent_Hidratacion ,AVG(healthextends.peso_Muscular) as peso_Muscular 
    ,AVG(healthextends.masa_Muscular) as masa_Muscular ,AVG(healthextends.peso_Oseo) as peso_Oseo 
    ,AVG(healthextends.kilocalorias) as kilocalorias, AVG(healthextends.edad_Metabolica) as edad_Metabolica 
    ,AVG(healthextends.altura) as altura ,AVG(healthextends.masa_Viseral) as masa_Viseral 
    ,AVG(healthextends.perimetro_Abdominal) as perimetro_Abdominal ,AVG(healthextends.actividad_Fisica) as actividad_Fisica 
      from healthextends where idHealth in(SELECT idHealths FROM health  WHERE sexo = "` + sex + `")`,{type: Sequelize.QueryTypes.SELECT}).then(data => {

        if (!data) {
            res.status(400).send({
                message: "No Centro found with that id"
            })
        }

        res.json(data);
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })

}

exports.healthExtendByAgeAverages = async (req, res) => {

    let age = req.params.age;

    db.sequelize.query(`SELECT AVG(healthextends.peso) as peso,AVG(healthextends.percent_Grasa) as percent_Grasa 
    ,AVG(healthextends.percent_Hidratacion) as percent_Hidratacion ,AVG(healthextends.peso_Muscular) as peso_Muscular 
    ,AVG(healthextends.masa_Muscular) as masa_Muscular ,AVG(healthextends.peso_Oseo) as peso_Oseo 
    ,AVG(healthextends.kilocalorias) as kilocalorias, AVG(healthextends.edad_Metabolica) as edad_Metabolica 
    ,AVG(healthextends.altura) as altura ,AVG(healthextends.masa_Viseral) as masa_Viseral 
    ,AVG(healthextends.perimetro_Abdominal) as perimetro_Abdominal ,AVG(healthextends.actividad_Fisica) as actividad_Fisica 
      from healthextends where idHealth in(SELECT idHealths FROM health  WHERE edad = ` + age + `)`,{type: Sequelize.QueryTypes.SELECT}).then(data => {

        if (!data) {
            res.status(400).send({
                message: "No Centro found with that id"
            })
        }

        res.json(data);
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })

}
exports.healthExtendByPhisicalAverages = async (req, res) => {

    let ph = req.params.ph;

    db.sequelize.query(`SELECT AVG(healthextends.peso) as peso,AVG(healthextends.percent_Grasa) as percent_Grasa 
    ,AVG(healthextends.percent_Hidratacion) as percent_Hidratacion ,AVG(healthextends.peso_Muscular) as peso_Muscular 
    ,AVG(healthextends.masa_Muscular) as masa_Muscular ,AVG(healthextends.peso_Oseo) as peso_Oseo 
    ,AVG(healthextends.kilocalorias) as kilocalorias, AVG(healthextends.edad_Metabolica) as edad_Metabolica 
    ,AVG(healthextends.altura) as altura ,AVG(healthextends.masa_Viseral) as masa_Viseral 
    ,AVG(healthextends.perimetro_Abdominal) as perimetro_Abdominal ,AVG(healthextends.actividad_Fisica) as actividad_Fisica 
      from healthextends where idHealth in(SELECT idHealths FROM health  WHERE actividad_Fisica = ` + ph + `)`,{type: Sequelize.QueryTypes.SELECT}).then(data => {

        if (!data) {
            res.status(400).send({
                message: "No Centro found with that id"
            })
        }

        res.json(data);
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })

}
exports.CenterAverage = async (req, res) => {

    let id = req.params.id;
    db.sequelize.query(`SELECT AVG(healthextends.peso) as peso,AVG(healthextends.percent_Grasa) as percent_Grasa 
    ,AVG(healthextends.percent_Hidratacion) as percent_Hidratacion ,AVG(healthextends.peso_Muscular) as peso_Muscular 
    ,AVG(healthextends.masa_Muscular) as masa_Muscular ,AVG(healthextends.peso_Oseo) as peso_Oseo 
    ,AVG(healthextends.kilocalorias) as kilocalorias, AVG(healthextends.edad_Metabolica) as edad_Metabolica 
    ,AVG(healthextends.altura) as altura ,AVG(healthextends.masa_Viseral) as masa_Viseral 
    ,AVG(healthextends.perimetro_Abdominal) as perimetro_Abdominal ,AVG(healthextends.actividad_Fisica) as actividad_Fisica 
    FROM healthextends INNER JOIN health ON health.idHealths= healthextends.idHealth WHERE health.idCentro= `+id,{type: Sequelize.QueryTypes.SELECT}).then(data => {
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


    db.sequelize.query(`SELECT AVG(healthextends.peso) as peso,AVG(healthextends.percent_Grasa) as percent_Grasa ,AVG(healthextends.percent_Hidratacion) as percent_Hidratacion ,AVG(healthextends.peso_Muscular) as peso_Muscular 
    ,AVG(healthextends.masa_Muscular) as masa_Muscular ,AVG(healthextends.peso_Oseo) as peso_Oseo ,AVG(healthextends.kilocalorias) as kilocalorias,
    AVG(healthextends.edad_Metabolica) as edad_Metabolica ,AVG(healthextends.altura) as altura ,AVG(healthextends.masa_Viseral) as masa_Viseral ,AVG(healthextends.perimetro_Abdominal) as perimetro_Abdominal ,AVG(healthextends.actividad_Fisica)  as actividad_Fisica
      from healthextends where idHealth in (SELECT idHealths FROM health ) `,{type: Sequelize.QueryTypes.SELECT}).then(data => {



        res.json(data) ;
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })



}

exports.CentersAverage = async (req, res) => {
    db.sequelize.query(`SELECT centros.nombre,centros.lat,centros.long, AVG(healthextends.peso) as peso,AVG(healthextends.percent_Grasa) as percent_Grasa ,AVG(healthextends.percent_Hidratacion) as percent_Hidratacion ,AVG(healthextends.peso_Muscular) aspeso_Muscular 
    ,AVG(healthextends.masa_Muscular) as masa_Muscular ,AVG(healthextends.peso_Oseo) as peso_Oseo ,AVG(healthextends.kilocalorias) as kilocalorias,
    AVG(healthextends.edad_Metabolica) as edad_Metabolica ,AVG(healthextends.altura) as altura ,AVG(healthextends.masa_Viseral) as masa_Viseral ,AVG(healthextends.perimetro_Abdominal) as perimetro_Abdominal ,AVG(healthextends.actividad_Fisica)  as actividad_Fisica
      from healthextends,health,centros where healthextends.idHealth=health.idHealths AND health.idCentro=centros.idCentro GROUP BY centros.nombre`,{type: Sequelize.QueryTypes.SELECT}).then(data => {



        res.send(data);
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })

}

exports.SequelizeOnlyAverage = async (req, res) => {
    HealthsExtend.findAll({
        raw: true,
        attributes: {
            exclude: [
                "id",
                "fecha",
                "peso",
                "percent_Grasa",
                "percent_Hidratacion",
                "peso_Muscular",
                "masa_Muscular",
                "peso_Oseo",
                "kilocalorias",
                "edad_Metabolica",
                "altura",
                "masa_Viseral",
                "perimetro_Abdominal",
                "actividad_Fisica",
                "idHealth"
            ], include: [
                [Sequelize.col('health->centros.nombre'), 'nombre'],
                [Sequelize.fn('AVG', Sequelize.col('peso')), 'AverageWeight']
            ]
        }, 
        group: "nombre",
        include: [{
            model: Health,
            attributes: [],
            include: [{
                model: Centro,
                attributes: [],
                as: "centros"
            }]
        }]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err.message);

        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Centro with id"
        });
        return;
    })

}
