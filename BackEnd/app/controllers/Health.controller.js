const db = require("../models");
const sequelize = require("../models/index");
const Healths = db.healths;
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
exports.findHealthbyMunicipio= (req,res)=>{
 db.sequelize.query(`SELECT * from healths INNER JOIN centros   
    ON healths.idCentros = centros.idCentro 
 HAVING centros.idMunicipios =` +req.params.id).then((result) => {
    res.json(result);
 }).catch((err) => {
    res.status(500).send({
        message: err.message || "Some error occurred while retrieving Healths."
    });
 });

}

exports.findHealthbyCentro= async (id)=>{
  
  console.log(1);
    let count= await  Healths.count({
       
      where: { idCentros: id }
    });
    let sum= await Healths.sum(('masa_Grasa'),{
       
        where: { idCentros:id }
      });let sum2= await Healths.sum(('masa_Viseral'),{
       
        where: { idCentros:id }
      });
    let centro =   await   Centro.findByPk(id);
    let total= sum/count;
    let total2= sum2/count;
    let data= {centro,total,total2}
    
   return data;
      
}

exports.findHealthbyCentr2o= async (req,res)=>{
  
  
    let count= await  Healths.count({
       
      where: { idCentros: req.body.id }
    });
    let sum= await Healths.sum(('masa_Grasa'),{
       
        where: { idCentros:req.body.id }
      });
      let sum2= await Healths.sum(('masa_Viseral'),{
       
        where: { idCentros:req.body.id  }
      });
      let total= sum/count;
      let total2= sum2/count;
       Centro.findByPk(req.body.id).then(async data =>{
        let centro= {data,total,total2};
    await    res.json(centro);
       }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Healths."
        });
     });
   
    
 
      
}

