const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Health extends Model{}
Health.init ({
        idHealth: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        masa_Grasa: {
            type: DataTypes.DOUBLE
        },
        masa_Viseral: {
            type: DataTypes.DOUBLE,
        },
        idCurso: {
            type: DataTypes.INTEGER
          
            
        }

      
<<<<<<< HEAD:BackEnd/app/models/health.model.js
    }, {db, timestamps: false });
 
        //  
        module.exports = Health;
=======
    }, { timestamps: false });
    Health.associate = function(models) {
        // associations can be defined here
        Health.hasOne(models.centro, {
          through: 'Usuario_LenguajeP',
          as: 'lenguajesProgramacion',
          foreignKey: 'UsuarioId',
        })
    return Health;
};
>>>>>>> parent of 6d0f470... Sequelize test 2:BackEnd/app/models/DatosHealth.model.js
