
require('dotenv').config();
module.exports = {
    development: {
        username: "root",
        password: null,
        database: "obesidadSql",
        host: "localhost",
        dialect: 'mysql',
        pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
        seederStorage:"json",
        seederStoragePath:"sequelizeSeeds.json",
        migrationStorage:"sequelize",
        define:{
          timestamps:false,

        }
      },
      test: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.DB_HOST,
        dialect: 'mysql',pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
      },
      production: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
      }
      
    }
    